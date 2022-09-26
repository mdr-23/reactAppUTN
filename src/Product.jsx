import React,{Component} from 'react';

class Product extends Component{
    render(){

        const titulo = "Cementerio de animales"
        const detalle = "Edición en tapas duras. Año 1994."
        const precio = "$8500"
        const sku = 23119292
        const stock = 1

        return(
            <>

                <div>
                    <h1>{titulo}</h1>
                    <p>{detalle}</p>
                    <p>Precio: {precio}</p>
                    <p>SKU: {sku}</p>
                    <p>Cantidad en stock: {stock}</p>
                </div>

            </>
        )
    }
}

export default Product