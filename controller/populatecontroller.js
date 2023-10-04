var category = require('../model/categorymodel')
var subcategory = require('../model/subcategorymodel')

exports.Catagory = async (req,res) => {
     var data = await category.create(req.body)

     res.status(200).json({
          status: 'success',
          data
     })
}

exports.sub_catagory = async (req, res) => {

     var data = await subcategory.create(req.body)

     res.status(200).json({
          status: 'success',
          data
     })
}

exports.Catagori = async (req, res) => {

     var data = await category.find( )

     res.status(200).json({
          status: 'success',
          data
     })
}

exports.scatagori = async (req, res) => {

     var data = await subcategory.find().populate('s_id')

     res.status(200).json({
          status: 'success',
          data
     })
}

