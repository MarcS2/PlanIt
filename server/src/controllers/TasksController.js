import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { tasksService } from "../services/TasksService.js";

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .put('/:taskId', this.editTask)
      .post('', this.createTask)
      .delete('/:taskId', this.destroyTask)
  }


  async editTask(req, res, next) {
    try {
      const userId = req.userInfo.id
      const taskData = req.body
      const taskId = req.params.taskId
      const task = await tasksService.editTask(taskData, userId, taskId)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }


  async createTask(req, res, next) {
    try {
      const taskData = req.body
      taskData.creatorId = req.userInfo.id
      const task = await tasksService.createTask(taskData)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }


  async destroyTask(req, res, next) {
    try {
      const taskId = req.params.taskId
      const userId = req.userInfo.id
      const message = await tasksService.destroyTask(taskId, userId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}