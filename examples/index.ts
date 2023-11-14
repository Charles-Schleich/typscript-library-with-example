// import { funcsGoodbye, funcsHello } from 'ts-library';
// import { StaticMap, StaticNum, StaticString } from 'ts-library';
// import { js_function, JS_NUM, JS_STRING } from 'ts-library';
// const Module = {};
import { Module} from 'ts-library';
// require("ts-library");

interface Functions {
    myFunction(): any;
    fib(n: number): number;
}

async function main() {
    console.log("TS main")
    console.log("\n-------- C Funcs -------- ")

    var mod = Module;
    console.log(mod);

    // var mod2 = Foo;
    // console.log(mod2);

    // console.log(mod._fib(10));

    // var functions: Functions = await new Promise((resolve, reject) => {
    //     mod.onRuntimeInitialized = () => {
    //         try {
    //             const myFunction = mod.cwrap("myFunction", "number", ["number"]);
    //             const fib = mod.cwrap("fib", "number", ["number"]);
    //             resolve({ myFunction, fib });
    //         } catch (error) {
    //             console.log("Error Occured");
    //             reject(error);
    //         }
    //     };
    // });

    // console.log(functions);
    // console.log(functions.myFunction());
    // console.log(functions.fib(10));
    // console.log(functions.fib(20));
    // console.log(functions.myFunction());
    // console.log(functions.myFunction());
}

main().then(() => console.log("Done")).catch(e => { throw e })
