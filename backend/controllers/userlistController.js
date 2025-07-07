import {v2 as cloudinary} from "cloudinary"
import userModel from "../models/userModel.js";

const userlistController={

        // function to add produc

        // function for list product
        getUserlist:async(req,res)=>{

                  try 
                  {
                      const users=await userModel.find({});
                      console.log("get data")
                      res.json({
                         sucess:true,
                         users
                      })
                  } 
                 
                  catch (error) 
                  {
                     console.log(error);
                     res.json({
                        sucess:false,
                        Message:error.Message
                     })
                  }
                
        },

        // remove product


        // function for signle product info



}

export default userlistController;
