import {addNoteHandler, getAllNotesHandler, getNoteByIdHandler} from './handler.js'

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
];

export default routes