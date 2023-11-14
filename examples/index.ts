import { funcsGoodbye, funcsHello } from 'ts-library';
import { StaticMap, StaticNum, StaticString } from 'ts-library';
import { js_function, JS_NUM, JS_STRING } from 'ts-library';
import { Module } from 'ts-library';

interface Functions {
    myFunction(): any;
    fib(n: number): number;
}

async function main() {
    console.log("TS main")
    console.log("-------- Functions -------- ")
    funcsGoodbye();
    funcsHello();

    console.log("\n-------- Statics -------- ")
    console.log("")
    console.log(StaticMap)
    console.log(StaticNum)
    console.log(StaticString)

    console.log("\n-------- JS -------- ")
    js_function();
    console.log("JS_NUM:", JS_NUM)
    console.log("JS_STRING:", JS_STRING)

    console.log("\n-------- C Funcs -------- ")

    var mod = Module;
    console.log(mod);
    console.log("mod_initalized");

    var functions: Functions = await new Promise((resolve, reject) => {
        mod.onRuntimeInitialized = () => {
            try {
                const myFunction = mod.cwrap("myFunction", "number", ["number"]);
                const fib = mod.cwrap("fib", "number", ["number"]);
                resolve({ myFunction, fib });
            } catch (error) {
                console.log("Error Occured");
                reject(error);
            }
        };
    });

    console.log(functions);
    console.log(functions.myFunction());
    console.log(functions.fib(10));
    console.log(functions.fib(20));
}

main().then(() => console.log("Done")).catch(e => { throw e })
