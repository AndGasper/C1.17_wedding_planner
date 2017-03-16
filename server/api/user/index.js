'use strict';

import express from 'express';
import { index, user, create, updateUser, deleteUser } from './user.controller'
//let controller = require('./couple.controller');

let app = express();

let router = express.Router();

// all routes are relative to /api/couple

router.get('/', index);
router.get('/:id', user); // get http://localhost:3000/api/couple
router.post('/', create); // post http://localhost:3000/api/couple
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
