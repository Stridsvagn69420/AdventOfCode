# Get Input for this day
$inputAoC;
if (Test-Path "$PSScriptRoot\input.txt" -PathType Leaf) {
    Write-Host "Using local input.txt...";
    $inputAoC = Get-Content "$PSScriptRoot\input.txt";
} else {
    Write-Host "Downloading input...";
    Import-Module -Name "$PSScriptRoot\..\..\lib\lib.psm1";
    $sessionID = Get-Content "$PSScriptRoot\..\..\lib\session.txt"
    $inputAoC = (Get-Input -Day 2 -Year 2021 -Cookie $sessionID) -split "`n";
    Out-File -InputObject ($inputAoC.Where({ $_ -ne ""}) -join "`n") -Encoding "utf8" -FilePath "$PSScriptRoot\input.txt" -NoNewline;
}

# Part 1
function Get-Part1 {
    [int]$depth = 0;
    [int]$distance = 0;
    foreach ($command in $inputAoC) {
        $cmd = $command -split " ";
        [string]$operation = $cmd[0];
        [int]$count = $cmd[1];
        switch ($operation) {
            "forward" {
                $distance = $distance + $count;
            };
            "up" {
                $depth = $depth - $count;
            };
            "down" {
                $depth = $depth + $count;
            };
        }
    }
    return ($depth * $distance);s
}

# Part 2
function Get-Part1 {
    
}

# Main
Write-Host "Part 1: $(Get-Part1)";