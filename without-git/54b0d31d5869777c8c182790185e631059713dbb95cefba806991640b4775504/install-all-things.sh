#!/bin/bash

set -e

pip install -U pip
pip install -r requirements.txt

pushd server
yarn
popd

pushd stats
yarn
popd

pushd client
yarn
popd
