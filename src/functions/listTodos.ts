import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { userid } = event.pathParameters;

  const todos = await document
    .query({
      TableName: "todos",
      IndexName: "userId-index",
      KeyConditionExpression: "userid = :userid",
      ExpressionAttributeValues: {
        ":userid": userid,
      },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      todos,
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
