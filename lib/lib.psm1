function Get-Input {
    param (
        [int]$Day,
        [int]$Year,
        [string]$Cookie
    );
    $inputURL = "https://adventofcode.com/$Year/day/$Day/input";
    return (Invoke-WebRequest -Uri $inputURL -Headers @{"Cookie" = "session=$Cookie"}).Content;
}