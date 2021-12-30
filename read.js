#!/usr/bin/env node

const exec = require('child_process').exec;
const Ask = require('@greggry/ask');

const ask = new Ask();

const main = async () => {
  let input = await ask.ask("(pass in 'q' to exit) Text to read: ");

  while (input?.toLowerCase() !== 'q') {
    if (input !== undefined) {
      console.log(
        `processing ${input.length <= 50 ? "'" + input + "'" : 'the input'}...`
      );
      exec(`echo ${input} | festival --tts`);
    }

    input = await ask.ask('Text to read: ');
  }

  ask.closeInterface();
};

main();
