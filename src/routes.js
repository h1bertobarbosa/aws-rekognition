import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import RekognitionController from './app/controllers/RekognitionController';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/detectFace', upload.single('file'), RekognitionController.store);
export default routes;
