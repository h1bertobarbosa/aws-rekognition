import AWS from 'aws-sdk';
import { promisify } from 'util';

class AWSRekognition {
  constructor() {
    this.rekognition = new AWS.Rekognition({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
      apiVersion: '2016-06-27',
    });
  }

  async doRequest(requestName, params) {
    try {
      return this.rekognition[requestName](params).promise();
    } catch (error) {
      return error.message;
    }
  }

  async createCollection(params) {
    return this.doRequest('createCollection', params);
  }

  async detectFaces(params) {
    return new Promise((resolve, reject) => {
      this.rekognition.detectFaces(params, function(err, data) {
        if (err) {
          reject(err);
        } else resolve(data);
      });
    });
  }
}
// https://docs.aws.amazon.com/pt_br/rekognition/latest/dg/collections.html
export default new AWSRekognition();
