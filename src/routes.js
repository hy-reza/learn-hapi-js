import {addNoteHandler} from './handler.js'

const routes = [{ 
    path: '/notes',
    method: 'POST',
    handler : addNoteHandler

}, 
]

export default routes