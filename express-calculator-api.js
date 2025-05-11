const express=require("express");
const app=express()
app.get("/",function(req,res){
    res.json({
        message:"welcom to the calculator API !"
    });
});
app.get("multiply",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer:a*b
    }); 
});
app.get("addition",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer:a+b
    }); 
});

app.get("subtraction",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer:a-b
    }); 
});
app.get("division",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(b==0){
        return res.json({
            message : "Cannot divide by zero !"
        });
    }
     res.json({
        answer:a/b
    });
   
});
app.get("/modulus", function(req, res) {  
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ answer: a % b });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



