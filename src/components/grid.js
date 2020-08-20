import React from 'react';
import Row from './row.js';

class Grid extends React.Component{
    render(){
        const rows = []
        for(var i = 1; i<10; i++){
            rows.push(<Row rowNumber={i} />)
        }
        return(
          <div id="grid">
            {rows}
          </div>
        )
    }
}

export default Grid