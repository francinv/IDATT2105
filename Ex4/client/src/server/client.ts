import type { AxiosInstance } from "axios";
import axios from "axios";

class Client {
  baseUrl: string;
  axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
  }

  getInstance() {
    return this;
  }

  async addContactForm(data: any) {
    return this.axiosInstance.post("/forms", data);
  }

  async addition(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post("/add", data)
      .then((res) => String(res.data));
  }

  async subtract(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post("/subtract", data)
      .then((res) => String(res.data));
  }

  async multiply(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post("/multiply", data)
      .then((res) => String(res.data));
  }

  async divide(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post("/divide", data)
      .then((res) => String(res.data));
  }
}

export default Client;
