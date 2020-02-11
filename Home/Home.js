import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(){
        super();
        console.log("in constructor")
    }
    incrementCount=() => {
        let count=this.state.click
        this.setState({click_count: count+1})
      }
      resetCount=() => {
          let count=this.state.click
          this.setState({click_count: 0})
      }
     render(){
        return(
            <div> I am in  inside Home page
            <div>
                <Link to={{ pathname:'/profile',     
                prof_count:this.state.click_count}}>prof
                </Link>
                </div>
                <div>
                   <button>onClick={this.countNo}
                   countNo()
                </div>
                </div>
        )
    }
}