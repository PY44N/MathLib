const fs = require("fs");

let funcs = [];

const funcsFiles = fs
	.readdirSync("./funcs")
	.filter((file) => file.endsWith(".js"));

for (const file of funcsFiles) {
	funcs[file.slice(0, -3)] = require(`./funcs/${file}`);
}

module.exports = funcs;
