import React from 'react';

class Hijo extends React.Component{

    constructor(props){
        super(props);
    }

    invokeParent(){
        this.props.funcionInvokeParent("hola desde el hijo");
    }

    render(){
        return(
            <div>
                <button onClick={this.invokeParent.bind(this)}>Press</button>
            </div>
        );
    }
}

export default Hijo;