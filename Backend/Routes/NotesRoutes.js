const express = require('express');
const app = express();
const router = express.Router();
const {getall , postNote,getNote } = require("./Notescontrol")
const {updateNote , deleteNote} = require("./NotesChanges");
const limiter = require('../upstash');
router.use(limiter);
router.get('/',getall);
router.get('/:id',getNote);
router.post('/',postNote);
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);
module.exports = router;