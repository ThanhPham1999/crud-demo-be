module.exports = (app) =>{
    var Coder = require('../controller/index')
    app.route('/code/search')
        .get(Coder.searchCode)
    app.route('/code')
        .get(Coder.getCode)
        .post(Coder.addCode)
    app.route('/code/pagination')
        .get(Coder.pagination)
    app.route('/code/:id')
        .delete(Coder.deleteCode)
        .put(Coder.updateCode)
}