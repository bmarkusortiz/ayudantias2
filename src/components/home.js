import React, { Component} from "react";

class Incrementador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuentaactual: this.props.valorinicial,
            incremento: 0,
            classDiv: 'box'
        }
    }
    upNumber = () => {
        this.setState({cuentaactual: this.state.cuentaactual + this.state.incremento});
    }
    inPut =(evt) => {
        const value = parseInt(evt.target.value);
        if (value>10){
            this.setState({classDiv:'boxRed'});
        }
        this.setState({incremento: value});
    }
    onSubmit = (e) => { 
        e.preventDefault();
        this.setState({cuentaactual: this.state.cuentaactual + this.state.incremento});
        this.props.parentCallback(this.state.incremento);
    }
    render(){
        const { valorinicial } = this.props;
        return <div>
<form className={this.state.classDiv}>
  <label>Valor Inicial : {valorinicial}</label>
  <label>Cuenta Actual : {this.state.cuentaactual}</label>
  <input type="number" onChange={evt => this.inPut(evt)} name="numero" />
  <button onClick={this.onSubmit}>Aumentar</button>
  </form>
        </div>
    }
}
export default Incrementador;