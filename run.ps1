param(
  [int]$Port = 8000
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $projectRoot

Write-Host "Dominic Domingo portfolio running at http://localhost:$Port"
Write-Host 'Press Ctrl+C to stop the server.'

if (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server $Port --bind 127.0.0.1
} elseif (Get-Command node -ErrorAction SilentlyContinue) {
  node .\server.js $Port
} else {
  throw 'Python or Node.js is required to run the local preview.'
}
