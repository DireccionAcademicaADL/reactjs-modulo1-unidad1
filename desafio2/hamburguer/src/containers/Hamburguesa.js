import React from 'react';
import Pan from '../components/Pan';
import Rellenos from '../components/Rellenos';
import Salsas from '../components/Salsas';
import SalsasMapper from '../components/SalsasMapper';
import { Container, Header, Input, Button } from "../styles/global";

class Hamburguesa extends React.Component {

    state = {
        salsas: [],
        inputValue: ""
    }
    mostrarSalsas(){

    }

    handleInputChange(event){
            this.setState({inputValue: event.target.value});
    }

    addSalsa(name){
        if(name.length > 2){
        this.setState({salsas: [...this.state.salsas, name]});
        }else{
            alert("Debes ingresar el nombre de una salsa.");
        }
    }

    render(){

        return(
            <Container>
                <Header>
                <Input 
                type="text" 
                name="name"
                value={this.state.inputValue}
                onChange={(e) => this.handleInputChange(e)}
                />
                <Button onClick={() => this.addSalsa(this.state.inputValue)}>Agregar salsa</Button>
                </Header>

                <Pan>
                    <Rellenos title="RELLENOS">
                    <p className="Relleno">Carne 150gr</p> 
                    <p className="Relleno">Lechuga</p>
                    <p className="Relleno">Tomate</p>
                    <p className="Relleno">Pepinillo</p>
                    </Rellenos>

                    <SalsasMapper>
                        <Salsas title="SALSAS">
                        {this.state.salsas.map(function(salsa, i){
                        return(
                            <p id={i}>{salsa}</p>
                        )
                        })}
                        </Salsas>
                    </SalsasMapper>
                </Pan>
            </Container>
        );
    }
}

export default Hamburguesa;