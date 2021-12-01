# Get Input for this day
Import-Module -Name "$PSScriptRoot\..\..\lib\lib.psm1"
$sessionID = Get-Content "$PSScriptRoot\..\..\lib\session.txt"
$inputAoC = (Get-Input -Day 1 -Year 2021 -Cookie $sessionID) -split "`n";
Out-File -InputObject $inputAoC -Encoding "utf8" -FilePath "input.txt"

# Main
$up = 0;
$down = 0;
for ($i = 0; $i -lt $inputAoC.Count; $i++) {
    $first = $inputAoC[$i];
    $second = $inputAoC[$i + 1];
    Write-Host "Index: $i"
    Write-Host "First: $first";
    Write-Host "Second: $second";
    if ($first -lt $second) {
        $up++;
        Write-Host "UP!!!"
    }
    if ($first -gt $second) {
        $down++;
        Write-Host "DOWN!!!"
    }
    Write-Host "`n";
}
Write-Host "Increased: $up";
Write-Host "Decreased: $down";
Write-Host "Total differnces: $($up + $down)";