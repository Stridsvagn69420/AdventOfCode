param (
    [Parameter(Mandatory=$true)]
    [ValidateRange(2021, 2021)]
    [int]
    $Year,
    [Parameter(Mandatory=$true)]
    [ValidateRange(1, 25)]
    [int]
    $Day
)
$result = (Invoke-Expression -Command "$PSScriptRoot/$Year/$Day/index.ps1");
Write-Host $result;