import React from 'react';

class StorePicker extends React.Component {

    render() {
        return  (
        <React.Fragment>
        <form className="store-selector">
            <h2>Please Enter A Store</h2>
            <input type='text' require placeholder="Store Name"/>
            <button type='submit'>Visit Store &#8594;</button>
        </form>
        </React.Fragment>
        )
    }
}

export default StorePicker;