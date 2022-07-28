export class Singleton<CREATOR extends () => any>
{
  private m_fnGetInstance: () => ReturnType<CREATOR>;
  public get Instance() { return this.m_fnGetInstance(); }
  public constructor(creator: CREATOR) {
    this.m_fnGetInstance = () => {
      const instance = creator();
      this.m_fnGetInstance = () => instance;
      return instance;
    };
  }
}
