# Stop on errors
$ErrorActionPreference = 'Stop'

# Define a function to display the usage message
function Usage {
    Write-Host "Usage: $MyInvocation.MyCommand (start|stop|restart)"
}

function Start-Server {
    $process = Get-Process -Name "flask" -ErrorAction SilentlyContinue
    if ($process -and $process.CommandLine -like "*flask --app form_api run --host 0.0.0.0 --port 9000*") {
        Write-Host "API server on port 9000 is already running."
        exit 1
    }

    Start-Process flask -ArgumentList "--app form_api run --host 0.0.0.0 --port 9000 --debug" -NoNewWindow
}

function Stop-Server {
    Get-Process -Name "flask" | Where-Object { $_.CommandLine -like "*flask --app form_api run --host 0.0.0.0 --port 9000*" } | Stop-Process -Force -ErrorAction SilentlyContinue
}

function Restart-Server {
    Write-Host "stopping index server ..."
    Stop-Server
    Write-Host "starting index server ..."
    Start-Server
}

# Check if the script is called without arguments
if ($args.Count -ne 1) {
    Usage
    exit 1
}

# Process the argument
switch ($args[0]) {
    "start" {
        Write-Host "starting index server ..."
        Start-Server
    }
    "stop" {
        Write-Host "stopping index server ..."
        Stop-Server
    }
    "restart" {
        Restart-Server
    }
    default {
        # If an invalid argument is provided, display the usage message
        Usage
    }
}