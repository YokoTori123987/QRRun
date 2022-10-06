import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })
    // console.log(response.data)
    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    E-mail
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'E-mail is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />

                  <Label
                    name="first_name"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    FirstName
                  </Label>
                  <TextField
                    name="first_name"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'FirstnName is required',
                      },
                    }}
                  />

                  <FieldError name="first_name" className="rw-field-error" />
                  <Label
                    name="last_name"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    LastName
                  </Label>
                  <TextField
                    name="last_name"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'LastName is required',
                      },
                    }}
                  />

                  <FieldError name="last_name" className="rw-field-error" />
                  <Label
                    name="gender"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Gender
                  </Label>
                  <TextField
                    name="gender"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Gender is required',
                      },
                    }}
                  />

                  <FieldError name="gender" className="rw-field-error" />
                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
