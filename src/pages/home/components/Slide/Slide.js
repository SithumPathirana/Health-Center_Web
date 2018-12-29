import React,{Component} from 'react'

class Slide extends Component{
    render(){
        return <div className="owl-item dept_item">
        <div className="dept_image"><img src={require('../../../../resources/images/dept_1.jpg')} alt=""/></div>
        <div className="dept_content">
            <div className="dept_title">Neonatology</div>
            <div className="dept_link"><a href="#">Read More</a></div>
        </div>
    </div>;
    }
}

export default Slide