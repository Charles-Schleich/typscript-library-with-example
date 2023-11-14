// Export Funcs
export { funcsGoodbye, funcsHello } from './functions/funcs'
// Export statics
export { StaticString, StaticMap, StaticNum } from './variables/variables'
export { intoKeyExpr } from './variables/variables'
// Export pure JS 
export { js_function, JS_NUM, JS_STRING } from './js/pure-js'

// C-function-WASM
export { _fib as fib } from './c-to-wasm/func/func';
import Module = require("./c-to-wasm/func/func")
export { Module };
