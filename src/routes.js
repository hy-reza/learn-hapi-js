import {addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler} from './handler.js'

const routes = [
  {
    path: "/notes",
    method: "POST",
    handler: addNoteHandler,
  },
  {
    path: "/notes",
    method: "GET",
    handler: getAllNotesHandler,
  },
  {
    path: "/notes/{id}",
    method: "GET",
    handler: getNoteByIdHandler,
  },
  {
    path: "/notes/{id}",
    method: "PUT",
    handler: editNoteByIdHandler,
  },
  {
    path: "/notes/{id}",
    method: "DELETE",
    handler: deleteNoteByIdHandler
  }

];

export default routes