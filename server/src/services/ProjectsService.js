import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ProjectsService {
  async getUserProjects(creatorId) {
    const projects = await dbContext.Projects.find({ creatorId: creatorId }).populate('creator', 'name picture')
    return projects
  }


  async getProjectById(projectId) {
    const project = (await dbContext.Projects.findById(projectId)).populate('creator', 'name picture')
    if (!project) { throw new BadRequest(`Invalid id: ${projectId}`) }
    return project
  }


  async createProject(projectData) {
    const project = (await dbContext.Projects.create(projectData)).populate('creator')
    return project
  }


  async destroyProject(projectId) {
    const project = await this.getProjectById(projectId)
    await project.remove()
    return 'Your project has been destroyed'
  }

}

export const projectsService = new ProjectsService()