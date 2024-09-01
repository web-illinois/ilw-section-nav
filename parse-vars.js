import {readFileSync} from "fs";

const contents = readFileSync("src/ilw-section-nav.css", "utf-8");
const regex = /^\s*(--[\w-]+):\s*([^;]+);\s*\/\*\s*(var|vardep):\s*(.+)\*\s*\/$/gm;

let output = [];
let m;
while (m = regex.exec(contents)) {
    output.push({
        name: m[1],
        depreciated: m[3] === "vardep",
        description: m[4] + ` [default: ${m[2]}]`
    })
}

console.log(JSON.stringify(output, null, 4));
