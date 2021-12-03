const https = require("https");
const fs = require("fs");
const token = fs.readFileSync("../../lib/session.txt").toString().split("\n")[0];

console.log(token);

var input = "";
function saveData(data) {
	input += data;
	console.log(data);
}

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
	res.on('data', saveData);
});
req.on('error', (e) => { console.error(e); });
req.end();
console.log(input);
