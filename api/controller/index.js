var coder = require('../model/index')
async function getCode(req, res){
    const remmember = await coder.find({})
    res.send({"result": remmember})
}
async function addCode(req, res){
    const data = req.body
    const addCode = await coder.create(data)
    res.send({"addCode":addCode})
}
async function deleteCode(req, res){
    let id = req.params.id
    const deleteCode = await coder.findByIdAndDelete(id)
    res.send({"deleteCode":deleteCode})
}
async function updateCode(req, res){
    let id = req.params.id
    let body = req.body
    const updateCode = await coder.findByIdAndUpdate(id,body)
    res.send({"updateCode":updateCode})
}
async function searchCode(req, res){
    let page = parseInt(req.query._page)
    let limit = parseInt(req.query._limit)
    let textSearch = req.query.q
    let skip = (page-1)*limit
    let totalRecord = await coder.find({name : {$regex:textSearch,$options:"i"}})
    let totalPage = Math.ceil (totalRecord.length/limit)
    const searchCode = await coder.find({name : {$regex:textSearch,$options:"i"}}).limit(limit).skip(skip)
    res.send({"searchCode":searchCode,totalPage})
}
async function pagination(req,res){
    let page = parseInt(req.query._page)
    let limit = parseInt(req.query._limit)
    let skip = (page-1)*limit
    let totalRecord = await coder.find({})
    let totalPage = Math.ceil (totalRecord.length/limit)
    const pagination = await coder.find({}).limit(limit).skip(skip)
    res.send({"pagination":pagination,totalPage})
}
module.exports ={
    getCode,
    addCode,
    deleteCode,
    updateCode,
    searchCode,
    pagination,
}