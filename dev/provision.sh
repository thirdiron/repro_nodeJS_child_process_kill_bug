#!/bin/bash
apt-get update
apt-get install python-software-properties -y # contains apt-add-repository command
apt-add-repository ppa:chris-lea/node.js-legacy -y # ppa for old node version
apt-add-repository ppa:richarvey/nodejs -y # ppa for old npm version
apt-get update

apt-get -y install build-essential 
apt-get -y install curl 
apt-get -y install make # need make for building npm modules
apt-get -y install g++ # ditto for g++
apt-get -y install tofrodos 

apt-get install -y git
apt-get install -y vim
apt-get install -y 'nodejs=0.10.*' 'nodejs-dev=0.10.*'
apt-get install -y --force-yes 'npm=1.3.*'

npm -g install mocha            # nodejs test runner

