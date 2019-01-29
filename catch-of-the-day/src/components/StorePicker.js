import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (e) => {
        e.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return  (
        <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input type='text' 
            required 
            placeholder="Store Name"
            ref={this.myInput} 
            defaultValue={getFunName()}/>
            <button type='submit'>Visit Store &#8594;</button>
        </form>
        </React.Fragment>
        )
    }
}

export default StorePicker;