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
	var extracted = [];
	for (let i = 0; i < list[0].length; i++) extracted.push("");
	for (let i = 0; i < list.length; i++) {
		const entry = list[i].split("");
		for (let int = 0; int < entry.length; int++) {
			extracted[int] += entry[int];
		}
	}
	var gamma = "";
	var epsylon = "";
	for (let i = 0; i < extracted.length; i++) {
		const chars = extracted[i].split("");
		let one = 0;
		let zero = 0;
		chars.forEach(char => {
			if (char == "1") {
				one++;
			}
			if (char == "0") {
				zero++;
			}
		});
		//Part 1
		const Bit1MoreCommonThanBit0 = one > zero;
		gamma += Bit1MoreCommonThanBit0 ? "1" : "0";
		epsylon += Bit1MoreCommonThanBit0 ? "0" : "1";
	}
	const decGamma = parseInt(gamma, 2)
	const decEpsyl = parseInt(epsylon, 2);
	console.log(`Part 1: ${decGamma * decEpsyl}`);

}