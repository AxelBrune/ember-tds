var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

MongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    console.log("Base boards créée");
    var dbo=db.db("boards");
    dbo.createCollection("projects",function(err,res){
        if (err) {throw err;}
        console.log("Collection projects créée");
    });
    dbo.createCollection("developers",function(err,res){
        if (err) {throw err;}
        console.log("Collection developers créée");
    });
    dbo.createCollection("steps",function(err,res){
        if (err) {throw err;}
        console.log("Collection steps créée");
    });
    dbo.createCollection("stories",function(err,res){
        if (err) {throw err;}
        console.log("Collection stories créée");
    });
    dbo.createCollection("tags",function(err,res){
        if (err) {throw err;}
        console.log("Collection tags créée");
    });
    dbo.createCollection("tasks",function(err,res){
        if (err) {throw err;}
        console.log("Collection tasks créée");
    });

    var devs=[
        {identity:"Axel Brune"},
        {identity:"Dev Loper"},
        {identity:"Pierre Legrand"},
        {identity:"Patrick Jones"},
        {identity:"Sabrina Lemel"},
        {identity:"Sophie Marie"},
    ]

    dbo.collection('developers').insertMany(devs,function(err, res){
        if (err){throw err;}
        console.log("Nb de developers inséréés : "+res.insertedCount);
    })

    db.close();
});