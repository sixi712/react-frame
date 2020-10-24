import BaseConfig from "./base-config/base-config";

export const baseConfig = BaseConfig.getInstance(process.env.NODE_ENV).configVal();
