import type { LoginData, SignupData } from "@/types/auth"

const BASE_URL = "http://localhost:3000/api/v1/user"

export const signup = async (data: SignupData) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  })

  return res.json()
}

export const login = async (data: LoginData) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  })

  return res.json()
}
