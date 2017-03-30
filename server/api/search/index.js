import express from 'express';
import { search } from './search.controller';
let router = express.Router();

router.post('/', search);

export default router;
