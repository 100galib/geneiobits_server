const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors());
app.use(express.json());

const run = async() => {
    try{

        app.get('/property', async(req, res) => {
            const query = {};
            const allservice = await allCategori.find(query).toArray();
            res.send(allservice);
        })
        
    }finally{

    }
}
run().catch(error => consol.log(error))



app.get('/', (req, res) => {
    res.send('service portal is running..');
})

app.listen(port, () => {
    console.log(`backend portal is ${port}`)
})