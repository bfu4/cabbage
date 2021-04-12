# cabbage
*A pretty ✨ node-gyp wrapper.*

This is a really simple program that makes it easy to have organized NAPI modules.

It works by looking in your project's src/cpp directory, and building based off of the configured "target_name" and sources.
By default, it includes the NAPI includes and defines into your build, so you don't have to write them in `cabbage.config.cjs`.

## Install
With NPM
```bash
no fuck you
```
or with Yarn
```bash
# choose your poison, i guess (again)
yarn add cabbage-c 
yarn add -g cabbage-c
```

## Usage
```javascript
cabbage generate // generate a binding.gyp (before you run cabbage build)
cabbage build // build the binary
```

## cabbage.config.cjs

```js
buildModules = [
    {
        target_name: "test",
        sources: ["src.cc"],
        include_dirs: [],
        defines: [],
        dependencies: [],
        direct_dependent_settings: [],
        export_dependent_settings: [],
        conditions: []
    }
]

module.exports = {
    buildModules
}
```
