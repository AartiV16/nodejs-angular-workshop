var http=require("http");
var a=60;
var b=20;
var c=a+b;
var mymsg="A value is"+a+"B value is"+b+"Sum value is"+c;

http.createServer (function(Request,Response)
{
    Response.end('<h1>hello DSTC</h1>'+mymsg);
}).listen(7000);
console.log("server started http://127.0.0.1:7000");