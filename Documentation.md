# Documentation
## Frontend
The Frontend was made with the Vue3 Framework and Element Plus UI library.\
It's only purpose is to send the user input to the backend.\
To simplyfy the REST communication the axios library was used.\
The UI is designed to immediately show the user what backend vulnerabilities are to be expected.\
![](doc/assets/frontend.png)\
To the user it's presented as a site to return a greeting of their choice.\
There are multiple hints on the page, for example that the backend will evaluate the text (JavaScript eval() vulnerability)\ or the popover that states that the string needs to be encased with quotation marks. This leads the user to knowing that its some kind of remote code execution vulnerability.\
![](doc/assets/frontend2.png)\
When the user imputs the string with quotation marks, the backend will return the greeting.\
![](doc/assets/frontend3.png)\
Otherwise the user will find an error in the console stating that the imput (in this case World) is not defined.\
This shows that the backend is vulnerable to a remote code execution vulnerability.\