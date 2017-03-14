'use strict';

import express from 'express';
import { index, user, create, updateUser, deleteUser } from './couple.controller'
//let controller = require('./couple.controller');

let app = express();

let router = express.Router();

router.get('/', index);
router.get('/:id', user);
router.post('/', create);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;