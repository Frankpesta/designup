'use client'
import React from "react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  const handleSignup = (values: {
    fullName: string
    email: string
    password: string
    confirmPassword: string
  }) => {
    // Handle signup logic here
    console.log("Signup data:", values)
    // You can add your signup logic here, e.g., API call to your backend
  }

  return (
    <AuthLayout>
      <SignupForm onSubmit={handleSignup} />
    </AuthLayout>
  )
}
