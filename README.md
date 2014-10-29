repro_nodeJS_child_process_kill_bug
===================================

Simple codebase to reproduce issue where calling the kill() method on the ChildProcess object returned from child_process.exec() fails to actually kill the process

Note: this issue occurs in ubuntu 12.04 and at least not in OS X, so
I've included a vagrant specification and provisioning script for a
Ubuntu 12.04 VM.  To reproduce issue, download and install vagrant
(https://www.vagrantup.com/downloads.html) and Virtualbox (https://www.virtualbox.org/wiki/Downloads) then, from the root of this repo, 

`vagrant up`

`vagrant ssh`

You should now have a shell into a ubuntu 12.04 VM running nodeJS
v0.10.33.  Now,

`cd /vagrant`

`npm install`

`npm test`

This should execute the code and display a list of the remaining nodeJS
processes after execution of the code.  There should be a process listed
for the child process created by the repro code.
