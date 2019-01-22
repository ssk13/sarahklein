import React, { Component } from 'react';
import sarah from '../assets/sarah.JPG';
import Image from '../components/image';

import './style/developer.css'

class Developer extends Component {
    render() {
        return (
            <div>
                <h2>Software Developer</h2>

                <Image imgSrc={sarah} altTxt='Sarah Klein' size='30' float='right' />

                <div>

                    <p>
                        I started my engineering career as a math-enthused 12-year-old building ugly 
                        websites on my parents' PC, and continuing to tinker until I found myself at the 
                        University of Florida. During my time there, I studied Digital Arts and Sciences 
                        Engineering, earning a BS in Engineering, as well as a BA in Music Theory. 
                        During my final year, I was published in the university's Journal of Undergraduate 
                        Research for my paper documenting <a href='http://ufdc.ufl.edu/UF00091523/00872' 
                        target='_blank' rel='noopener noreferrer'>'Point/Counterpoint'</a>, a web application 
                        that algorithmically verified species counterpoint in the style of Palestrina.
                    </p>

                    <p>
                        I completed three technical internships at Microsoft - two on <i>Sway</i> and 
                        another on <i>PowerPoint</i>. On <i>Sway</i>, I helped implement native audio support. 
                        On <i>PowerPoint</i>, I added <i>PowerPointer</i> - a feature that allows users to 
                        trigger and manipulate a laser pointer in Presentation Mode using the phone's gyroscope - 
                        to Android and Windows Phone clients.
                    </p>

                    <p>
                        While in Gainesville, I completed a QA Developer Internship at Grooveshark, where I 
                        performed bug fixes, implemented new UI elements, learned the importance of true 
                        cross-platform development, and got my first taste of Git.
                    </p>

                    <p>
                        I started her full-time career at Microsoft in September, 2017, working on the Data 
                        and Intelligence team for Windows IoT Core, where I developed UWP apps for IoT Core 
                        scenarios, used data analytics to monitor product health, and helped partners leverage 
                        IoT Core for their own solutions.    
                    </p>

                    <p>
                        I currently works as a software developer for Microsoft, working in BAG. My team 
                        focuses on empowering retailers using IoT and computer vision solutions built on 
                        Dynamics 365. On this team, I have dabbled in React Native development for iOS and Android, 
                        React development for an Azure-hosted web application, firmware development for both IoT 
                        Core and Mongoose OS devices, and computer vision with Python and OpenCV.
                    </p>

                    <h2>Additional Links</h2>
                    <ul>
                        <li>
                            <a href='https://github.com/ssk13' target='_blank' rel='noopener noreferrer'>Github</a>
                        </li>
                        <li>
                            <a href='https://taylorraynormusic.com' target='_blank' 
                                rel='noopener noreferrer'>TaylorRaynorMusic.com</a>: Personal website of Tampa-based 
                                singer/songwriter, <i>Taylor Raynor</i>
                        </li>
                        <li>
                            <a href='http://ufdc.ufl.edu/UF00091523/00872' target='_blank' 
                                rel='noopener noreferrer'>Point/Counterpoint–Verifying Two-Voice Species 
                                Counterpoint In The Style Of Palestrina </a>: Academic paper, published in the <i>UF 
                                    Journal of Undergraduate Research</i>, about algorithmic verification of species 
                                    counterpoint
                        </li>
                        <li>
                            <a href='https://ssk13.github.io/sarahklein/#/reader' target='_blank' 
                                rel='noopener noreferrer'>What I've Read Lately </a>: A dashboard displaying metrics about 
                                my reading habits, derived from Goodreads APIs
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}
 
export default Developer;
