import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TasksService {
  async getTasksByProjectId(projectId) {
    const task = await dbContext.Tasks.find({ projectId: projectId }).populate('creator', 'name picture')
    return task
  }


  async editTask(taskData, userId, taskId) {
    const task = await dbContext.Tasks.findById(taskId)
    if (!task) { throw new BadRequest(`Invalid Id: ${taskId}`) }
    if (task.creatorId.toString() != userId) { throw new Forbidden(`This is not your task`) }

    task.name = taskData.name || task.name
    task.weight = taskData.weight || task.weight
    task.sprintId = taskData.sprintId || task.sprintId
    task.isComplete = taskData.isComplete || task.isComplete

    if (task.isComplete && !task.completedOn) {
      task.completedOn = new Date()
    }
    else {
      task.completedOn = null
    }

    await task.save()
    return task
  }


  async createTask(taskData) {
    const task = (await dbContext.Tasks.create(taskData)).populate('creator', 'name picture')
    return task
  }


  async destroyTask(taskId, userId) {
    const task = await dbContext.Tasks.findById(taskId)

    if (task.creatorId.toString() != userId) { throw new Forbidden('This is not your task') }
    task.remove()
    return `The task has been destroyed`
  }


}

export const tasksService = new TasksService()