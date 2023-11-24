import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { projectsService } from "../services/ProjectsService.js";
export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserProjects)
      .get('/:projectId', this.getProjectById)
      .post('', this.createProject)
      .delete('/:projectId', this.destroyProject)
  }


  async getUserProjects(req, res, next) {
    try {
      const creatorId = req.userInfo.id
      const projects = await projectsService.getUserProjects(creatorId)
      return res.send(projects)
    } catch (error) {
      next(error)
    }
  }


  async getProjectById(req, res, next) {
    try {
      const projectId = req.params.projectId
      const project = await projectsService.getProjectById(projectId)
      return res.send(project)
    } catch (error) {
      next(error)
    }
  }


  async createProject(req, res, next) {
    try {
      const projectData = req.body
      projectData.creatorId = req.userInfo.id
      const project = await projectsService.createProject(projectData)
      return res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async destroyProject(req, res, next) {
    try {
      const userId = req.userInfo.id
      const projectId = req.params.projectId
      const message = await projectsService.destroyProject(projectId, userId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

}