import type { AxiosInstance } from "axios"
import axios from "axios"
import router from "@/router"
import { AUTH_BASE_URL } from "@/constants"
import type { AuthResponse } from "@/lib"

class AuthClient {
  private axiosInstance: AxiosInstance
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: AUTH_BASE_URL,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      timeout: 10000,
    })
    // ...
  }
  async register(data: { username: string; password: string }) {
    const res = await this.axiosInstance.post<AuthResponse>("register", {
      ...data,
      role: "USER",
    })

    if (!res.data.token) return Promise.reject(res)

    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", data.username)
    await router.push("/profile")

    return res
  }

  async login(data: { username: string; password: string }) {
    const res = await this.axiosInstance.post<AuthResponse>("login", data)

    if (!res.data.token) return Promise.reject(res)

    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", data.username)
    await router.push("/profile")

    return res
  }

  async logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("username")

    await router.push("/login")
  }
  async isTokenValid() {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    if (token && username) {
      return await this.axiosInstance
        .post<boolean>("validate", {
          token,
          username,
        })
        .then((res) => res.data)
    } else return false
  }
}

const authClient = new AuthClient()
export default authClient
