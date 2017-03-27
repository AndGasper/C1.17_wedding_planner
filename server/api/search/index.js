import express from 'express';
import { search } from './search.controller';
let router = express.Router();

router.get('/', search);

export default router;
