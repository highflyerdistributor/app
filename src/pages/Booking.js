import React from 'react';

class Booking extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='booking-panel'>
                <div className='booking-subpanel'>
                    <img src={this.props.image} class='full-width booking-img'/>
                    <div className='booking-content'>
                        <h1>{this.props.name}</h1> 
                        <h3>{this.props.price} | {this.props.duration}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking;