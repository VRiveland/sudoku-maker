import React from 'react';
import Cell from './cell.js';
import './row.css';

class Row extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {
            rowNumber: props.rowNumber,
        };
    }
    render(){
        const cells = []
        for(var i = 1; i<10; i++){
            var boxNumber = 0
            if (this.state.rowNumber < 4){
                if(i<4){
                    boxNumber = 1
                }else if(3<i && i<7){
                    boxNumber = 2
                }else{
                    boxNumber = 3
                }
            }else if(3<this.state.rowNumber && this.state.rowNumber<7){
                if(i<4){
                    boxNumber = 4
                }else if(3<i && i<7){
                    boxNumber = 5
                }else{
                    boxNumber = 6
                }
            }else{
                if(i<4){
                    boxNumber = 7
                }else if(3<i && i<7){
                    boxNumber = 8
                }else{
                    boxNumber = 9
                }
            }
            cells.push(<Cell cellNumber={i+(this.state.rowNumber*9)} rowNumber={this.state.rowNumber} columnNumber={i} boxNumber={boxNumber} />)
        }
        return(
            <div className="row">
                {cells}
            </div>
        )
    }
}

export default Row