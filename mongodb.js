//var  mongodb = require('mongodb');
var httpserver=require('http-server');
var server =new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db=new mongodb.Db('mydb',server,{safe:true});

db.open(function(err,db){
    if(!err){
        console.log('connect db');
        db.createCollection('mycoll',{safe:true},function(err,collecion){
            if(err){
                console.log(err);
            }
            else{
                var tmp1={title:'hello'};
                var tmp2={title:'world'};
                collecion.insert([tmp1,tmp2],{safe:true},function(err,result){
                    console.log(result);
                });
                collection.find().toArray(function(err,docs){
                    console.log('find');
                    console.log(docs);
                });
                collection.findOne(function(err,doc){
                    console.log('findOne');
                    console.log(doc);
                });
            }
        })
    }
    else{
        console.log(err);        
    }
})