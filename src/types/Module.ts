export default class Module {

    target_name : string;
    sources : string[];
    include_dirs : string[];
    defines : string[];
    dependencies : string[];
    direct_dependent_settings : string[];
    export_dependent_settings : string[];
    conditions : string[];


    constructor(target_name : string, sources : string[], include_dirs? : string[]
        ,defines? : string[], dependencies? : string[], direct_dependent_settings? : string[]
        ,export_dependent_settings? : string[], conditions? : string[]) {
        this.target_name = target_name;
        this.sources = sources;
        this.include_dirs = [ "<!@(node -p \"require('node-addon-api').include\")" ].concat(include_dirs);
        this.defines = [ "NAPI_DISABLE_CPP_EXCEPTIONS" ].concat(defines);
        this.dependencies = dependencies;
        this.direct_dependent_settings = direct_dependent_settings;
        this.export_dependent_settings = export_dependent_settings;
        this.conditions = conditions;
    }

    public generateSource() : any {

        let include_dirs = this.include_dirs;
        let defines = this.defines;
        let dependencies = this.dependencies;
        let direct_dependent_settings = this.direct_dependent_settings;
        let export_dependent_settings = this.export_dependent_settings;
        let conditions = this.conditions;

        return {
            "target_name": this.target_name,
            "sources": this.sources,
            include_dirs,
            defines,
            dependencies,
            direct_dependent_settings,
            export_dependent_settings,
            conditions
        }

    }

    public toString() : string {
        return JSON.stringify(this.generateSource());
    }


}
