import React, { Component } from 'react'

export default class SearchPanel extends Component{
    render() {
        return(
            <div>
                <input placeholder="Add new element" type = "text"/>
                <button>addEl</button>
            </div>
        )
    }
};