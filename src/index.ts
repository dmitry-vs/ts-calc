import { createInterface } from 'readline';
import { processUserInput } from './runner/runner';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<void> =>
  new Promise((resolve) => {
    rl.question('> ', (answer: string) => {
      console.log(processUserInput(answer));
      resolve();
    });
  });

async function app() {
  // eslint-disable-next-line no-constant-condition
  while (true) await question();
}

app();
