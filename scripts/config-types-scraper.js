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
        types[name] = type;
    }
}

const entries = Object.entries(types).map(([k, v]) => `${" ".repeat(12)}${k}: ${v};`);
console.log(`{\n${entries.join("\n")}${" ".repeat(8)}\n}`);
