#!/bin/bash
apt-get update
apt-get -y install curl
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs
apt-get update

apt-get -y install build-essential 
apt-get -y install make 
apt-get -y install g++ 

apt-get install -y git
apt-get install -y vim


