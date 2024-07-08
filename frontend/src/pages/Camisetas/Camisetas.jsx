import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
import { AuthContext } from '../../context/AuthContext';
import { Carrousel } from '../../components';
import { Link } from 'react-router-dom';


const Camisetas = () => {
    const [camisetas, setCamisetas] = useState([]);
    const [loading, setLoading] = useState([]);
  
    const {auth, logoutUsuario  } = useContext (AuthContext)
 
useEffect (() => {
    setLoading(true)
    axios.get("http://localhost:3000/camisetas", {headers: {'auth': auth}})
    .then((response) => {
        setTimeout(() => {
            setLoading(false)
            setCamisetas(response.data)
        }, 2000)
    })
    .catch((error) => {
        setLoading(false)  
        setError(error.response.data.message)
    }) 
},[])  

    return (

    <>
    <Carrousel/>
    <div className="container bg-futbol">
    <div className=" d-flex justify-content-center p-5">
    <div>
        <h2 className="text-center mb-5 fs-1 fw-bold">Encontrá lo que Buscás </h2>
        <h3 className= "fs-2 fw-bold">Buscá tu Equipo</h3>
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
           camisetas.map(camiseta => (

            <div key={camiseta._id} className="col-12 col-md-4 col-lg-3 ">
            <div className="card rounded mb-3 container-camiseta ">
            <img src={`img/camisetas/${camiseta.imagen}`} className="card-img-top" alt={`Imagen de camiseta de ${camiseta.nombre}`}/>
            <div className="card-body">
                <p className="fs-6 m-0 fw-bold text-success">{camiseta.modelo} - {camiseta.modelo} </p>
            </div>
            <div className="card-body ">
                <div className="fs-3 mb-3 fw-bold text-center "> $ {camiseta.precio}</div>
                <div className="text-center">
                <Link  className="btn bg-boton w-100 fw-bold " to={`/camisetas/buscar_id/${camiseta._id}`}> <a> VER PRODUCTO</a> </Link>  
                </div>
            </div>
            </div>
            </div>
           ))
        }
        </div>
        </div>
    </div>

    <div className="text-center">
        <Link  className="btn bg-boton m-5 w-50 fw-bold " to="/camisetas/create"> <a> CARGAR NUEVA CAMISETA </a> </Link>  
    </div>

    </div>

    </>
  )
}

export {Camisetas}