#!/usr/bin/env node
'use strict';
const meow = require('meow');
const got = require('got');

meow(`
	Usage
	  $ is-gitlab-down
	  🦄  It's down. Go outside!
`);

got.head('gitlab.com').then(() => {
	console.error(`\n 🐈  It's up. Go back to work!`);
	process.exitCode = 1;
}).catch(() => {
	console.log(`\n🦄  It's down. Go outside!`);
});
