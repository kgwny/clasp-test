#!/bin/sh

# clasp push & deploy with comment

message="[`date "+%y-%m-%d %H:%M:%S"`] '`git log --no-merges -1 --oneline | cut -b 9-`'"

clasp push
clasp deploy -d "${message}"
