import AWS from 'aws-sdk';

class AWSRekognition {
  constructor() {
    this.rekognition = new AWS.Rekognition({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
      apiVersion: '2016-06-27',
    });
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

export default new AWSRekognition();
