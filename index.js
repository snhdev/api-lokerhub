const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const scraper = require('./scraper');
const topkarirScraper = require('./topkarir/App');
const joblumScraper = require('./joblum/App')
app.get('/',(req, res) => {
   res.json({success:false,message:'Maintentance!'})
});
app.get('/top-karir', (req, res)=>{
    try{
        return topkarirScraper.scrape((data)=>{
            res.json(data);
        }).catch(e => {
            res.json({success : false, message : e.toString()});
        });
    }catch(e){
        return res.json({success : false, 'message' : e.toString()});
    }
})
app.get('/joblum', (req, res)=>{
    try{
        return joblumScraper.scrape((data)=>{
            res.json(data);
        }).catch(e => {
            res.json({success : false, message : e.toString()});
        });
    }catch(e){
        return res.json({success : false, 'message' : e.toString()});
    }
})

app.listen(port, () => {
    console.log(`Application running in http://localhost:${port}/`);
})