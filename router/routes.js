const controller = require('../controller/controller')

module.exports = app => {
    app.get('/', controller.index)
    app.get('/:index', controller.findOne)
    app.post('/', controller.create)
    app.delete('/:index', controller.delete)
    app.put('/:index', controller.update)
}