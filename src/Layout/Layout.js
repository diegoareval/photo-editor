import React from 'react'

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
