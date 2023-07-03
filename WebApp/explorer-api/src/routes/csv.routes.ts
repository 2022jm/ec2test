const multer = require('multer');

import { Router } from "express";
import {
    readCsv
} from "../controllers/csv.controller";

const router = Router();

const upload = multer({ dest: 'tmp/csv/' });

// Routes

router.post('/api/csv/:csvType', upload.fields([{name: "uploadedFile", maxCount: 1}]), readCsv);

export default router;