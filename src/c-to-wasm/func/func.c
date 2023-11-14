#include <stdio.h>
#include <emscripten/emscripten.h>

int click_count = 0; // declaration and initialization of global variables here

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

EMSCRIPTEN_KEEPALIVE
int fib(int n)
{
    if (n <= 0)
    {
        return 0;
    }
    int i, t, a = 0, b = 1;
    for (i = 1; i < n; i++)
    {
        t = a + b;
        a = b;
        b = t;
    }
    return b;
}
