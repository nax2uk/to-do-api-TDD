const todoController = require('../../controllers/todo.controllers');
const TodoModel = require("../../model/todo.model");
const httpMocks = require('node-mocks-http')
TodoModel.create = jest.fn();

describe('ToDoController.createTodo', () => {
    it('should have a createToDo function', () => {
        expect(typeof todoController.createTodo).toBe('function');
    });
    it('should call todoModel.create', () => {
        todoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    });
    it('should call TodoModel.create', () => {
        let req, res, next;
        req = httpMocks.createTodo(req, res, next);
        expect(TodoModel.create).tobeCalled();
    })
});

