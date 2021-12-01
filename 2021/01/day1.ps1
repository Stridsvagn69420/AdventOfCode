# Get Input for this day
Import-Module -Name "$PSScriptRoot\..\..\lib\lib.psm1"
$sessionID = Get-Content "$PSScriptRoot\..\..\lib\session.txt"
$inputAoC = Get-Input -Day 1 -Year 2021 -Cookie $sessionID;
Out-File -InputObject $inputAoC -Encoding "utf8" -FilePath "input.txt"

# Main
