import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import RekognitionController from './app/controllers/RekognitionController';
import CollectionController from './app/controllers/CollectionController';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/detectFace', upload.single('file'), RekognitionController.store);
routes.post('/createCollection/:CollectionId', CollectionController.create);

export default routes;
