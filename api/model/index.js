const mongoose = require("mongoose")
const CodeSchema = new mongoose.Schema({
    name : {
        type: String,
        require:true,
    },
    status:{
        type: Boolean,
        default: true,
    }

})

module.exports = mongoose.model("code",CodeSchema)