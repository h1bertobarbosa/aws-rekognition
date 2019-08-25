import fs from 'fs';
import rekognition from '../services/rekognition';

class FaceController {
  async indexFace(req, res) {
    const { path } = req.file;
    const { imageName, collectionName } = req.body;

    const bitmap = fs.readFileSync(path);

    const image = await new Buffer(bitmap, 'base64');
    const params = {
      CollectionId: collectionName,
      ExternalImageId: imageName,
      DetectionAttributes: ['DEFAULT'],
      Image: { Bytes: image },
      MaxFaces: 1,
      QualityFilter: 'AUTO',
    };

    const data = await rekognition.doRequest('indexFaces', params);
    res.json(data);
  }

  async SearchFacesByImage(req, res) {
    const { path } = req.file;
    const { collectionName } = req.body;

    const bitmap = fs.readFileSync(path);

    const image = await new Buffer(bitmap, 'base64');
    const params = {
      CollectionId: collectionName,
      Image: { Bytes: image },
      MaxFaces: 5,
      FaceMatchThreshold: 70,
    };

    const data = await rekognition.doRequest('searchFacesByImage', params);
    res.json(data);
  }
}

export default new FaceController();
