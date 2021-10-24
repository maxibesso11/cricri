import {Component} from "react";
import {Container,Row,Col} from "reactstrap";
import "../index.css";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description:"",
            open:false,
        };

    }
    render(){
        return ( 
            <div className="c1">
                <Container>
                    <Row>
                        <Col xs="12" >
                          <div style={{textAlign:"center",padding:"40px 0"}}>
                          <h1 style={{textAlign:"center",color:"white",fontFamily:"Concert One",margin:"25px",color:"#383E56"}}>Estas interesado en alguno de nuestros productos?</h1>
                            <a style={{backgroundColor:"#383E56",padding:"15px 30px",display:"inline-block",marginTop:"-10px",
                          borderRadius:"7px",fontWeight:"500",color:"white",fontSize:"18px"}} href="https://instagram.com">Contactenos</a>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default Contact;