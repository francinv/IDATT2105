import { Operators } from "@/lib";
import { client } from "@/store";
export const calculate = async (
  firstNumber: string,
  secondNumber: string,
  operator: Operators
): Promise<string> => {
  switch (operator) {
    case Operators.ADD:
      return await client.addition({
        a: Number(firstNumber),
        b: Number(secondNumber),
      });
    case Operators.SUBTRACT:
      return await client.subtract({
        a: Number(firstNumber),
        b: Number(secondNumber),
      });
    case Operators.MULTIPLY:
      return await client.multiply({
        a: Number(firstNumber),
        b: Number(secondNumber),
      });
    case Operators.DIVIDE:
      return await client.divide({
        a: Number(firstNumber),
        b: Number(secondNumber),
      });
    default:
      return "0";
  }
};

export const parseFromInput = (
  stringToParse: string
): {
  firstNumber: string;
  secondNumber: string;
  operator: Operators;
} => {
  if (stringToParse.includes("+")) {
    const operatorIndex = stringToParse.indexOf("+");
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.ADD,
    };
  } else if (stringToParse.includes("-")) {
    const operatorIndex = stringToParse.indexOf("-");
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.SUBTRACT,
    };
  } else if (stringToParse.includes("*")) {
    const operatorIndex = stringToParse.indexOf("*");
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.MULTIPLY,
    };
  } else {
    const operatorIndex = stringToParse.indexOf("/");
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.DIVIDE,
    };
  }
};

export const isNumberValues = (firstNumber: string, secondNumber: string) => {
  return !isNaN(Number(firstNumber)) && !isNaN(Number(secondNumber));
};
