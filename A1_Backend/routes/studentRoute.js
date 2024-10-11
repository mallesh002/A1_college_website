// project/backend/routes/studentRoutes.js

import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.get('/', studentController.getAllStudents);
router.post('/', studentController.createStudent);

export default router;
