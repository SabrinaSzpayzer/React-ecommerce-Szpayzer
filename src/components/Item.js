import React from 'react'
import ItemCount from './ItemCount'
import './css/Item.css'

function Item ( {dataItem} ) {
    const { id, title, price, stock, image } = dataItem

    return (
        <div className="card">
            <img src={`./${image}`} alt={title}></img>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <ItemCount stock = {stock} initial = {1}/>
            </div>
        </div> 
    )
}

export default Item;