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
function Main(data ) {
	const list = data.toString().split("\n").filter(x => x.length > 0);
	if (!fs.existsSync(join(__dirname, "input.txt"))) fs.writeFileSync(join(__dirname, "input.txt"), list.join("\n"));
	var gamma = "";
	var epsylon = "";
	for (let i = 0; i < list.length; i++) {
		let one = 0;
		const entry = list[i].split("");
		for (int = 0; int < entry.length; int++) {
			if (entry[int] == "1") one++;
		}
		gamma += (one > (entry.length / 2)) ? "1" : "0";
		epsylon += (one < (entry.length / 2)) ? "1" : "0";
	}
	console.log(gamma);
	console.log(epsylon);
	const decGamma = parseInt(gamma)
	const decEpsyl = parseInt(epsylon);
	console.log(decGamma);
	console.log(decEpsyl);
	console.log(decGamma * decEpsyl);
}