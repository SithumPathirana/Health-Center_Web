import React,{Component} from 'react'

class IconBox extends Component{
   render(){
       return  <div className="col-xl-4 col-lg-6">
           <div className="icon_box">
               <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                   <div className="icon_box_icon"><img src="images/icon_1.svg" alt=""/></div>
                   <div className="icon_box_title">Cardiology</div>
               </div>
               <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
           </div>
       </div>;
   }
}

export default IconBox