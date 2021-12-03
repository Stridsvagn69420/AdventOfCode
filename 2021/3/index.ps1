$result = Invoke-Expression -Command "node $PSScriptRoot/index.js";
foreach ($item in $result) {
    Write-Host $item;
}