const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWARD}@cluster0.w7wfspi.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const run = async() => {
    try{
        const alldata = client.db('rent-sell-server').collection('rentandsell');

        app.get('/property', async(req, res) => {
            const query = {};
            const allflat = await alldata.find(query).toArray();
            res.send(allflat);
        })
        app.get('/property/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const flat = await alldata.find(query).toArray();
            res.send(flat);
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