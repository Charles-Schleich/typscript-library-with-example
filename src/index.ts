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

export { Module };
