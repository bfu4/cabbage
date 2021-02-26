import Module from "./Module";

const HEAD = '{ \"targets\": [';

export function objectify(modules : Module[]) : string {
    let str = HEAD;

    modules.forEach(mod => {
        str += mod.toString();
    })

    return JSON.stringify(JSON.parse(str += ']}'), null, 2);
}
