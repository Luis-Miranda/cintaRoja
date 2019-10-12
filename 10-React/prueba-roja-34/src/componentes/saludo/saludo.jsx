import React, { Component } from 'react'

export class saludo extends Component {

    saludoTriple(){
        const arr = [10,20,30];
        return arr.map(number => <h1>Este es el saludo número {number}</h1>)
    }

    render() {
        return (
            <div>
                <h1>Hola</h1>
            </div>
        )
    }
}

export default saludo
