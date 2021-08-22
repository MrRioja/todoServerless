import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidV4 } from "uuid";
import { document } from "src/utils/dynamodbClient";

interface ICreateTodo {
  title: string;
  deadline: string;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const id = uuidV4();
  const { userid } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body) as ICreateTodo;

  const todo = {
    id,
    user_id: userid,
    title,
    done: false,
    deadline: new Date(deadline),
  };

  await document
    .put({
      TableName: "todos",
      Item: todo,
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Todo created!",
      todo,
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
