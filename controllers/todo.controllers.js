
const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {
    const createdModel = TodoModel.create(req.body);
    console.log(createdModel);
    res.status(201).json(createdModel);

}
