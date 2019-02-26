// *******************************************************
// AWS Controller File
// -------------------------------------------------------
// This file contains all the required setup for handling
// connections to AWS for it's different services
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import AWS from 'aws-sdk';
import respack from 'respack';
import SECRETS from '../config/secrets';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
AWS.config.update({
    accessKeyId: SECRETS.AWS_ACCESS_KEY_ID,
    secretAccessKey: SECRETS.AWS_SECRET_ACCESS_KEY
});

const S3_BUCKET_NAME = SECRETS.S3_BUCKET_NAME;

export const uploadToS3 = function(file, fileName) {

    const S3 = new AWS.S3();
    return S3.upload({
		Bucket: SECRETS.S3_BUCKET_NAME,
		Key: fileName,
		Body: file.buffer,
		ContentEncoding: file.encoding,
		ContentType: file.mimetype,
        CacheControl: 'max-age=2628000',
        ACL: 'public-read'
	}).promise()
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.log(err);
        return err;
    });
}

export const deleteFromS3ByFilename = function(fileName) {
    const S3 = new AWS.S3();
    return S3.deleteObject({
        Bucket: SECRETS.S3_BUCKET_NAME,
        Key: fileName
    }).promise()
    .then((data) => {
        return respack.OKAY();
    })
    .catch((err) => {
        return respack.ERROR(err);
    });
}
// -------------------------------------------
