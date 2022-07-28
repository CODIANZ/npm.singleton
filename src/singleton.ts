export class Singleton<T>
{
  private m_fnGetInstance: () => T;
  public get Instance() { return this.m_fnGetInstance(); }
  public constructor(creator: () => T) {
    this.m_fnGetInstance = () => {
      const instance = creator();
      this.m_fnGetInstance = () => instance;
      return instance;
    };
  }
}
