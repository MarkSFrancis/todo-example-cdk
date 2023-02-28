import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class HelloWorldApi extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const handler = new NodejsFunction(this, "HelloWorldHandler", {
      runtime: lambda.Runtime.NODEJS_18_X,
      bundling: {
        minify: true,
      },
      entry: 'src/api/hello-world.ts',
      handler: "main",
    });

    const api = new apigateway.RestApi(this, "hello-world-api", {
      restApiName: "Hello World",
      description: "This service serves hello world."
    });

    const getHelloWorldIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", getHelloWorldIntegration); // GET /

    new cdk.CfnOutput(this, 'hello-world-api-url', {
      value: api.url
    })
  }
}