#!/bin/bash

RUNNING_MODE=$1
cd $(dirname $0)

if [[ $RUNNING_MODE = dev ]]; then
    SCRIPT_ID="hogehoge"
elif [[ $RUNNING_MODE = stg ]; then
    SCRIPT_ID="fugafuga"
elif [[ $RUNNING_MODE = prod ]]; then
    SCRIPT_ID="piyopiyo"
else
    echo 'usage: ./push.sh <dev|stg|prod>'
    exit 1
fi

echo '{"scriptId":"'$SCRIPT_ID'"}' > .clasp.json
echo 'var RUNNING_MODE = '\'RUNNING_MODE\'\'; > RUNNING_MODE.js
clasp push
