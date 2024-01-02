export interface MyClass {
  x: number;
  readonly x_readonly: number;
  incrementX(): void;
  delete(): void;
}

export interface MainModule {
  MyClass: { new(_0: number, _1: ArrayBuffer | Uint8Array | Uint8ClampedArray | Int8Array | string): MyClass; getStringFromInstance(_0: MyClass): ArrayBuffer | Uint8Array | Uint8ClampedArray | Int8Array | string };
}
