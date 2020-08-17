import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      //active: false,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      cellNumber: props.cellNumber,
      rowNumber: props.rowNumber,
      columnNumber: props.columnNumber
    };
  }
  select = () => {
  }
  handleKeyPress = (event) => {
    this.setState({content: event.key})
  }
  handleKeyDown = (event) => {
    if(event.key === "Backspace"){
      this.setState({content: ""})
    }
  }
  render(){
    var classes = 'sudoku_cell'
    switch(this.state.rowNumber){
      case 1:
        classes += ' sudoku_cell_top'
        break;
      case 9:
        classes += ' sudoku_cell_bottom'
        break;
      default:
        break;
    }
    switch(this.state.columnNumber){
      case 1:
        classes += ' sudoku_cell_left'
        break;
      case 9:
        classes += ' sudoku_cell_right'
        break;
      default:
        break;
    }
    return (
      <div 
        onClick={this.select}
        onKeyPress={this.handleKeyPress}
        onKeyDown={this.handleKeyDown}
        className={classes}
        tabIndex="0"
        >
          <span className="sudoku_cell_value">
            {this.state.content}
          </span>
      </div>
    );
  }
}

class Row extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rowNumber: 1
    };
  }
  render(){
    const myStyle = {
      display: "flex",
      alignItems: "stretch"
    };
    const cells = []
    for(var i = 1; i<10; i++){
      cells.push(<Cell cellNumber={i+(this.state.rowNumber*9)} rowNumber={this.state.rowNumber} columnNumber={i} />)
    }
    return(
      <div style={myStyle}>
        {cells}
      </div>
    )
  }
}

export {
    Cell,
    Row,
}