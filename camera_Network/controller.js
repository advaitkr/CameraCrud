const express = require('express');
const router = express.Router();
const CameraNetwork = require('../camera_Network/Model/model');
const Camera = require('../camera/Model/model')
router.post('/', async (req, res) => {
    const {
        camera_Id
    } = req.body;
   try{
       let cameraDetails = await Camera.findOne({ _id:camera_Id })
       if(!cameraDetails){
        return res.status(500).json({
            type: "Not Found",
            msg: "Invalid request"
        })
       }
       const network = new CameraNetwork({
        name: req.body.name,
        description: req.body.description,
        camera_Id: cameraDetails._id
      });
      await network.save();
      res.send(network);
    
   }
   catch(err){
    res.status(400).json({ message: err.message });
   }

  });
  router.get('/networks', async (req, res) => {
    const network = await CameraNetwork.find({})
    if (!network) return res.status(404).send('The camera network with the given ID was not found.');
    res.send(network);
  });


  router.get('/:id', async (req, res) => {
    const network = await CameraNetwork.findById(req.params.id)
    if (!network) return res.status(404).send('The camera network with the given ID was not found.');
    res.send(network);
  });
  
  router.put('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    try{
        const camera = await Camera.findOne({ _id:id });
        if(!camera) throw new Error("camera Id not found")
        const network = await CameraNetwork.findOne({camera_Id:id})
        if(!network) throw new Error("no network found")
        const networks = await CameraNetwork.findByIdAndUpdate(network._id, {
            name: req.body.name,
            description: req.body.description
          }, { new: true })
          if (!network) return res.status(404).send('The camera network with the given ID was not found.');
          res.send(network);
    }
    catch(err){
        res.send({"msg":err})
    }
    

})
router.delete('/:id', async (req, res) => {
    const network = await CameraNetwork.findByIdAndRemove(req.params.id);
    if (!network) return res.status(404).send('The camera network with the given ID was not found.');
    res.send(network);
  });




  module.exports = router;