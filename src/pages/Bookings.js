import React from 'react';
import BookingsData from './BookingsData.js';
import Booking from './Booking.js';

class Bookings extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const BookingsComponent= BookingsData.map(booking => <Booking key={booking.id} name={booking.name} price={booking.price} duration={booking.duration} image={booking.image}/>)
        return(
            <div className='booking-div container'>
                <div class='spacing-v'></div>
                <h1 class='lg-text-2'>Our Services</h1>
                <div class='spacing-v'></div>
                <h1>Bus-stop Advertisements</h1>
                <br/>
                <div className='display-flex flex-wrap'>
                    {BookingsComponent}
                </div>
            </div>
        )
    }
}

export default Bookings;


