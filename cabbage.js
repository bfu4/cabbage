#!/usr/bin/env node

const fs = require('fs');
const child = require('child_process');

const GypModule = require("./gyp-module")
const binding = require("./binding")
const path = require("path");

const config = require(path.resolve(process.cwd()) + "/cabbage.config.cjs");


const MODULES_HOME = "./src/cpp";
const args = process.argv;

require('node-gyp');

function appendPath(mod) {
    let arr = [];
    mod.sources.forEach(src => {
        arr.push(MODULES_HOME + path.sep + mod.target_name + path.sep + src)
    })
    return arr;
}

/**
 * Get modules from config
 */
function getModules() {
    let arr = [];
    config.buildModules.forEach((mod) => {

        arr.push(GypModule.generateSource(
            mod.target_name, appendPath(mod),
            mod.include_dirs, mod.defines,
            mod.dependencies, mod.direct_dependent_settings,
            mod.export_dependent_settings, mod.conditions
        ))

    });
    return arr;
}

/**
 * Generate global binding.gyp
 */
function generate() {
    fs.writeFileSync('binding.gyp', binding.objectify(getModules()));
}

function build() {
    child.exec('node-gyp configure && node-gyp rebuild', (err) => {
        if (err) {
            console.error(err)
        }
    });
}

/**
 * Actual command line program
 */
if (args.length < 1) {
    console.error('not enough arguments! try \"cabbage <\generate | build>\"');
} else {
    switch (args[2]) {
        case 'generate':
            generate();
            break;
        case 'build':
            build();
            break;
        default:
            console.log(args[2])
            console.error("invalid arguments! try \"cabbage <\generate | build>\"")
    }
}







