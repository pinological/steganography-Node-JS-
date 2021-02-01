# steganography-Node-JS-
## Data Security (Project)<br>
## Introduction:<br>
Steganography is the practice of concealing a message within another message or a physical object. In computing/electronic contexts, a computer file, message, image, or video is concealed within another file, message, image, or video.
Here, after getting message webapp will encoding text by one time pad cypher, after that webapp encode cypher text in image and send key and encoded image to a mail of person to whom where user want. 
<br>
Installation:
```
	git clone github.com/pinological/steganography-Node-JS-
	npm install
	node app
	visit localhost:4000 
  	touch .env 
```
## Inside .env create two variable <br>
```
PASSWORD = <your gmail password>
EMAIL = <your email>
```
## Also in line no 64 app.js change 
```
   from: 'peterkarki99@gmail.com', to from: '<your email>'
```

<br>
User name = admin<br>
Password = admin<br>
