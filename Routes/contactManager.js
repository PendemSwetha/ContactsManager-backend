const router = require("express").Router();
const bodyparser = require("body-parser");
const Contacts = require("../Models/contacts");
router.use(bodyparser.json());

router.get('/getposts', async(req, res)=>{
    try{
        let data = await Contacts.find();
        res.status(200).json(data)
    }
    catch(e)
    {
        res.status(403).json({message: e.message})
    }
})
router.get('/:email',async(req,res)=>{ 
    try{ 
        let email = req.params.email; 
        // console.log(email);
         const user=await Contacts.find({email:{$regex:email,$options:'i'},useRef:req.user}); 
         console.log(user)
         res.json({
            status: "Success",
            user
        })
    }
        catch (e) {
            res.status(400).json({
                status: "Failed",
                message: e.message
            })
        }


    });

router.post("/posts", async (req, res) => {
    try {
        const user = await Contacts.create(req.body)
        res.json({
            status: "Success",
            user
        })
    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }

});
router.delete("/posts", async (req, res) => {
    try {
        const user = await Contacts.deleteMany(req.body)
        res.json({
            status: "Success",
            message:"Deleted successfullly"
        })
    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }

});


module.exports = router;