import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <div className='footer white-text'>
                <div class='hide-on-mobile'>
                    <h5 style={{margin:0,paddingTop:'15px'}}>Whatsapp/Telegram: <a href='tel:+6585869610'>+6585869610</a> | Email: <a href='mailto:highflyerdistributor@gmail.com'>highflyerdistributor@gmail.com</a></h5>
                </div>
                <div class='show-on-mobile'>
                    <h5 style={{margin:0,paddingTop:'15px'}}>Whatsapp/Telegram: <a href='tel:+6585869610'>+6585869610</a></h5>
                    <h5 style={{margin:0}}>Email: <a href='mailto:highflyerdistributor@gmail.com'>highflyerdistributor@gmail.com</a></h5>
                </div>
                
                <div >
                    <h5 style={{margin:0,paddingBottom:'15px'}}>© 2020 HighFlyer. All rights reserved.</h5>
                </div>
                            
            </div> 

        )
    }
}

export default Footer;


