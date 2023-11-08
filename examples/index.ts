import { sayGoodbye, sayHello } from 'ts-library';
import { module1Goodbye, module1Hello } from 'ts-library';
import { module2Goodbye, module2Hello } from 'ts-library';

async function main() {
    console.log("Hello World")
    sayHello();
    sayGoodbye();

    console.log("")
    module1Goodbye(); 
    module1Hello();

    console.log("")
    module2Goodbye(); 
    module2Hello();
}

main().then(() => console.log("Done")).catch(e => { throw e })
