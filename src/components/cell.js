import React from 'react';
import './cell.css';

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
      case 3:
      case 6:
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
        case 3:
        case 6:
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

export default Cell