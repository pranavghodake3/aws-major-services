const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const placeOrder = async() => {

    // Create an SQS service object
    var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

    const queues = await sqs.listQueues();
    console.log("queus: ",queues)

    return queues;
};

module.exports = {
    placeOrder
};
