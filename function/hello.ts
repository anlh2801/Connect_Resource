'use strict';

module.exports.hello = lambdaWrapper("first hello", hello)

function lambdaWrapper(name, func){
  console.log(`function running ${name}`)
  return async (event) => {
    return func(event)
  }
}

function hello(event){
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
}