import React from 'react';
//import ReactDOM from 'react-dom';

class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {cellNumber: props.cellNumber };
  }
  select = () => {
    this.setState({active: !this.state.active})
  }
  render(){
    const myStyle = {
      backgroundColor: "white",
      width: "30px",
      height: "30px",
      borderStyle: "solid"
    };
    var active = null;
    if(this.state.active === true){
      active = "active";
    }
    return (
      <div 
        style={myStyle} 
        onClick={this.select}
        className={active}
        >
      </div>
    );
  }
}


export {
    Cell,
}