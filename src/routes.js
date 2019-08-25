import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import RekognitionController from './app/controllers/RekognitionController';
import CollectionController from './app/controllers/CollectionController';
import FaceController from './app/controllers/FaceController';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/detectFace', upload.single('file'), RekognitionController.store);
routes.post('/createCollection/:CollectionId', CollectionController.create);
routes.post('/face/indexFace', upload.single('file'), FaceController.indexFace);
routes.post(
  '/face/searchFacesByImage',
  upload.single('file'),
  FaceController.SearchFacesByImage
);

export default routes;
