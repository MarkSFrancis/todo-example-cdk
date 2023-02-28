import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export async function main(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify('Hello from CDK!')
  };
}
