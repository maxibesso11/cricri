import {Component} from "react";
import {Col} from "reactstrap";
import "../../index.js";

class Member extends Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.name = props.name;
        this.rule = props.rule;
        this.size = props.size;
    };
    render(){
        return(
            <Col sm="12" md={this.size || "3"}>
                            <div style={{margin:"10px 0px",width:"100%",height:"370px"}}>
                               
                            <img src={this.img} className="who-img" />
                            <h3 className="who-txt" style={{marginTop:"5px"}}>{this.name} </h3>
                                <h5 className="who-txt">{this.rule}</h5>
                            </div>
                        </Col>
        );
    };
};



export default Member;