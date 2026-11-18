import express from "express";


export const insertData = async (req, res) => {

try{
    console.log(req.body)

    res.status(200).json({
        success:true,
        message:"data inserted successfully"
    })


}catch(error){
    console.log(error)
}


}
