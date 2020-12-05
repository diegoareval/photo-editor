import { Button } from 'react-bootstrap'
import React from 'react'
import "../Home/HomePage.css"

const Layout = ({children, saveImageToDisk}) => {
    return (
<div className="home-page">
      <div className="center">
        <h1>Editor Prueba</h1>
        <Button className="button" onClick={saveImageToDisk}>
          Guardar Imagen
        </Button>
      </div>
      {children}
    </div>
    )
}

export default Layout
