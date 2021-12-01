// Made this to make sure my PowerShell code is working
// EXECUTE THIS IN CHROME DEV TOOLS ON https://adventofcode.com
const input = await (await fetch("https://adventofcode.com/2021/day/1/input")).text();
const inputAoC = input.split("\n");
var up = 0;
var down = 0;
for (let i = 0; i < inputAoC.length; i++) {
    let first = inputAoC[i];
    let second = inputAoC[i + 1];
    console.log("Index: " + i);
    console.log("First: " + first);
    console.log("Second: " + second);
    if (first < second) {
        up++;
        console.debug("UP!!!", up);
    }
    if (first > second) {
        down++;
        console.debug("DOWN!!!", down);
    }
    console.log("\n");
}
console.log([up, down, up + down]);