const todoController = require('../../controllers/todo.controllers');
const TodoModel = require("../../model/todo.model");
const httpMocks = require('node-mocks-http');
const newTodo = require("../mock-data/new-todo.json");
TodoModel.create = jest.fn();
let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})
describe('ToDoController.createTodo', () => {
    it('should have a createToDo function', () => {
        expect(typeof todoController.createTodo).toBe('function');
    });
    it('should call TodoModel.create', () => {

        req.body = newTodo;
        todoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })
    it('it should return status 201', () => {
        req.body = newTodo;
        todoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled).toBeTruthy();
    })
    it('should return json body in reponse', () => {
        TodoModel.create.mockReturnValue(newTodo);
        todoController.createTodo(req, req, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    })
});

