import { Singleton } from "../src";

class X {
  private static ston = new Singleton(() => new X());
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


class Y {
  public constructor() {}
  public y = 123;
}

const StonY = new Singleton(() => new Y());
console.log(StonY.Instance.y);


const Z = new Singleton(() => new class {
  constructor() {}
  public z = true;
});
console.log(Z.Instance.z);