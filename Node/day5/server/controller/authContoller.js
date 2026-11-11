
export const adddata=async(req,res)=>{


  try {
    console.log(req.body)
   const {name,courese}=req.body
    
   res.status(200).json({message:"data added successfully",data:{name,courese}})


  } catch (error) {
    console.log(error);
    
    
  }


}


  export const paramsdatas=async(req,res)=>{

  try{
    console.log(req.params)

    res.status(200).json({message:"params data fetched successfully",data:req.params})


  }
  catch(error){
    console.log(error)
  }

  }
