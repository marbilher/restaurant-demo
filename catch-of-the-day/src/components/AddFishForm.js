import React from 'react';
 
class AddFishForm extends React.Component {
    constructor(props){
        super(props);

        this.createFish = this.createFish.bind(this);
    }


    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        event.preventDefault();
        
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className='fish-edit' onSubmit={this.createFish}>
                <input ref={this.nameRef} name='name' type='text' placeholder='Name'/>  
                <input ref={this.priceRef} name='price' type='text' placeholder='Price' /> 
                <select ref={this.statusRef} name='status'>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out!</option>
                </select>
                <input name='desc' ref={this.descRef} type='text' placeholder='Desc'  />
                <textarea name='image' ref={this.imageRef}  placeholder='Image'  />
                <button type='submit'>Add fish</button>
            </form>
        )
    }
}

export default AddFishForm;