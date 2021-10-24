import {Component} from "react";
import {Container,Row,Col} from "reactstrap";
import "../index.js";

import { fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
 
const styles = StyleSheet.create({
  bounce: {
    animationName: fadeInUp,
    animationDuration: '2s'
  }
})

class Banner extends Component{
    render(){
        return(
            <div className="c2">
            <Container >
                <Row >
                    <Col xs="12" sm="12" md="7" lg="7">
                        <div className="h1-ct">
                            <h1 style={{fontFamily:"Concert One",fontSize:"50px"}}>Bienvenidos a CriCri. 
                            <br/>
                             Encuentre aqui los mejores sahumerios artesanales. </h1>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="5" lg="5" style={{minHeight:"500px"}}>
                        <img style={{margin:"auto",width:"92%",height:"90%",objectFit:"contain"}} src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/350/000000/external-incense-sleep-photo3ideastudio-lineal-color-photo3ideastudio.png"/>
                    </Col>
                </Row>
            </Container>
            </div>
            
        )
    }
}

export default Banner;