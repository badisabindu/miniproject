const city_model=require("../models/city_model")
 async function getCities(req,res){
    const cities=await city_model.find({});
    res.status(200).json(cities);
}
// async function getCityByName(req,res){
//     const {city}=req.params;
//     const city_obj=await city_model.findOne({city});
//     res.status(200).json(city_obj);
// }
// const city_model = require('../models/city_model');

const getCityByName = async (req, res) => {
    try {
        const city = req.params.city;
        console.log("City parameter:", city);
        
        if (!city) {
            throw new Error("City parameter is missing");
        }
    
        const city_obj = await city_model.findOne({ name: city });
        console.log("City object:", city_obj);
    
        if (city_obj) {
            res.status(200).json({message:city_obj});
        } else {
            res.status(404).json({ message: 'City not found' });
        }
    } catch (error) {
        console.error("Error occurred:", error.message);
        res.status(500).json({ message: error.message });
    }
    
};

// module.exports = { getCityByName };

module.exports= {getCityByName,getCities}