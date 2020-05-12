import React, { Component } from 'react'

export class AutoCompleteText extends Component {
    constructor(props) {
        super(props)
             this.items = [
                 'Bill',
                 'Cosby',
                 'Dude',
                 'Katlin',
                 'Barron',
                 'Carrol',
                 'Zacharia',

             ];
             this.state = {
                 names: [],
                 text: ''
             };
        
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let names = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            names = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ names, text: value }));
    }

    renderNames () {
        const { names } = this.state;
        if (names.length === 0) {
            return null;
        }
        return (
            <ul>
                {names.map((item) => <li onClick={() => this.namesSelected(item)}>{item}</li>)}
            </ul>

        );
    }

    namesSelected (value) {
        this.setState(() => ({
            text: value,
            names: [],
        }))
    }
    
    render() {
        const { text } = this.state;
        return (
            <div className="form-group">
            <label>Search here....</label>
            <input className="form-control" value={text} onChange={this.onTextChanged}type="text" />
            {this.renderNames()}
                
            </div>
        )
    }
}

export default AutoCompleteText
