import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ({item}) {
    const {title, price, stock, description, picture, picture1, picture2, picture3, picture4, alt} = item

    function Agregar (counter) {
        counter > {stock}
        ? alert('No tenemos stock suficiente')
        : alert('Añadido al carrito');
    }

    return(
        <div className='item-detail'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={picture} className="d-block w-100" alt={alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={picture1} className="d-block w-100" alt={alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={picture2} class="d-block w-100" alt={alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={picture3} className="d-block w-100" alt={alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={picture4} className="d-block w-100" alt={alt} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='item-detail-info'>
                <h2 className='item-detail-title'>{title}</h2>
                <h3 className='item-detail-price'>${price}</h3>
                <p className='item-detail-description'>{description}</p>
                <div>
                    <ItemCount stock={stock} initial={0} onAdd={Agregar} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;