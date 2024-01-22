// Go to <https://www.mediawiki.org/wiki/Manual:Interface/JavaScript#mw.config>
// paste this into the browser console, and copy the log output

function processType(type) {
    type = type.toLowerCase();
    type = type.replace(/or (unset|not defined)/, "");
    type = type.replace("integer", "number");
    type = type.replace(/ or /g, " | ");
    if (type.startsWith("array of")) {
        const element = type.replace(/array of (.*)s(\s|$)/, "$1");
        type = `${element}[]`;
    }
    if (type === "array") type = "string[]";
    if (type === "object") type = "Record<string, string>";

    return type.trim();
}

const types = {};
const tables = document.querySelectorAll(".wikitable");
for (const table of tables) {
    const rows = table.querySelectorAll("tr:not([colspan])");
    for (const row of rows) {
        const cells = row.querySelectorAll("td");
        if (!cells.length) continue;
        const name = cells[0].innerText.trim();
        const type = processType(cells[1].innerText);
        const description = cells[2].innerText;
        types[name] = [type, description];
    }
}

function formatEntry(name, type, description) {
    return [
        "/**",
        ...description.split("\n").map((e) => ` * ${e.trim()}`),
        " *",
        ` * @see https://www.mediawiki.org/wiki/Manual:Interface/JavaScript#${k}`,
        " */",
        `${name}: ${type};`,
    ];
}

function formatCode(lines, level = 0) {
    return `{\n${lines.map((e) => `${" ".repeat(4 * (level + 1))}${e}`).join("\n")}${" ".repeat(
        4 * level
    )}\n}`;
}

const lines = Object.entries(types).flatMap(([n, [t, d]]) => formatEntry(n, t, d));
console.log(formatCode(lines, 2));
