#!/usr/bin/env node

const program = require('kelp-cli');
const lint    = require('kelp-lint');
const build   = require('kelp-build');
const create  = require('create-kanary');

program()
.command('new', create)
.command('lint', lint)
.command('build', build)
.command('help', () => {
  console.log();
  console.log(' kanary <command> [options]');
  console.log();
  console.log(' - new');
  console.log(' - start');
  console.log(' - build');
  console.log(' - lint');
  console.log(' - help');
})
.parse();
