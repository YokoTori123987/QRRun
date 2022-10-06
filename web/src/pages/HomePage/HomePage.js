import QRCode from 'react-qr-code'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      {isAuthenticated && (
        <>
          <QRCode
            value={currentUser.id}
            renderAs="svg"
            style={{
              width: '80vmin',
              height: '80vmin',
            }}
          />
        </>
      )}
      <div></div>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
