import { funcsGoodbye, funcsHello } from 'ts-library';
import { StaticMap,StaticNum,StaticString } from 'ts-library';
import { js_function, JS_NUM, JS_STRING } from 'ts-library';

// import { Module } from 'ts-library';

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
    console.log("JS_NUM:",JS_NUM)
    console.log("JS_STRING:",JS_STRING)
    
    // console.log(Module.innermodule_fn1());

}

main().then(() => console.log("Done")).catch(e => { throw e })
