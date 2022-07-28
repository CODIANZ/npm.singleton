# singleton

Easy and fast Singleton class.

## usage

### original class

```ts
class X {
  public constructor() {}
  public value = "abc";
}
```

### hold a Singleton instance inside

```ts
class X {
  private constructor() {} /* make private */
  public value = "abc";

  /* add below */
  private static ston = new Singleton(() => new X());
  public static get Instance() { return X.ston.Instance; }
}

console.log(X.Instance.value); /* "abc" */
```

### create an instance of Singleton on the outside

```ts
class X {
  public constructor() {}
  public value = "abc";
}

const StonX = new Singleton(() => new X());
console.log(StonX.Instance.value); /* "abc" */
```

### use an anonymous class

```ts
const X = new Singleton(() => new class {
  public constructor() {}
  public value = "abc";
});
console.log(X.Instance.value); /* "abc" */
```

## performance

New implementation is about four times faster than the legacy implementation.
Also, legacy implementations cannot use generics and are inefficient.

### legacy implementations

```ts
class SingletonLegacy
{
  private static sInstance?: SingletonLegacy = undefined;
  public static get Instance() { 
    if(SingletonLegacy.sInstance) return SingletonLegacy.sInstance;
    SingletonLegacy.sInstance = new SingletonLegacy();
    return SingletonLegacy.sInstance; 
  }
  public value = 123;
}

const t0 = performance.now();
for(let i = 0; i < 100000000; i++){
  SingletonLegacy.Instance.value;
}
const t1 = performance.now();
console.log(`t0 ~ t1 : ${t1 - t0}ms`); /* 235ms */
```

### new implementations

```ts
const X = new Singleton(() => new class {
  public value = 123;
});

const t0 = performance.now();
for(let i = 0; i < 100000000; i++){
  X.Instance.value;
}
const t1 = performance.now();
console.log(`t0 ~ t1 : ${t1 - t0}ms`); /* 45ms */
```