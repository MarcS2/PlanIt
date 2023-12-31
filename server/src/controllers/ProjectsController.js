import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { projectsService } from "../services/ProjectsService.js";
import { sprintsService } from "../services/SprintsService.js";
import { tasksService } from "../services/TasksService.js";
import { notesService } from "../services/NotesService.js";
export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserProjects)
      .get('/:projectId', this.getProjectById)
      .get('/:projectId/sprints', this.getSprintsByProjectId)
      .get('/:projectId/tasks', this.getTasksByProjectId)
      .get('/:projectId/notes', this.getNotesByProjectId)
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


  async getSprintsByProjectId(req, res, next) {
    try {
      const projectId = req.params.projectId
      const sprints = await sprintsService.getSprintsByProjectId(projectId)
      return res.send(sprints)
    } catch (error) {
      next(error)
    }
  }


  async getTasksByProjectId(req, res, next) {
    try {
      const projectId = req.params.projectId
      const tasks = await tasksService.getTasksByProjectId(projectId)
      return res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async getNotesByProjectId(req, res, next) {
    try {
      const projectId = req.params.projectId
      const notes = await notesService.getNotesByProjectId(projectId)
      return res.send(notes)
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
      const projectId = req.params.projectId
      const message = await projectsService.destroyProject(projectId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

}