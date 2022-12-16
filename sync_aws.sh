#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: No argument provided."
  exit 1
fi

if [ ! -d "$1" ]; then
  echo "Error: First argument is not a directory."
  exit 1
fi

if [ ! -f "$1/package.json" ]; then
  echo "Error: Directory does not contain a package.json file."
  exit 1
fi

name=$(jq -r '.name' "$1/package.json")

if [ "$name" != "streetmerchant" ]; then
  echo "Error: package.json file does not have a name value of streetmerchant."
  exit 1
fi

rsync --rsync-path="sudo rsync" -rzva --exclude "/.git/" --exclude "/package-lock.json" --exclude "/screenshots/" --exclude "/build/" --exclude "/coverage/" --exclude "/docs/" --exclude "/node_modules/" "${1}/" aws-personal:~/streetmerchant/
