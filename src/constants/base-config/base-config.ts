// FIXME 这个地方，在不同的环境，也把另一个数据取过来了，后面优化
import devConfig from "./devConfig.json";
import prodConfig from "./prodConfig.json";
import { IBaseConfig } from "@Types";

class BaseConfig {
  _configInfo: IBaseConfig;
  private static instance: BaseConfig;
  // TODO 这应该是引用全局的interface限制类型，后面修改
  constructor(env: string | undefined) {
    this._configInfo = env === "development" ? devConfig : prodConfig;
  }

  static getInstance(env: string | undefined) {
    if (!this.instance) {
      this.instance = new BaseConfig(env);
    }
    return this.instance;
  }

  configVal(): IBaseConfig {
    return this._configInfo;
  }
}

export default BaseConfig;
