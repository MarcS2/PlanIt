import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class NotesService {
  async getNotesByProjectId(projectId) {
    const note = await dbContext.Notes.find({ projectId: projectId }).populate('creator', 'name picture')
    return note
  }
  async createNote(noteData) {
    const note = await dbContext.Notes.create(noteData)
    return note
  }


  async destroyNote(noteId, userId) {
    const note = await dbContext.Notes.findById(noteId)
    if (note.creatorId != userId) { throw new Forbidden('This is not your note') }
    note.remove()
    return 'Your note has been destroyed'
  }

}

export const notesService = new NotesService()