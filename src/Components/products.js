import {Component} from "react";
import {Container,Row,Col} from "reactstrap";
import "../index.css";
import "./product.css";

class Products extends Component{
    render(){
        return(
            <div className="c4">
                <Container fluid>
                   <Row>
                       <Col sm="12">
                       <h1 className="title-pre-bar-2">Nuestros Productos </h1>
                       </Col>
                    </Row>

                    <Row>
                        <Col sm="12" md="6">
                            <div style={{height:"300px",width:"100%",backgroundColor:"white",padding:"10px",borderRadius:"4px"}}>
                                <Row style={{height:"100%"}}>
                                <Col sm="6">
                                <img style={{height:"100%",width:"100%"}} src="https://i.ibb.co/9tP1sKZ/D-NQ-NP-978874-MLA46245931892-062021-O.png" alt="D-NQ-NP-978874-MLA46245931892-062021-O" border="0"/>
                                </Col>
                                <Col sm="6">
                                        <h3 style={{fontFamily:"Nunito"}}>Pack de sahumerios artesanales</h3>
                                    <div style={{display:"block",width:"80px",height:"5px",backgroundColor:"#FB743E",margin:"8px auto",borderRadius:"2px"}}></div>
                                    <p style={{fontFamily:"Nunito"}}> Sahumerios artesanales de la mejor calidad hechos con productos totalmente naturales, con las mejores fragancias.</p>

                                </Col>
                                </Row>
                                
                            </div>   
                            <br></br>
                        </Col>
                        <Col  sm="12" md="6">
                            <div style={{ height: "300px", width: "100%", backgroundColor: "white", padding: "10px", borderRadius: "4px" }}>
                                <Row style={{ height: "100%" }}>
                                    <Col sm="6" style={{height:"100%"}}>
                                        <img style={{ height: "100%", width: "100%" }} src="https://i.ibb.co/N9m8ss2/D-NQ-NP-776513-MLA47144819316-082021-O.png" alt="D-NQ-NP-776513-MLA47144819316-082021-O" border="0" />
                                    </Col>
                                    <Col sm="6">
                                        <h3 style={{ fontFamily: "Nunito" }}>Porta sahumerios artesanal</h3>
                                        <div style={{ display: "block", width: "80px", height: "5px", backgroundColor: "#FB743E", margin: "8px auto", borderRadius: "2px" }}></div>
                                        <p style={{ fontFamily: "Nunito" }}> Sahumerios artesanales de la mejor calidad hechos con productos totalmente naturales, con las mejores fragancias.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>    
                </Container>
                <br></br>
            </div>
        );
    };
};

export default Products;