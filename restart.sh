#!/bin/bash

pid=$(ps -ef | grep "node build/src/index.js" | grep -v grep | grep -v sh | awk '{print $2}')

if [ -z "$pid" ]; then
    echo "Could not find running process"
else
    kill $pid
    echo "Killed $pid"
fi

echo "starting npm"
nohup npm run start&
