import { useState } from 'react'

import QRCode from 'qrcode.react'
// import QRCode from 'react-qr-code'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  const [qrValue, setQrValue] = useState('jeftar')
  const downloadQRCode = () => {
    setQrValue(currentUser.id)
    // Generate download with use canvas and stream
    const canvas = document.getElementById('qr-gen')
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')

    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = `${qrValue}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    console.log(pngUrl)
  }
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
            id="qr-gen"
            value={currentUser.id}
            renderAs="png"
            size={290}
            level={'H'}
            includeMargin={true}
          />
          <button type="button" onClick={downloadQRCode}>
            Download QR Code
          </button>
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
