# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.provision :shell, :path => "dev/provision.sh"
  config.vm.network :forwarded_port, guest: 3100, host: 3100
  config.vm.network :forwarded_port, guest: 22, host: 1234
end
