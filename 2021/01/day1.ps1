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
function Get-Part1 {
    [int]$up = 0;
    for ($i = 0; $i -lt $inputAoC.Count; $i++) {
        [int]$first = $inputAoC[$i];
        [int]$second = $inputAoC[$i + 1];
        if ($first -lt $second) {
            $up++;
        }
    }
    Write-Host "Increased: $up";
}

# Part 2
function Get-Part2 {
    [int]$up = 0;
    for ($i = 0; $i -lt $inputAoC.Count; $i++) {
        [int]$one = $inputAoC[$i];
        [int]$two = $inputAoC[$i+1];
        [int]$three = $inputAoC[$i+2];
        [int]$four = $inputAoC[$i+3];

        [int]$first = $one + $two + $three;
        [int]$second = $two + $three + $four;
        if ($first -lt $second) {
            $up++;
        }
    }
    Write-Host "Larger: $up";
}

# Main()
Get-Part1;
Get-Part2;
