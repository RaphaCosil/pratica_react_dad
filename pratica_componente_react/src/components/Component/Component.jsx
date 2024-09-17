import React from 'react'

import "./Component.css"

export default function Component(title, img) {  
    return (
        <div id="allDiv">
            <div>
                <img id="img" src={img}/>
            </div>
            <div>
                <h2 id="sectionTitle">{title}</h2>
                <p id="sectionPricePerKg">1kg/Preço</p>
                <h2 id="sectionPrice">R$ 000.000</h2>
            </div>
            <div>
                <button className="btnBuy">
                    <img src='pratica_react_dad/pratica_componente_react/src/assets/Vector.svg'/>
                </button>
            </div>
        </div>
    )
}