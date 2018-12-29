import React,{Component} from 'react'

class InfoForm extends Component{
    render(){
        return  <div className="col-lg-4 info_box_col">
        <div className="info_form_container">
            <div className="info_form_title">Make an Appointment</div>
            <form action="#" className="info_form" id="info_form">
                <select name="info_form_dep" id="info_form_dep" className="info_form_dep info_input info_select">
                    <option>Department</option>
                    <option>Department</option>
                    <option>Department</option>
                </select>
                <select name="info_form_doc" id="info_form_doc" className="info_form_doc info_input info_select">
                    <option>Doctor</option>
                    <option>Doctor</option>
                    <option>Doctor</option>
                </select>
                <input type="text" className="info_input" placeholder="Name" required="required"/>
                <input type="text" className="info_input" placeholder="Phone No"/>
                <button className="info_form_button">make an appointment</button>
            </form>
        </div>
    </div>;
    }
}

export default InfoForm