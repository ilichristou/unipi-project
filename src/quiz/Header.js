import React from 'react'
import './styles.css'

const  header = (props) => {

    return (
        <div>
            <div className="header">
                Current User: <span>{props.username}</span>
            </div>
        </div>
    )
}

export default header