"use strict";

import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import remove from "rollup-plugin-delete";

import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import { dependencies } from "./package.json";

export default {
    input: resolve("src", "server.ts"),
    plugins: [
        remove({ targets: resolve("dist") }),
        commonjs(),
        nodeResolve(),
        json(),
        typescript(),
        terser()
    ],
    external: Object.keys(dependencies),
    output: {
        dir: resolve("dist"),
        format: "cjs"
    }
};
