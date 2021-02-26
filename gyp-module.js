// NAPI header (<napi.h>)
const include_dirs = [ "<!@(node -p \"require('node-addon-api').include\")" ];

// NAPI def
const defines = [ "NAPI_DISABLE_CPP_EXCEPTIONS" ];

/**
 * Generate the JSON for the module
 *
 * @param target_name
 * @param sources
 * @param include_dirs
 * @param defines
 * @param dependencies
 * @param direct_dependent_settings
 * @param export_dependent_settings
 * @param conditions
 * @returns {{direct_dependent_settings, export_dependent_settings, target_name, sources, NODE_DEFINE: [string], NODE_INCLUDE: [string], conditions, dependencies}}
 */
function generateSource(target_name, sources, incl, def, dependencies, direct_dependent_settings, export_dependent_settings, conditions) {

    include_dirs.concat(incl);
    defines.concat(def)

    return {
        "target_name": target_name,
        "sources": sources,
        include_dirs,
        defines,
        dependencies,
        direct_dependent_settings,
        export_dependent_settings,
        conditions
    }

}

module.exports = {
    generateSource
}

