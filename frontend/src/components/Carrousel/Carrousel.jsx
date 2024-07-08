import React from 'react'

const Carrousel = () => {
  return (
 
        
    <div className="container bg-futbol">
    <div id="carouselNovedades" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="img/banners/bannerbocadefinitivo.jpg" className="d-block w-100" alt="Banner promocionando nueva camiseta de Boca Juniors"/>
      </div>
      <div className="carousel-item">
        <img src="img/banners/bannerargentina.jpg" className="d-block w-100" alt="Banner promocionando nueva camiseta de Argentina"/>
      </div>
      <div className="carousel-item">
        <img src="img/banners/bannerrealmadrid2.jpg" className="d-block w-100" alt="Banner promocionando nueva camiseta de Real Madrid"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselNovedades" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselNovedades" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
  </div>

 
  )
}

export  {Carrousel}