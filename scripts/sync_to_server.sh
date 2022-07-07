#!/bin/bash

DESTINATION=${$1:-"elevljca@premium252.web-hosting.com:21098"}
cwd=$(dirname -- "$0")


# sync files to remote
rsync -aP ${cwd}/../ ${DESTINATION}:/home/elevljca/public_html/frontend