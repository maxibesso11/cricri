import {Component} from "react";
import {Col,Row,Container} from "reactstrap";
import "../index.css";

class Footer extends Component{
    render(){
        return(
         <>
        <div className="c3">
            <div className="container py-5">
                <div className="row py-3">
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Navegacion</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#" className="text-muted">Quienes Somos?</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Nuestros roductos</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Como trabajamos?</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Volver arriba</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Nuestras redes</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#" className="text-muted">Facebook</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Instagram</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Whatsapp</a></li>
                        </ul>
                    </div>
                  
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Nuestra Organizacion</h6>
                        <p className="text-muted mb-4">Por atencion al cliente, encuentranos de lunes a viernes en Sarmiento 270 de 7:20 a 2:30, Villa Dolores (Cba)</p>
                    </div>
                </div>
            </div>
            <p style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,0,.1)"}}></p>
            <div className="c3 py-2">
                <div className="container text-center">
                    <p className="text-muted mb-0 py-2">© 2021 Cri Cri SC.</p>
                </div>
            </div>
        </div>
         </>
        );
    };
};

export default Footer;