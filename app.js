const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const path=require('path');
app = express();

app.use(express.static(path.join(__dirname, '/src')));


app.get('/', function (req, res) {

    res.sendfile('./views/logon.html')
   
});
app.get('/data',function(req,res){
    
})


app.get('data.text',function(req,res){
    res.send('hellow world')

})
            


        
   
   
    



function filterHtml(html) {
    if (html) {
        var $ = cheerio.load(html);
        var page = $('div');
        var pic=page.find('a').each(function(){
            var pic1=$(this);
            console.log(pic1);  
        });
            
           

       

    };
}





app.listen(3000, function () {
    console.log('server is running 3000 port');
});