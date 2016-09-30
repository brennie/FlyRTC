#!/usr/bin/env node

const crypto = require('crypto');
const path = require('path');

const dedent = require('dedent-js');
const express = require('express');
const mdns = require('mdns');
const yargs = require('yargs');


const args = yargs
  .usage('$0 NAME PORT')
  .help()
  .alias('h', 'help')
  .demand(2)
  .argv;

const {_: [name, portStr]} = args;
const port = parseInt(portStr);
if (isNaN(port) || port <= 0 || port > 65535) {
  console.error('PORT must be a valid port.');
  process.exit(1);
}

const advertisement = mdns.createAdvertisement(mdns.tcp('flyweb'), port, {
  name: `FlyRTC (${name})`,
});

const secret = crypto
  .createHash('sha1')
  .update(crypto.randomBytes(32), 'binary')
  .digest('hex');

const url = `http://localhost:${port}/`;
const adminUrl = `${url}?secret=${secret}`;

express()
  .get('/', (request, response) => {
    response.send(dedent`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${name} -- FlyRTC</title>
          <script src="/static/app.min.js" defer></script>
          <link rel="stylesheet" type="text/css" href="/static/app.min.css">
        </head>
        <body>
          <div id="content"></div>
        </body>
      </html>
    `);
  })
  .use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')))
  .listen(port, () => {
    console.log(`Server listening at ${url}`);
    console.log(`Admin page: ${adminUrl}`);
    advertisement.start();
  });
