import { sayGoodbye, sayHello } from 'ts-library';
import { funcsGoodbye, funcsHello } from 'ts-library';
import { StaticMap,StaticNum,StaticString } from 'ts-library';
// import { Module } from 'ts-library';


async function main() {
    console.log("Hello World")
    sayHello();
    sayGoodbye();

    console.log("")
    funcsGoodbye();
    funcsHello();

    console.log("")
    console.log("   ",StaticMap)
    console.log("   ",StaticNum)
    console.log("   ",StaticString)

    // console.log(Module.innermodule_fn1());

}

main().then(() => console.log("Done")).catch(e => { throw e })
