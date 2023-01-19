#!/bin/bash

if [ -z $1 ]; then
    echo "Must provide a shell script for restarting"
    exit 1
fi

if [ -z $2 ]; then
    echo "Muse provide a log path to check"
    exit 1
fi

restart_script=$1
if ! test -e "$restart_script"; then
    echo "Error: $restart_script does not exist"
    exit 1
fi

log_path=$2
if ! test -e "$log_path"; then
    echo "Error:  $log_path does not exist"
    exit 1
fi

pid=$(ps -ef | grep "node build/src/index.js" | grep -v grep | grep -v sh | awk '{print $2}')
need_restart=0

if [ -z "$pid" ]; then
    echo "Could not find running process, must restart"
    need_restart=1
else
    echo "Successfully found running task with pid ${pid}"
    
    lastlogtime=$(tail -1 $log_path | grep -o -E '(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9] [A|P]M')
    echo "Last log time is: $lastlogtime"

    curtime=$(date +"%I:%M:%S %p")
    echo "Current time is:  $curtime"

    log_time_epoch=$(date -d "$lastlogtime" +%s)
    echo "Last log time as epoch: ${log_time_epoch}"

    current_time_epoch=$(date -d "$curtime" +%s)
    echo "Current time as epoch:  ${current_time_epoch}"

    timediff=$(( (current_time_epoch - log_time_epoch) / 60 ))
    echo "Time diff in minutes: $timediff"

    if [ $timediff -lt 0 ]; then
        echo "Time diff is negative, assuming day rolled over and adding 1 day"
        timediff=$(( timediff + (60*24) ))
        echo "Updated time diff in minutes: $timediff"
    fi

    if [ $timediff -ge 20 ]; then
        echo "Time difference is more than 20 minutes, restarting!"
        need_restart=1
    fi
fi

if [ $need_restart -eq 1 ]; then
    $restart_script
fi
