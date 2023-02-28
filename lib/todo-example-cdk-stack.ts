import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HelloWorldApi } from "./hello-world-api";

export class TodoExampleCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new HelloWorldApi(this, `HelloWorldApi`)
  }
}
