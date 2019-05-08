const express=require('express');
const app=express();
const postController=require('../controller/post');
const router=express.Router();
router.get('/',postController.post);


module.exports=router;
/**
 * Here we transfer this function to controller
 * and access this here directly
 */
// exports.post=(req,res)=>{
//     res.send('Hey this is express js simple')
// };
