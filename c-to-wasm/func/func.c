#include <stdio.h>
#include <emscripten/emscripten.h>

int click_count = 0; // declaration and initialization of global variables here

int main()
{
    printf("Hello World from a C-> Wasm Land \n");
    // Need a new line to flush stdio
    printf("Func Time \n");
    return 0;
}

#ifdef _cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE int myFunction(int argc, char **argv)
{
    click_count = click_count + 1;
    printf("MyFunction Called %d \n", click_count);
    return click_count;
}

