const https = require("https");
const fs = require("fs");
const { join } = require("path");

const token = fs.readFileSync(join(__dirname, "../../lib/session.txt")).toString().split("\n")[0];

if (fs.existsSync(join(__dirname, "input.txt"))) {
	Main(fs.readFileSync(join(__dirname, "input.txt")));
} else {
	const options = {
		hostname: 'adventofcode.com',
		port: 443,
		path: '/2021/day/3/input',
		method: 'GET',
		headers: {
			cookie: "session=" + token
		}
	};
	const req = https.request(options, (res) => {
		res.on('data', Main);
	});
	req.on('error', (e) => { console.error(e); });
	req.end();
}

// Main()
function Main(data) {
	const list = data.toString().split("\n").filter(x => x.length > 0);
	if (!fs.existsSync(join(__dirname, "input.txt"))) fs.writeFileSync(join(__dirname, "input.txt"), list.join("\n"));
	var gamma = "";
	var epsylon = "";
	var extracted = [];
	for (let i = 0; i < list[0].length; i++) extracted.push("");
	for (let i = 0; i < list.length; i++) {
		const entry = list[i].split("");
		for (let int = 0; int < entry.length; int++) {
			extracted[int] += entry[int];
		}
	}
	for (let count = 0; count < extracted.length; count++) {
		console.log(`${count}: ${extracted[count]}`);
	}
	/*console.log(gamma, epsylon);
	const decGamma = parseInt(gamma, 2)
	const decEpsyl = parseInt(epsylon, 2);
	console.log(decGamma, decEpsyl);
	console.log(`Part 1: ${decGamma * decEpsyl}`);*/
}