// // Export Funcs
// export { funcsGoodbye, funcsHello } from './functions/funcs'
// // Export statics
// export { StaticString, StaticMap, StaticNum } from './variables/variables'
// export { intoKeyExpr } from './variables/variables'
// // Export pure JS 
// export { js_function, JS_NUM, JS_STRING } from './js/pure-js'

// C-function-WASM
// const Module = {
//     'locateFile': (path: string, scriptDirectory: string) => {
//         debugger;
//     }
// };
// debugger;

// require("./c-to-wasm/func/func.js");
import Module from "./c-to-wasm/func/func";

// console.log("======func.Module=======");
// console.log(Module);
// console.log(typeof(Module));
// console.log("===================");

interface Functions {
    myFunction(): any;
    fib(n: number): number;
}

var mod = Module;

async function example() : Promise<Functions> {
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
    return functions 
  }

export { example };
export { Module };
