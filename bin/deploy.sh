#!/bin/bash
docker build -t paiyou.co -f ./Dockerfile .
docker tag paiyou.co registry.cn-hangzhou.aliyuncs.com/rallets/paiyou.co
docker push registry.cn-hangzhou.aliyuncs.com/rallets/paiyou.co
cd ~/Projects/paiyou-hub/charts/assets
./helm.sh -c qcloud -a upgrade -n paiyou
cd -
