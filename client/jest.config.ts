import type { Config } from "@jest/types";
import fs from "fs";

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/swc.config.json`, "utf8"));

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { ...swcConfig }],
  },
};

export default config;
