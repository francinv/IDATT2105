import type { AxiosInstance } from "axios"
import axios from "axios"
import router from "@/router"
import { API_BASE_URL } from "@/constants"
import type { UserCalculationResponse } from "@/lib"

class Client {
  axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    })

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token")
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        if (error.response.status === 403) {
          localStorage.removeItem("token")
          localStorage.removeItem("username")

          await router.push("/login")
        }
        return Promise.reject(error)
      }
    )
  }

  getInstance() {
    return this
  }

  async addContactForm(data: any) {
    return this.axiosInstance.post("forms", data)
  }

  async addition(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post<number>("add", {
        ...data,
        requestingUsername: localStorage.getItem("username"),
      })
      .then((res) => String(res.data))
  }

  async subtract(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post<number>("subtract", {
        ...data,
        requestingUsername: localStorage.getItem("username"),
      })
      .then((res) => String(res.data))
  }

  async multiply(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post<number>("multiply", {
        ...data,
        requestingUsername: localStorage.getItem("username"),
      })
      .then((res) => String(res.data))
  }

  async divide(data: { a: number; b: number }) {
    return await this.axiosInstance
      .post<number>("divide", {
        ...data,
        requestingUsername: localStorage.getItem("username"),
      })
      .then((res) => String(res.data))
  }

  async getUserCalculationHistory(params: { page: number; size: number }) {
    const { page, size } = params
    const username = localStorage.getItem("username")
    return await this.axiosInstance.get<UserCalculationResponse>(`user/?username=${username}&page=${page}&size=${size}`)
  }
}

const apiClient = new Client()

export default apiClient
