import { Component } from "react";
import Incrementador from "./home";

class IncrementadorMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 68
        }
    }
    sumar = (sumatotal) => {
        this.setState({ total: this.state.total + sumatotal });
    }
    render() {
        return <div><p>Contador general: {this.state.total}</p>
            <div className="boxa">
                <Incrementador parentCallback={this.sumar} valorinicial={10}></Incrementador>
                <Incrementador parentCallback={this.sumar} valorinicial={20}></Incrementador>
                <Incrementador parentCallback={this.sumar} valorinicial={33}></Incrementador>
                <Incrementador parentCallback={this.sumar} valorinicial={5}></Incrementador>
            </div></div>
    }
}
export default IncrementadorMain;