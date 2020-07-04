import React from 'react';
import {Link} from "react-router-dom";
import BusStop from '../assets/img/bus_stop.jpg';
import AboutImg from '../assets/img/high_flyer_about_img.png';
import WhyImg from '../assets/img/high_flyer_why_img.PNG'; 
import StepsImg1 from '../assets/img/step_img_1.png';
import StepsImg2 from '../assets/img/step_img_2.png';
import StepsImg3 from '../assets/img/step_img_3.png';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const landingPageStyle = {backgroundImage:`url(${BusStop})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}

        const stepsImg1Style = {backgroundImage:`url(${StepsImg1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}
        const stepsImg2Style = {backgroundImage:`url(${StepsImg2})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}
        const stepsImg3Style = {backgroundImage:`url(${StepsImg3})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}

        return(
            <div>
                <div className='landing-page' style={landingPageStyle}>
                    <div className='landing-page-texts vertical-center white-text'>
                        <h1 className='landing-page-text-1 lg-text italics'>High Flyer</h1>
                        <h3 className='centerdot'>•</h3>
                        <h1 className='landing-page-text-1 lg-text italics'>Fly Higher</h1>
                        <h3>A no-limits bus-stop advertising service in Singapore</h3>
                    </div>
                    
                </div>
                <div className='about-section'>
                    <div className='hide-on-mobile'>
                    <div className='container display-flex flex-cont-1'>
                        <div>
                            <div className='about-text-div white-text text-left vertical-center'>
                                <h1 className='line-height-3'>About Us</h1>
                                <h3 className='line-height-2'>Your one-stop solution to growth</h3>
                                <p className='line-height-2'>High Flyer offers a one-of-a-kind bus stop advertising service. We publish flyers on the notice boards of bus stops across Singapore.</p>
                                <p className='line-height-2'>Our services are top-notch and will guarantee to boost your business.</p>
                                <p className='line-height-2'>Without burning a hole through your pocket, we offer a full-year worth of maintenance service without burning a hole in your pocket.</p>
                                <p className='line-height-2'>Small business owners rejoice! Our services start at a super affordable price of <span id='price-start-at' className='underlined'>$15</span>!</p>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <div className='about-img-div vertical-center'>
                                <img src={AboutImg} className='about-img'/>
                                <div className='about-img-div-shadow'></div>

                            </div>
                        </div>
                    </div>
                    </div>

                    <div className = 'show-on-mobile'><div class="container"><div><div style={{paddingLeft: '5%',paddingRight: '5%'}} class="about-text-div white-text text-left"><h1 class="line-height-3" style={{margin: 0}}>About Us</h1><h3 class="line-height-2">Your one-stop solution to growth</h3><p class="line-height-2">High Flyer offers a one-of-a-kind bus stop advertising service. We publish flyers on the notice boards of bus stops across Singapore.</p><p class="line-height-2">Our service is top-notch and is guaranteed to boost your business.</p><p class="line-height-2">Without burning a hole through your pocket, we offer a full-year worth of maintenance service without burning a hole in your pocket.</p><p class="line-height-2"style={{paddingBottom: '15px',marginBottom: 0}}>Small business owners rejoice! Our services start at a super affordable price of <span id="price-start-at" class="underlined">$15</span>!<div></div></p></div></div><div></div></div></div>

                    
                
                </div>
                <div className='why-section hide-on-mobile'>
                    <div className='why-container display-flex flex-cont-2'>
                        <div>
                            <img src={WhyImg} className='why-img'/>
                        </div>
                        <div>
                            <div className='why-text-div white-text text-left vertical-center'>
                                <h1 className='line-height-3'>Why Bus Stop Advertisements?</h1>
                                <p className='line-height-2'>In 2018, daily bus ridership hit 4,000,000/day for the first time.</p>
                                <p className='line-height-2'>That was 2 years ago. Bus ridership has likely increased since then.</p>
                                <p className='line-height-2'>There are 5008 bus stops in Singapore.</p>
                                <p className='line-height-2'>Our Stand ard Package helps you advertise across 50 bus stops, which means that your ad could potentially be seen by 40000 daily.</p>
                                <p className='line-height-2'>We only select bus stops within highly-populated heartlands​, ensuring that ulu bus stops are filtered out.</p>
                                <p className='line-height-2'>Compare this with conventional methods of flyer distribution, where you have to print tens of thousands of flyers to get a fraction of the total exposure.</p>
                                <p className='line-height-2'>Not to mention, flyers gets thrown away, often without a second thought. In our case, our flyer stays on the notice board, even if some individuals are not receptive to it.</p>
                                <p className='line-height-2'>Bus-stop advertisement, if done properly, is an untapped potential that could grow your business to unimaginable heights.</p>
                                <p className='line-height-2'>Get on board with us today, and we promise to deliver the best advertisement service you will ever find in Singapore.</p>


                            </div>
                        </div>
                    </div>
                
                </div>
                <div className='why-section show-on-mobile'><div><div style={{position: 'relative'}}><img src={WhyImg}  class="why-img"/></div><div style={{backgroundColor: '#246CEC',paddingLeft: '5%',paddingRight: '5%'}}><div class="white-text text-left "><h1 style={{marginTop: 0}} class="line-height-3">Why Bus Stop Advertisements?</h1><p class="line-height-2">In 2018, daily bus ridership hit 4,000,000/day for the first time.</p><p class="line-height-2">That was 2 years ago. Bus ridership has likely increased since then.</p><p class="line-height-2">There are 5008 bus stops in Singapore.</p><p class="line-height-2">Our Stand ard Package helps you advertise across 50 bus stops, which means that your ad could potentially be seen by 40000 daily.</p><p class="line-height-2">We only select bus stops within highly-populated heartlands​, ensuring that ulu bus stops are filtered out.</p><p class="line-height-2">Compare this with conventional methods of flyer distribution, where you have to print tens of thousands of flyers to get a fraction of the total exposure.</p><p class="line-height-2">Not to mention, flyers gets thrown away, often without a second thought. In our case, our flyer stays on the notice board, even if some individuals are not receptive to it.</p><p class="line-height-2">Bus-stop advertisement, if done properly, is an untapped potential that could grow your business to unimaginable heights.</p><p class="line-height-2" style={{marginBottom: 0,paddingBottom: '15px'}}>Get on board with us today, and we promise to deliver the best advertisement service you will ever find in Singapore.</p></div></div></div></div>
                <div className='steps-section'>
                    <div className='full-width display-flex flex-cont-3'>
                        <div className='steps-img' style={stepsImg1Style}>
                            <div class='steps-text vertical-center white-text'>
                                <h3>Step 1: Connect With Us</h3>
                                <p>Send us a softcopy of your flyer in pdf/jpg/png file format and any requirements you may have. We will vet your advertisement and reply within 3 working days.</p>
                            </div>
                        </div>
                        <div className='steps-img' style={stepsImg2Style}>
                            <div class='steps-text vertical-center white-text'>
                                <h3>Step 2: Enjoy our service</h3>
                                <p>Sit back, relax, and let our dedicated staff do the dirty work for you. Soon, your ad will be published in bus stops across Singapore.</p>
                            </div>
                        </div>
                        <div className='steps-img' style={stepsImg3Style}>
                            <div class='steps-text vertical-center white-text'>
                                <h3>Step 3: Review</h3>
                                <p>Once done, we will send you a list of bus stops where your ad can be found. We will routinely conduct inspection on the condition of your flyer, a free service that lasts one year.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='connect'>
                    <div className='full-width white-text'>
                        <h1>Connect With Us</h1>
                        <form action="mailto:highflyerdistributor@gmail.com" method="GET">
                            <input className='input-area text-input' name="name" placeholder='Name' type="text" />
                            <br/>
                            <input className='input-area text-input' name="phone" placeholder='Enter your phone no.' type="text" />
                            <br/>
                            <input className='input-area text-input' name="email" placeholder='Email' type="text" />
                            <br/>
                            <textarea className='input-area text-area' name="body" placeholder='Type your message here...'></textarea>
                            <br/>
                            <input className='submit-btn' type="submit" value="Send" />
                        </form>
                        <div class='spacing-v'></div>
                        <h1>Alternatively, you can connect with us on Whatsapp/Telegram at +6585869610</h1>
                        <h1>(PLEASE DO NOT CALL OR SMS)</h1>

                    </div>
                </div>
            </div>

        )
    }
}

export default Home;


