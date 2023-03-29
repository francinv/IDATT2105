import { Operators } from "@/lib"
import { apiClient } from "@/server"
export const calculate = async (firstNumber: string, secondNumber: string, operator: Operators): Promise<string> => {
  switch (operator) {
    case Operators.ADDITION:
      return await apiClient.addition({
        a: Number(firstNumber),
        b: Number(secondNumber),
      })
    case Operators.SUBTRACT:
      return await apiClient.subtract({
        a: Number(firstNumber),
        b: Number(secondNumber),
      })
    case Operators.MULTIPLY:
      return await apiClient.multiply({
        a: Number(firstNumber),
        b: Number(secondNumber),
      })
    case Operators.DIVIDE:
      return await apiClient.divide({
        a: Number(firstNumber),
        b: Number(secondNumber),
      })
    default:
      return "0"
  }
}

export const parseFromInput = (
  stringToParse: string
): {
  firstNumber: string
  secondNumber: string
  operator: Operators
} => {
  if (stringToParse.includes("+")) {
    const operatorIndex = stringToParse.indexOf("+")
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.ADDITION,
    }
  } else if (stringToParse.includes("-")) {
    const operatorIndex = stringToParse.indexOf("-")
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.SUBTRACT,
    }
  } else if (stringToParse.includes("*")) {
    const operatorIndex = stringToParse.indexOf("*")
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.MULTIPLY,
    }
  } else {
    const operatorIndex = stringToParse.indexOf("/")
    return {
      firstNumber: stringToParse.slice(0, operatorIndex),
      secondNumber: stringToParse.slice(operatorIndex + 1),
      operator: Operators.DIVIDE,
    }
  }
}

export const isNumberValues = (firstNumber: string, secondNumber: string) => {
  return !isNaN(Number(firstNumber)) && !isNaN(Number(secondNumber))
}

export const toOperatorString = (operator: Operators) => {
  switch (operator) {
    case Operators.ADDITION:
      return "+"
    case Operators.SUBTRACT:
      return "-"
    case Operators.MULTIPLY:
      return "*"
    case Operators.DIVIDE:
      return "/"
    default:
      return "+"
  }
}
