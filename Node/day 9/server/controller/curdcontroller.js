import curdmodle from "../module/curdmodle.js"

export const adddData = async(req,res)=>{


try{

    console.log(req.body)

    const {username,useremail} = req.body

    const insert = await curdmodle.create({username,useremail})

    

    res.status(200).json({
        success:true,
        message:"data added successfully",insert
    })

}catch(error){
    console.log(error)
}

}