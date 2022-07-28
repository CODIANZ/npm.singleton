# singleton

## original class

```ts
class X {
  public constructor() {}
  public value = "abc";
}
```

## make singleton

```ts
class X {
  private constructor() {} /* make private */
  public value = "abc";

  /* add below */
  private static ston = new Singleton<X>(() => new X());
  public static get Instance() { return X.ston.Instance; }
}

console.log(X.Instace.value); /* "abc" */
```
