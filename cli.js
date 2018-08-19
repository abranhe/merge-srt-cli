#!/usr/bin/env node
'use strict';
const meow = require('meow');
const mergeSort = require('merge-srt');
const feedback = require('@abranhe/feedback');
const sta = require('str-to-arr');

const cli = meow(`
	Usage:
	 $ merge-srt <array>

	Options
		-f, --feedback  Send a feedback
		-h, --help      Show help message and close
		-v, --version   View package Version

	Example
	 $ merge-s "d h z a r b i"
	 	[ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ]
	 $ merge-s "3 2 5 25 74"
	 	[ '2', '25', '3', '5', '74' ]
`,{
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		},
		feedback: {
			type: 'boolean',
			alias: 'f'
		}
	}
});

if(cli.flags.feedback) {
	feedback.project('merge-srt');
	feedback.description('Please specify if the issue is with the API project or the CLI. \n' +
	                      'You can also open an issue at: ');
	feedback.link(cli.pkg.bugs.url);
	feedback.message(feedback.defaultMessage);
	feedback.web();
}

console.log(cli.input.length > 0 ? mergeSort(sta(cli.input[0])) : cli.showHelp())
