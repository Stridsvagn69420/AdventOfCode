# Get Input for this day
$inputAoC;
if (Test-Path "$PSScriptRoot\input.txt" -PathType Leaf) {
    Write-Host "Using local input.txt...";
	$inputAoC = Get-Content "$PSScriptRoot\input.txt";
} else {
    Write-Host "Downloading input...";
    Import-Module -Name "$PSScriptRoot\..\..\lib\lib.psm1";
	$sessionID = Get-Content "$PSScriptRoot\..\..\lib\session.txt"
	$inputAoC = (Get-Input -Day 1 -Year 2021 -Cookie $sessionID) -split "`n";
	Out-File -InputObject ($inputAoC.Where({ $_ -ne ""}) -join "`n") -Encoding "utf8" -FilePath "$PSScriptRoot\input.txt" -NoNewline;
}

# Part 1
$up = 1;
for ($i = 0; $i -lt $inputAoC.Count; $i++) {
    $first = $inputAoC[$i];
    $second = $inputAoC[$i + 1];
    if ($first -lt $second) {
        $up++;
    }
}
Write-Host "Increased: $up";