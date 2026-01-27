const Category = require("../models/Category");
const { request, response } = require("express");

exports.createCategory = async(request,response)=>{
    try{
    const {name} = request.body;
    if(!name){
        return response.status(400).json({
            success:false,
            message:"Name field is required"
        })
    }
    const category = await Category.create({name:name})
    return response.status(200).json({
        success:true,
        message:"Category created Successfully",
        data:category
    })
    }
    catch(error){
    console.log(error);
    return response.status(500).json({
    success:false,
    message:"Something went wrong",
    error:error.message
});
}
}

exports.getAllCategory = async(request,response)=>{
    try{
    const allCategory = await Category.find()
        return response.status(200).json({
        success:true,
        message:"Category created Successfully",
        data:allCategory
    })

    }
    catch(error){
    console.log(error);
    return response.status(500).json({
    success:false,
    message:"Something went wrong",
    error:error.message
    })}
}