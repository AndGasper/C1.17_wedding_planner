'use strict';

import express from 'express';
import { index, getWeddingPlanner, create, updateWeddingPlanner, deleteWeddingPlanner, isLoggedIn, logout } from './wedding_planner.controller';
let router = express.Router();

router.get('/', index);
router.get('/:id', isLoggedIn, getWeddingPlanner);
router.post('/', create);
router.put('/:id', updateWeddingPlanner);
router.delete('/:id', deleteWeddingPlanner);

export default router;
