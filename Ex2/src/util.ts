import { Operators } from "@/operators";

export const isNumericString = (value: string): boolean => {
  return !isNaN(Number(value));
};

export const calculate = (
  firstNumber: string,
  secondNumber: string,
  operator: Operators
): string => {
  switch (operator) {
    case Operators.ADD:
      return (Number(firstNumber) + Number(secondNumber)).toString();
    case Operators.SUBTRACT:
      return (Number(firstNumber) - Number(secondNumber)).toString();
    case Operators.MULTIPLY:
      return (Number(firstNumber) * Number(secondNumber)).toString();
    case Operators.DIVIDE:
      return (Number(firstNumber) / Number(secondNumber)).toString();
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
