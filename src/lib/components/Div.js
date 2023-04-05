import React from 'react';


const Div = (props) => {

    let custom = {
        margin: '40px',
        color:'red',
        width:'400px',
        height:'400px',
        backgroundColor:'yellow'
    }

    if(props.chosenStyle.toString().includes('one')){
        custom = {
            margin: '40px',
            color:'red',
            width:'400px',
            height:'400px',
            backgroundColor:'brown'
        }
    }
    else if(props.chosenStyle.toString().includes('two')){ 
        custom = {
            margin: '40px',
            color:'red',
            width:'400px',
            height:'400px',
            backgroundColor:'purple'
        }
    }
    else{}
   


    return (
        <div style={custom}> 
            <h4>{props.label}</h4>
        </div>
    )
}
export default Div;