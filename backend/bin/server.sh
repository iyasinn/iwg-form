#!/bin/bash
#

# Stop on errors, print commands
# See https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -Eeuo pipefail

# Define a function to display the usage message
usage() {
    echo "Usage: $0 (start|stop|restart)"
}

start() {
    if pgrep -f "flask --app form_api run --host 0.0.0.0 --port 9000" > /dev/null; then
        echo "API server on port 9000 is already running."
        exit 1
    fi

    flask --app form_api run --host 0.0.0.0 --port 9000
}

stop(){
    pkill -f "flask --app form_api run --host 0.0.0.0 --port 9000" || true
}

restart(){
    echo "stopping index server ..."
    stop
    echo "starting index server ..."
    start
}


# check if the script is called without arguments
if [ $# -ne 1 ]; then
    usage
    exit 1
fi

# Process the argument
case "$1" in
"start")
    echo "starting index server ..."
    start
    ;;
"stop")
    echo "stopping index server ..."
    stop
    ;;
"restart")
    restart
    ;;
*)
    # If an invalid argument is provided, display the usage message
    usage
    ;;
esac