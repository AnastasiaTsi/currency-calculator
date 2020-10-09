import React from "react";

export default class row extends React.Component {
    
    
    render(){
        
    return (
        <div id = "floatCell">
            <div id = "inCell">
                {this.props.name} 

         
                <input type = "number" className = "input" value={this.props.number} onChange={this.props.onChangeNumber}/>
                <select  onChange={this.props.onChange}>
                    {this.props.currencyOption.map(option => (
                            <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
      );
    };
}