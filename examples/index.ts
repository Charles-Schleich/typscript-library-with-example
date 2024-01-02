// import { funcsGoodbye, funcsHello } from 'ts-library';
// import { StaticMap, StaticNum, StaticString } from 'ts-library';
// import { js_function, JS_NUM, JS_STRING } from 'ts-library';
import { Module , example } from 'ts-library';
import { TypeA } from 'ts-library';

interface Functions {
    myFunction(): any;
    fib(n: number): number;
}

async function main() {
    console.log("TS main")
    console.log("\n-------- C Funcs -------- ")

    let functions = await example();

    console.log(functions);
    console.log("myFunction() " , functions.myFunction());
    console.log("fib(10) " , functions.fib(10));
    console.log("fib(20) " , functions.fib(20));

}

main().then(() => console.log("Done")).catch(e => { throw e })
