import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";

class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createProject)
  }

  async createProject(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}