import * as fs from 'fs';

import gyp from 'node-gyp';
import Module from "./types/Module";
import { objectify } from "./types/Binding";

export {
    Module
}

const CONFIG = require('cabbage.config.js');
const MODULES_HOME = "./src/cpp";
const args = process.argv;

function getModules() : Module[] {
    let arr : Module[] = [];
    CONFIG.buildModules.forEach(mod => {
        arr.push(
            new Module(
                mod.target_name,
                mod.sources,
                mod.include_dirs,
                mod.defines,
                mod.dependencies,
                mod.direct_dependent_settings,
                mod.export_dependent_settings,
                mod.conditions
            )
        )
    });
    return arr;
}

function generate() {
    fs.writeFileSync('binding.gyp', objectify(getModules()));
}

if (args.length < 1) {
    console.error('not enough arguments! try \"cabbage <\generate | build>\"');
} else {
    switch (args[0]) {
        case 'generate':
        case 'build':
        default:
            console.error("invalid arguments! try \"cabbage <\generate | build>\"")
    }
}







