import React from 'react';

export default class CardClass extends React.Component {
constructor(props){
    super(props)
}

render(){
        return(
            <div className="card-med">
                <h2>{this.props.title}</h2>
                <p>Precio: ${this.props.precio}</p>
                <p>Talle: {this.props.talle}</p>
                <button>Comprar</button>
            </div>
        )
    }
}