import React,{Component} from 'react';
import Twitter from 'twitter';
export default class TwitterApi extends Component{
  constructor(){
    super();
    this.state={
      search_text:'',
    }
  }

inputChange(changeValue){        
  this.setState(
	{
     search_text:changeValue.target.value
    });
  console.log("Change Value"+this.state.search_text);
 }
  render(){
    //       twitter.getSearch({'q':'#haiku','count': 10}, error, res).then((res) => {
    //       console.log("here is the responce"+JSON.stringify(res));
    //   })
          
   return(
     <div>
      <input type="text" value={this.state.search_text} onChange={this.inputChange.bind(this)}/>
    </div>    
   
   )}
}