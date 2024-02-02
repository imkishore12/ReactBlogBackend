const route =  require('express').Router();
const alldata=require("../Data/Store")
route.get("/bollywood", (request, response)=>{
    return response.send(alldata)
});

route.get("/hollywood", (request, response)=>{
    return response.send(alldata)
});

route.get("/fitness", (request, response)=>{
    return response.send(alldata)
});

route.get("/technology", (request, response)=>{
    return response.send(alldata)
});

route.get("/sports", (request, response)=>{
    return response.send(sports)
});

module.exports = {route}