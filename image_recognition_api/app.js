const request = require("request");
const fs = require("fs");
const CloudmersiveImageApiClient = require("cloudmersive-image-api-client");
const defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
const Apikey = defaultClient.authentications["Apikey"];
Apikey.apiKey = "b8401cdf-9923-4584-b29c-349cca487d22";

const apiInstance = new CloudmersiveImageApiClient.RecognizeApi();

const imageFile = Buffer.from(fs.readFileSync("red-rose-2.png").buffer);
// File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.

const callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
    console.log(response.body.BestOutcome.Description);
  }
};
apiInstance.recognizeDescribe(imageFile, callback);
