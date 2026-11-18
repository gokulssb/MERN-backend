export const adddData = async(req,res)=>{


try{

    console.log(req.body)

    res.status(200).json({
        success:true,
        message:"data added successfully"
    })

}catch(error){
    console.log(error)
}

}