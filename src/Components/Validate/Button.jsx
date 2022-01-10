import React from 'react'
import checkButton from './media/checkButton.png'

export default function Button() {
    return (
        <div style={buttonStyle}>
            <div style={display:flex}>
                <img
                style={imgStyle},

            </div>
            
        </div>
    )
}

const buttonStyle = {
    backgroundColor:rgba(109, 209, 166, 1),
    borderRadius:50,
}

const titleStyle = {
    
}

const imgStyle = {
    marginTop:17,
    marginLeft:39,
    width:10.5,
    height:7,
}