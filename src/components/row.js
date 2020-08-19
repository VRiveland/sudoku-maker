import React from 'react';
import Cell from './cell.js';

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

  export default Row