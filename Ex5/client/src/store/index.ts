import { defineStore } from "pinia";
import { Operators } from "@/lib";
import { calculate, isNumberValues, parseFromInput } from "@/utils";
import Client from "@/server/client";

export const client = new Client("http://localhost:8080/api");
export const useCalculatorStore = defineStore("calculator", {
  state: () => ({
    firstNumber: "0",
    secondNumber: "0",
    operator: null as Operators | null,
    result: "0",
    log: [] as string[],
    showErrorMessage: "hide",
  }),
  getters: {
    isFirstNumberState(state) {
      return state.operator === null;
    },
    isSecondNumberState(state) {
      return state.operator !== null;
    },
  },
  actions: {
    clear() {
      this.firstNumber = "0";
      this.secondNumber = "0";
      this.operator = null;
      this.result = "0";
    },
    negate() {
      if (this.isFirstNumberState) {
        this.firstNumber = (Number(this.firstNumber) * -1).toString();
      } else {
        this.secondNumber = (Number(this.secondNumber) * -1).toString();
      }
    },
    async divide() {
      if (this.isSecondNumberState) {
        this.result = await client.divide({
          a: Number(this.firstNumber),
          b: Number(this.secondNumber),
        });
        this.log.push(
          `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.result}`
        );
        this.firstNumber = this.result;
        this.secondNumber = "0";
      } else {
        this.operator = Operators.DIVIDE;
      }
    },
    async multiply() {
      if (this.isSecondNumberState) {
        this.result = await client.multiply({
          a: Number(this.firstNumber),
          b: Number(this.secondNumber),
        });
        this.log.push(
          `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.result}`
        );
        this.firstNumber = this.result;
        this.secondNumber = "0";
      } else {
        this.operator = Operators.MULTIPLY;
      }
    },
    del() {
      if (this.isSecondNumberState) {
        if (this.secondNumber.length > 1) {
          this.secondNumber = this.secondNumber.slice(0, -1);
        }
      } else {
        if (this.firstNumber.length > 1) {
          this.firstNumber = this.firstNumber.slice(0, -1);
        }
      }
    },
    async subtract() {
      if (this.isSecondNumberState) {
        this.result = await client.subtract({
          a: Number(this.firstNumber),
          b: Number(this.secondNumber),
        });
        this.log.push(
          `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.result}`
        );
        this.firstNumber = this.result;
        this.secondNumber = "0";
      } else {
        this.operator = Operators.SUBTRACT;
      }
    },
    async addition() {
      if (this.isSecondNumberState) {
        this.result = await client.addition({
          a: Number(this.firstNumber),
          b: Number(this.secondNumber),
        });
        this.log.push(
          `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.result}`
        );
        this.firstNumber = this.result;
        this.secondNumber = "0";
      } else {
        this.operator = Operators.ADD;
      }
    },
    decimal() {
      if (this.isFirstNumberState) {
        if (!this.firstNumber.includes(".")) {
          this.firstNumber += ".";
        }
      } else {
        if (!this.secondNumber.includes(".")) {
          this.secondNumber += ".";
        }
      }
    },
    async equals() {
      if (this.operator) {
        this.result = await calculate(
          this.firstNumber,
          this.secondNumber,
          this.operator!!
        );
        this.log.push(
          `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.result}`
        );
        this.firstNumber = this.result;
        this.secondNumber = "0";
        this.operator = null;
      }
    },
    setNumber(value: number) {
      if (this.isFirstNumberState) {
        if (this.firstNumber === "0") {
          this.firstNumber = String(value);
        } else {
          this.firstNumber += String(value);
        }
      } else {
        if (this.secondNumber === "0") {
          this.secondNumber = String(value);
        } else {
          this.secondNumber += String(value);
        }
      }
    },
    async calculateFromInput(value: string) {
      const { firstNumber, secondNumber, operator } = parseFromInput(value);
      const isNumber = isNumberValues(firstNumber, secondNumber);
      if (isNumber) {
        if (this.showErrorMessage === "flex") this.showErrorMessage = "hide";
        this.result = await calculate(firstNumber, secondNumber, operator);
        this.log.push(
          `${firstNumber} ${operator} ${secondNumber} = ${this.result}`
        );
        this.firstNumber = this.result;
        this.secondNumber = "0";
        this.operator = null;
      } else {
        this.showErrorMessage = "flex";
      }
    },
  },
});
