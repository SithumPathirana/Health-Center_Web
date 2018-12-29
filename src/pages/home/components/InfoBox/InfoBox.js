import React,{Component} from 'react'

class InfoBox extends Component{
   constructor(props){
      super(props)
      this.state={
         title:this.props.title,
         description:"" ,
         imageSrc:this.props.imageSrc
      }
   }

   render(){
       return <div className="col-lg-4 info_box_col">
       <div className="info_box">
           <div className="info_image"><img src={require('../../../../resources/images/info_1.jpg') } alt=""/></div>
           <div className="info_content">
               <div className="info_title">{this.state.title}</div>
               <div className="info_text">Arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.</div>
               <div className="button info_button"><a href="#"><span>read more</span><span>read more</span></a></div>
           </div>
       </div>
   </div>;
   }
}

export default InfoBox