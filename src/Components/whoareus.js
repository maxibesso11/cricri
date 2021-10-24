import {Component} from "react";
import {Row,Container,Col} from "reactstrap";
import Member from "./Pre-components/member";
import "../index.css";

class Whoareus extends Component{
    render(){
        return(
            <div className="c3" style={{paddingBottom:"15px"}}>
                <Container>
                    <Row>
                        <Col sm="12"> 
                        <h1 className="title-pre-bar">Quienes Somos?</h1>
                        <div className="simple-bar"></div>
                        </Col>

                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>
                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>
                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>
                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>

                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>
                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>
                        <Member size="3" img="https://i.ibb.co/Mk3Pg0Z/Image.png" name="Maxi" rule="Admin"/>
                        
                        

                      
                    </Row>
                </Container>
            </div>
        );
    };
};

export default Whoareus;