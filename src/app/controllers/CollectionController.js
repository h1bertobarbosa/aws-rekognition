import rekognition from '../services/rekognition';

class CollectionController {
  async create(req, res) {
    const { CollectionId } = req.params;
    const data = await rekognition.createCollection({ CollectionId });
    res.json(data);
  }
}

export default new CollectionController();
