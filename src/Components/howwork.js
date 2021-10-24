import {Component} from "react";
import {Container,Row,Col} from "reactstrap";
import "../index.css";

class HowWeWork extends Component{
    render(){
        return(
            <Container>
                <br></br>
                <Row>
                    <Col sm="12" md="6">
                    <h1 style={{textAlign:"center",color:"grey",fontSize:"Concert One"}}>Como trabajamos?</h1>
                    <p  style={{color:"grey",fontSize:"Concert One",fontWeight:"500"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend ullamcorper risus ac congue. Praesent ac bibendum arcu, et aliquet risus. Fusce porttitor, nibh id luctus interdum, libero sem suscipit augue, id dignissim nisi ipsum in augue. Mauris in eleifend nulla, vitae gravida leo. Vivamus lacinia vel mi quis eleifend. Sed et nisl consequat lorem lacinia aliquam. Vivamus ut convallis felis. Nulla leo risus, volutpat accumsan arcu sed, dictum mattis nisl. Vestibulum metus sapien, eleifend non tortor scelerisque, gravida cursus tellus. Quisque mi urna, fermentum quis dignissim id, consectetur vitae tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat risus ut neque porttitor condimentum. Suspendisse condimentum tellus non ante porta, a ultricies nunc tincidunt. Duis fermentum mauris quis nibh blandit, non pellentesque justo porta. Proin mauris risus, consectetur ut ipsum vel, dictum tempus magna.
                    </p>
                    </Col>
                    <Col sm="12" md="6">
                        <div style={{width:"100%",height:"400px",padding:"20px 10px"}}>
                        <img style={{objectFit:"cover",display:"block",width:"100%",height:"100%",borderRadius:"10px"}} src="https://i.ibb.co/6NV35yj/images.jpg" alt="images" border="0"/>
                        </div>
                    </Col>
                    </Row>
            </Container>

        );
    };
};

export default HowWeWork;