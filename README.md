This repository contains the codebase to provide a short url path for the given url using Node.js, Express, and MongoDB.

Working:


>The input from the user is taken in the form of url link. The application is also open to taking some string as a suggestion to be the part of URL.
>The short url is generated using shortid library of Javascript.
>The suggestion string will be added to the shortid if it is present otherwise sortid will be returned as it is.
>The short url is redirected to original url and added to the database using post request.


How to install:

You can install the codebase directly into vs code or download it in the form of a zip file.


How to use:

After installing the codebase on your system run the following codes in your terminal:
*npm install  
*npm install express
*npm start


>Go to the address http://localhost:5000/ in any of your browsers and you  will see the web application here. 
>Type your URL and if you want you can add your suggestions too. 
>Click on generate short url button. This will give you your unique short url along with the other generated urls in a table format.



**Note: Make sure to use the node version 16.20.0 or less otherwise it may create dependency errors. You can use the node package manager to switch node versions easily.
You can follow this link for the same: 
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
