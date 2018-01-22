import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 

class Question extends Component {
    state = {
        
    };

    render () {

        return (
            <div className="form-group">
            <h1 className="questions">{this.props.questionTitle}</h1>						  
                <select className="form-control" id="quest1">
                    <option value="1">{this.props.option1}</option>
                    <option value="5">{this.props.option2}</option>
                    <option value="10">{this.props.option3}</option>
                    <option value="15">{this.props.option4}</option>
                </select>								
            </div>
        );
    }
        
}

export default Question; 