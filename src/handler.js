import {nanoid} from 'nanoid';
import notes from './notes.js';

export const addNoteHandler = (req, h)  => {
    const {title, tags, body} = req.payload;
    const id = nanoid(16)
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt

    const newNote = {title, tags, body, id, createdAt, updatedAt}

    notes.push(newNote);

    const isSuccess = notes.filter(note => note.id === id).length > 0;
    console.log(notes)
    if (isSuccess) {
        return h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan',
          data: {
            noteId: id,
          },
        }).code(200);
      }
    
      return h.responese({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      }).code(500);

      
}