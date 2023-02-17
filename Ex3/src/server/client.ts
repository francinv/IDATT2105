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
}

export default Client;
