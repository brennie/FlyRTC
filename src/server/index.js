#!/usr/bin/env node

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

express()
  .use('/', (request, response) => response.send(dedent`
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${name} -- FlyRTC</title>
    </head>
    <body></body>
    </html>
  `))
  .listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/.`);
    advertisement.start();
  });