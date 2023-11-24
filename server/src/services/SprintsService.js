import { dbContext } from "../db/DbContext.js"

class SprintsService {
  async getSprintsByProjectId(projectId) {
    const sprints = await dbContext.Sprints.find({ projectId: projectId })
    return sprints
  }


  async createSprint(sprintData) {
    const sprint = (await dbContext.Sprints.create(sprintData)).populate('creator')
    return sprint
  }

  async destroySprint(sprintId) {
    const sprint = await dbContext.Sprints.findById(sprintId)
    sprint.remove()
    return 'Your sprint has been destroyed'
  }
}
export const sprintsService = new SprintsService()