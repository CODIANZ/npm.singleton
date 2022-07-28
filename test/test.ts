import { Singleton } from "../src";

class X {
  private static ston = new Singleton<X>(() => new X());
  static get Instance() { return X.ston.Instance; }
  private constructor() {
    console.log("ctor");
  }
  public x = "abc";
}

const t0 = performance.now();

for(let i = 0; i < 100000000; i++){
  X.Instance;
}

const t1 = performance.now();

console.log(`t0 ~ t1 : ${t1 - t0}ms`);