const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }));

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');



  const ModelsSchema = new mongoose.Schema({
    name:String,
   parag:String,
    imageURL:String
  });
  const MyModel = mongoose.model('schemamodels',ModelsSchema);

  DB_PASSWORD=process.env.DB_PASSWORD
DB_CONNECTION=process.env.DB_CONNECTION
DB_CONNECTION=DB_CONNECTION.replace("<password>",DB_PASSWORD)
// console.log(DB_CONNECTION);
  mongoose.connect(DB_CONNECTION)
  .then(() => console.log('Connected!'));






app.get('/api', (req, res) => {
  res.send('Hello World!')
})
//GETALLL 
app.get("/api/models", async(req, res) => {
    const { name } = req.query;
    const models=await MyModel.find()
    if (name === undefined) {
      res.status(200).send({
        data: models,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: models.filter(
          (x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  });

//GETBYID
app.get("/api/models/:id", async(req, res) => {
    const id = req.params.id;

    const model = await MyModel.findById(id)
    // res.send(model)
    if (!model) {
      console.log("test");
      res.status(204).send("model not found!");
  
    } else {
      res.status(200).send({
        data: model,
        message: "data get success!",
      });
    
    }
  });

//DELeTE
app.delete("/api/models/:id", async(req, res) => {
    const id = req.params.id;
    const model = await MyModel.findByIdAndDelete(id)
    if (model === undefined) {
      res.status(404).send("model not found");
    } else {
    
      res.status(203).send({
        data: model,
        message: "people deleted successfully",
      });
    }
  });
  //post
app.post("/api/models",async(req, res) => {
    const { name, parag, imageURL } = req.body;
    const nemMOdels = new MyModel({
      name: name,
      imageURL: imageURL,
      parag: parag,
    });
   await  nemMOdels.save()
    res.status(201).send("created");
  });

//put
app.put("/api/models/:id",async (req, res) => {
    const id = req.params.id;
    const { name, parag, imageURL } = req.body;
    const exiostedModels =await MyModel.findByIdAndUpdate(id,{name:name, parag:parag, imageURL:imageURL})
    if (exiostedModels == undefined) {
      res.status(404).send("peoples not found!");
    } else {
      res.status(200).send(`people: ${exiostedModels.name}`);
    }
  });

  PORT  = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})