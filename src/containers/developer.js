import React, { Component } from 'react';
import Image from '../components/image';
import ImageRow from '../components/imageRow';
import gator from '../assets/gator.png';
import grooveshark from '../assets/grooveshark.png';
import powerpoint from '../assets/powerpoint.png';
import sway from '../assets/sway.png';

class Developer extends Component {
    render() {
        return (
            <div>
                <h2>Software Developer</h2>
                
                <p>
                    Sarah started her engineering career as a math-enthused 12-year-old building ugly 
                    websites on per parents' PC. During her time at the University of Florida, she graduated 
                    with a BS in Digital Arts and Sciences Engineering, in addition to a BA in Music Theory. 
                    During her final year, she was published in the university's Journal of Undergraduate 
                    Research for her paper documenting <a href='http://ufdc.ufl.edu/UF00091523/00872' 
                    target='_blank' rel='noopener noreferrer'>'Point/Counterpoint,'</a> a web application 
                    that algorithmically  verified species counterpoint in the style of Palestrina.
                </p>

                <ImageRow>
                    <Image imgSrc={gator} altTxt='gator' size='3' />
                </ImageRow>

                <p>
                    Sarah completed three technical internships at Microsoft - two on <i>Sway</i> and 
                    another on <i>PowerPoint</i>. On <i>Sway</i>, she helped implement native audio support. 
                    On <i>PowerPoint</i>, she added <i>PowerPointer</i> - a feature that allows users to 
                    trigger and manipulate a laser pointer in Presentation Mode using the phone's gyroscope - 
                    to Android and Windows Phone clients.
                </p>

                <ImageRow>
                    <Image imgSrc={sway} altTxt='sway' size='3' />
                    <Image imgSrc={powerpoint} altTxt='powerpoint' size='3' />
                </ImageRow>

                <p>
                    While in Gainesville, Sarah completed a QA Developer Internship at Grooveshark, where she 
                    performed bug fixes, implemented new UI elements, learned the importance of true 
                    cross-platform development, and got her first taste of Git.
                </p>

                <ImageRow>
                    <Image imgSrc={grooveshark} altTxt='grooveshark' size='3' />
                </ImageRow>

                <p>
                    Sarah started her full-time career at Microsoft in September, 2017, working on the Data 
                    and Intelligence team for Windows IoT Core, where she developed UWP apps for IoT Core 
                    scenarios, used data analytics to monitor product health, and helped partners leverage 
                    IoT Core for their own solutions.    
                </p>

                <p>
                    Sarah currently works as a software developer for Microsoft, working in BAG. Her team 
                    focuses on empowering businesses with technology, primarily IoT and computer vision 
                    solutions built upon Dynamics 365. On this team, she has dabbled in React Native development 
                    for iOS and Android, React development for an Azure-hosted web application, firmware 
                    development for both IoT Core and Mongoose OS devices, and OpenCV.
                </p>

                <h2>Additional Links</h2>
                <ul>
                    <li>
                        <a href='https://github.com/ssk13' target='_blank' rel='noopener noreferrer'>Github</a>
                    </li>
                    <li>
                        <a href='https://taylorraynormusic.com' target='_blank' 
                            rel='noopener noreferrer'>TaylorRaynorMusic.com</a>
                    </li>
                    <li>
                        <a href='http://ufdc.ufl.edu/UF00091523/00872' target='_blank' 
                            rel='noopener noreferrer'>Point/Counterpoint–Verifying Two-Voice Species 
                            Counterpoint In The Style Of Palestrina </a>
                    </li>
                </ul>

            </div>
        );
    }
}
 
export default Developer;