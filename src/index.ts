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

async function example(): Promise<Functions> {
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

// EXPERIMENT;
export class TypeA {
    name: String;
    age: number;

    // Internal, private ? 
    // Call this function by invoking TypeA(name, age)
    constructor(name: String, age: number) {
        console.log("Inside TypeA::cnstructor() ")
        this.name = name;
        this.age = age;
    }

    // New calls the constructor
    static async new(name: String, age: number): Promise<TypeA> {
        console.log("Inside TypeA::New() ")
        return new TypeA(name, age);
    }
}


// export class KeyExpr implements IntoSelector {
//     __ptr: number

//     static registry: FinalizationRegistry<number> = new FinalizationRegistry((ptr: number) => (new KeyExpr(ptr)).delete());

//     [intoKeyExpr](): Promise<KeyExpr> { return Promise.resolve(this) }
//     // [intoSelector](): Promise<Selector> { return Promise.resolve(new Selector(this)) }

//     constructor(ptr: number) {
//         this.__ptr = ptr
//         KeyExpr.registry.register(this, this.__ptr, this);
//     }

//     private async func1() {
//         throws ""
//     }

//     static async new(keyexpr: string): Promise<KeyExpr> {
//         throw "Unimplemented"
//     }

// }
// export const intoMyType = Symbol("intoKeyExpr")

// export interface IntoKeyExpr {
//     [intoKeyExpr]: () => Promise<KeyExpr>
// }
