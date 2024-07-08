import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {usuario, logoutUsuario} = useContext(AuthContext)
  return (


<div className="container nav-futbol border border-top-0 border-end-0 border-start-0 border-2 border-black text-end">
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
   <a className="navbar-brand" href="/">
    <img  className="d-none d-md-block d-lg-none img-fluid px-2" src="img/logos/logo.png" alt="Pelota del Logo de El Sueño del Futbolero"/>
            <img  className="d-none d-lg-block img-fluid px-2" src="img/logos/logohorizontal.png" alt="Logo El Sueño del Futbolero Horizontal" />
            <h1 className="d-md-none px-3 fs-4 ">El Sueño del Futbolero </h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
      {
          usuario ?

            (<>

              <li className="nav-item">
              <Link to="/clubes" className="nav-link fw-bold fs-5">Clubes</Link>
              </li>

              <li className="nav-item">
              <Link to="/camisetas" className="nav-link fw-bold fs-5">Camisetas</Link>
              </li>

              <li className="nav-item">

              <Link className="btn btn-danger me-2 fw-bold" onClick={() => logoutUsuario()} to="/login"> Cerrar Sesion: <span className="fw-light">{usuario?.nombre_usuario ?  usuario?.nombre_usuario : " "}</span></Link>
            
              </li>
            </>)
          :          
            (<> 

            </>)
        }




        
      </ul>
    </div>
  </div>
  </nav>
  </div>

  


        

 
  )
}

export {Navbar}