#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ ! -d "$DIR/ui_tests/vectortile" ]; then
    git clone --depth=10 git@github.com:SkyTruth/vectortile.git ui_tests/vectortile
fi

docker build -t pelagos .
docker run -p 8000:8000 -v $DIR:/opt/pelagos-client -it pelagos
