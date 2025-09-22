'use client'
import React from "react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const handleLogin = (values: {
    email: string
    password: string
  }) => {
    // Handle login logic here
    console.log("Login data:", values)
    // You can add your login logic here, e.g., API call to your backend
  }

  return (
    <AuthLayout>
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  )
}
