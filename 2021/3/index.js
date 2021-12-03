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
	// START BUG: Code counts ones and zeroes wrong
	var gamma = "";
	var epsylon = "";
	for (let i = 0; i < list.length; i++) {
		let one = 0;
		let zero = 0;
		const entry = list[i].split("");
		for (int = 0; int < entry.length; int++) {
			console.log("Entry:", i, "Position:", int, "Charcter:", entry[int]);
			console.log("Before:", one, zero);
			if (entry[int] == "1") one++;
			if (entry[int] == "0") zero++;
			console.log("After:", one, zero);
		}
		gamma += (one > zero) ? "1" : "0";
		epsylon += (one < zero) ? "1" : "0";
	}
	// END BUG: 
	console.log(gamma, epsylon);
	const decGamma = parseInt(gamma, 2)
	const decEpsyl = parseInt(epsylon, 2);
	console.log(decGamma, decEpsyl);
	console.log(`Part 1: ${decGamma * decEpsyl}`);
}