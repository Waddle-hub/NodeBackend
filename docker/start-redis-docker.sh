#!/usr/bin/env bash

CONTAINER_NAME=redis
REDIS_PORT=6379
LOCAL_PORT=6379

docker run \
  --detach \
  --rm \
  --name $CONTAINER_NAME \
  --publish $LOCAL_PORT:$REDIS_PORT \
  redis:6

# docker exec -it redis redis-cli
