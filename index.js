const express = require('express')
const PORT = process.env.PORT || 5000
var app = express();

app.get('/', (req, res) => {


function countOccurences(string, word) {
   return string.split(word).length - 1;
};




   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
   var fullUrl2 = fullUrl.substring(51);
   const myArray = fullUrl2.split("qqqq");
   let bufferObj1 = Buffer.from(myArray[0], "base64");
   let decode1 = bufferObj1.toString("utf8");
   let bufferObj2 = Buffer.from(myArray[3], "base64");
   let decode2 = bufferObj2.toString("utf8");
   let decode11 = decode1.split('');
   let decode22 = decode2.split('');
   decode11 = decode11.slice(0, 5) + ',' + decode11.slice(6);
decode11 = decode11.slice(0, 17) + decode11.slice(18);
decode11 = decode11.slice(0, 17) + decode11.slice(18);
decode11 = decode11.slice(0, 24) + decode11.slice(25);
decode11 = decode11.slice(0, 24) + decode11.slice(25);
decode11 = decode11.slice(0, 27) + decode11.slice(28);
decode11 = decode11.slice(0, 27) + decode11.slice(28);
decode11 = decode11.slice(0, 30) + decode11.slice(31);
decode11 = decode11.slice(0, 30) + decode11.slice(31);
decode11 = decode11.slice(0, 30) + decode11.slice(31);
decode11 = decode11.slice(0, 30) + decode11.slice(31);
decode11 = decode11.toString();
decode11 = decode11.replace('/,/g', '');
decode22 = decode22.slice(0, 5) + ',' + decode22.slice(6);
decode22 = decode22.slice(0, 17) + decode22.slice(18);
decode22 = decode22.slice(0, 17) + decode22.slice(18);
decode22 = decode22.slice(0, 24) + decode22.slice(25);
decode22 = decode22.slice(0, 24) + decode22.slice(25);
decode22 = decode22.slice(0, 27) + decode22.slice(28);
decode22 = decode22.slice(0, 27) + decode22.slice(28);
decode22 = decode22.slice(0, 30) + decode22.slice(31);
decode22 = decode22.slice(0, 30) + decode22.slice(31);
decode22 = decode22.slice(0, 30) + decode22.slice(31);
decode22 = decode22.slice(0, 30) + decode22.slice(31);
decode22 = decode22.toString();
decode22 = decode22.replace('/,/g', '');
 let bufferObj3 = Buffer.from(decode11, "base64");
   decode11 = bufferObj3.toString("utf8");
   let bufferObj4 = Buffer.from(decode22, "base64");
   decode22 = bufferObj4.toString("utf8");
  //res.send('Array = ' + myArray);
  //res.send('decode11 = ' + decode11);





let link9 =  decode11 + myArray[1] + decode22;

const request = require('request');
request(link9, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  




var findSize = (body.indexOf('size'));
 getSizeValue = body.substring(findSize);
        getSizeValue = getSizeValue.substring(6);
        getSizeValue = getSizeValue.slice(0, getSizeValue.indexOf("\""));
        getSizeValue = parseInt(getSizeValue, 10);    
        




  res.send(getSizeValue);
});

 
  
});

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
