# Auth Components

This directory contains reusable authentication components for the DesignUpp application.

## Components

### AuthLayout
A two-column layout component that provides the marketing/branding section on the left and the auth form on the right.

### Logo
The DesignUpp logo component with abstract icon and text. Supports two variants:
- `default`: Full logo with "DesignUpp" and "Admin" text
- `compact`: Compact version with just "DesignUpp"

### SignupForm
A complete signup form with validation using React Hook Form and Zod. Includes:
- Full name field
- Email address field
- Password field
- Confirm password field
- Google signup option
- Form validation
- Link to login page

### LoginForm
A complete login form with validation. Includes:
- Email address field
- Password field
- Remember me checkbox
- Forgot password link
- Google signin option
- Link to signup page

### GoogleButton
A reusable button component for Google authentication with the official Google logo.

## Usage

```tsx
import { AuthLayout, SignupForm, LoginForm } from "@/components/auth"

// Signup page
export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm onSubmit={handleSignup} />
    </AuthLayout>
  )
}

// Login page
export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  )
}
```

## Routes

- `/auth` - Redirects to `/auth/login`
- `/auth/login` - Login page
- `/auth/signup` - Signup page

## Styling

The components use Tailwind CSS with custom CSS classes defined in `globals.css`:
- `.auth-gradient` - Gradient background for the left column
- `.auth-pattern` - Subtle pattern overlay

All components are fully responsive and follow the design system shown in the mockup.
