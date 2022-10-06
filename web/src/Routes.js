// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import UsersLayout from 'src/layouts/UsersLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />

        <Private unauthenticated="HomePage" roles="user">
          <Route path="/about" page={AboutPage} name="about" />
        </Private>
        <Private unauthenticated="HomePage" roles="admin">
          <Set wrap={UsersLayout}>
            <Route path="/users/new" page={UserNewUserPage} name="newUser" />
            <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
            <Route path="/users/{id}" page={UserUserPage} name="user" />
            <Route path="/users" page={UserUsersPage} name="users" />
          </Set>
        </Private>
        <Route notfound page={NotFoundPage} />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
    </Router>
  )
}

export default Routes
