import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { notesService } from "../services/NotesService.js";

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .delete('/:noteId', this.destroyNote)
  }
  async createNote(req, res, next) {
    try {
      const noteData = req.body
      noteData.creatorId = req.userInfo.id
      const note = await notesService.createNote(noteData)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }
  async destroyNote(req, res, next) {
    try {
      const noteId = req.params.noteId
      const userId = req.userInfo.id
      const message = await notesService.destroyNote(noteId, userId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}