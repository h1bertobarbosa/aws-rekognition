import fs from 'fs';
import rekognition from '../services/rekognition';

class RekognitionController {
  async store(req, res) {
    const { path } = req.file;
    const bitmap = fs.readFileSync(path);

    const image = await new Buffer(bitmap, 'base64');
    const params = {
      Attributes: ['ALL'],
      Image: { Bytes: image },
    };
    const data = await rekognition.detectFaces(params);
    res.json(data);
  }
}

export default new RekognitionController();
