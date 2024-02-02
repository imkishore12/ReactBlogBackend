const route =  require('express').Router();
const alldata=require("../Data/Store")
route.get("/", (request, response)=>{
    return response.send(alldata)
});
route.get("/home", (request, response)=>{
    return response.send(alldata)
});
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

route.get("/food", (request, response)=>{
    return response.send(alldata)
});

module.exports = {route}