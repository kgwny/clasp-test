#!/bin/sh

# clasp push & deploy with comment

message="[`date "+%y-%m-%d %H:%M:%S"`] '`git log --no-merges -1 --oneline | cut -b 9-`'"
# message="[`date "+%y-%m-%d %H:%M:%S"`] '`git log --no-merges -1 --oneline | cut -b 9-`' by `whoami`"

clasp push
clasp deploy -d "${message}"
