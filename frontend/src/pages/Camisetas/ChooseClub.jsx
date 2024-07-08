import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
import { AuthContext } from '../../context/AuthContext';
import { Carrousel } from '../../components';
import { Link } from 'react-router-dom';


const ChooseClub = () => {
    const [clubes, setClubes] = useState([]);
    const [loading, setLoading] = useState([]);
    const {auth, logoutUsuario  } = useContext (AuthContext)
    const [error, setError] = useState("")
  
useEffect (() => {
    setLoading(true)
    axios.get("http://localhost:3000/clubes", {headers: {'auth': auth}})
    .then((response) => {
        setTimeout(() => {
            setLoading(false)
            setClubes(response.data)
        }, 2000)
    })
    .catch((error) => {
        setLoading(false) 
        setError(error.response.data.message)  
    }) 
},[])  
 
    return (

    <>

<div className="container bg-futbol">
    <div className=" d-flex justify-content-center p-5">
    <div>
        <h2 className="text-center mb-5 fs-1 fw-bold"> Elegí un Club </h2>
        <div className="row mb-3 g-3">

            {
                loading ?
            (
                <ClipLoader
                color="#000"
                loading={loading}
                />
            ) 
            :   
            clubes.map(club => (
                
            <div key={club._id} className="col-6 col-md-4 col-lg-2">
                <div className="card rounded">
        
                <Link  className="btn boton-club" to={`/camisetas/create/${club._id}`}>

                <p className='fs-4'> {club.nombre} </p>

                {/* <img src={`./img/escudos/${club.imagen}`} className="card-img-top" alt={`Imagen de camiseta de ${club.nombre}`}/>  */}

                </Link>

                </div>

            </div>

            ))
            }
     
        </div>
    </div>
    </div>

    <div class="text-center">
        <Link  className="btn bg-boton m-5 w-50 fw-bold " to="/camisetas"> <a> REGRESAR A CAMISETAS </a> </Link>  
    </div>

</div>

    </>
  )
}

export {ChooseClub}