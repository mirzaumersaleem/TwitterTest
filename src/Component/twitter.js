import React,{Component} from 'react'
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
   return(
     <div>
      <input type="text" value={this.state.search_text} onChange={this.inputChange.bind(this)}/>
    </div>    
   
   )}
}