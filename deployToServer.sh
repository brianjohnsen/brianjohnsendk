#!/bin/sh

echo "* Copy files to server"
rsync -av --exclude=".*" --exclude="*.iml" --exclude="*.sh" --delete . brianjohnsen@brianjohnsen.dk:brianjohnsen.dk/

