import { IBaseConfig } from "@Types";

class BaseConfig {
  _configInfo: IBaseConfig;
  private static instance: BaseConfig;
  constructor() {
    this._configInfo =
      process.env.NODE_ENV === "development"
        ? require("./devConfig.json")
        : require("./prodConfig.json");
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new BaseConfig();
    }
    return this.instance;
  }

  configVal(): IBaseConfig {
    return this._configInfo;
  }
}

export default BaseConfig.getInstance().configVal();
