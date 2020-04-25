import React from 'react';
import Hijo from './Hijo';

class FormEj extends React.Component {

    constructor(props) {
        super(props);
    }

    muestro(val) {
        console.log(val)
    }

    render() {
        return (
            <div>
                <h1>{this.props.nombre}</h1>
                <br />
                <Hijo funcionInvokeParent={this.muestro.bind(this)}></Hijo>
            </div>
        );
    }
}
export default FormEj;