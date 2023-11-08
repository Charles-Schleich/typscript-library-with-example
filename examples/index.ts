import { sayGoodbye, sayHello } from 'ts-library';

async function main() {
    console.log("Hello World")
    sayHello();
    sayGoodbye();
}

main().then(() => console.log("Done")).catch(e => { throw e })
