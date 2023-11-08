import { defaultMaxListeners } from "events"

export function module2Hello() {
    console.log("   Module2: Hello Library")
}

export function module2Goodbye() {
    console.log("   Module2: Goodbye Library")
}

export var Module = (() => {
    function innermodule_fn1() {
        console.log("   Module2:innermodule_fn1 Goodbye Library")
    }
})();

export var StaticString = "Mode2:StaticString foobar";

export const intoKeyExpr = Symbol("intoKeyExpr")
