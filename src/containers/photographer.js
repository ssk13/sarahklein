import React, { Component } from 'react';
import Image from '../components/image';
import ImageRow from '../components/imageRow';
import chicktech from '../assets/chicktech.JPG';
import dublin from '../assets/dublin.JPG';
import fallas from '../assets/fallas.JPG';
import ghent from '../assets/ghent.JPG';
import hamburg from '../assets/hamburg.JPG';
import israel from '../assets/israel.JPG';
import kinswa from '../assets/kinswa.JPG';
import march from '../assets/march.JPG';
import michael from '../assets/michael.JPG';
import nick from '../assets/sofar_nick.JPG';
import nola from '../assets/nola.JPG';
import santa from '../assets/santa.JPG';
import leah from '../assets/sofar_leah.jpg';
import taylor from '../assets/taylor.JPG';
import tzvat from '../assets/tzvat.JPG';

 
class Photographer extends Component {
    render() {
        return (
            <div>
                <h2>Photographer</h2>

                <p>
                    My interest in photography stemmed my her deep love of travel (24 countries and counting!), as 
                    well as a demand for affordable recital posters and headshots during My time at the University of 
                    Florida. While primarily a hobbiest, my photos have been featured several times in the Tampa Bay Times. 
                </p>
                    
                <p>
                    I currently works with <a href='https://www.sofarsounds.com/seattle' target='_blank' 
                    rel='noopener noreferrer'>Sofar Seattle's</a> creative team, volunteer with <a 
                    href='https://www.chicktech.org' target='_blank' rel='noopener noreferrer'>Chicktech</a> as 
                    a photographer, and enjoys photographing the lush landscapes of the Pacific Northwest.
                </p>

                <ImageRow>
                    <Image imgSrc={chicktech} altTxt='Chicktech, Seattle, WA' hasCaption='true' size='10' />
                    <Image imgSrc={dublin} altTxt='Pride, Dublin' hasCaption='true' size='10' />
                    <Image imgSrc={fallas} altTxt='Las Fallas, Valencia' hasCaption='true' size='10' />
                    <Image imgSrc={ghent} altTxt='Ghent, Belgium' hasCaption='true' size='10' />
                    <Image imgSrc={hamburg} altTxt='Elphilharmonie, Hamburg' hasCaption='true' size='10' />
                    <Image imgSrc={israel} altTxt='Dead Sea, Israel' hasCaption='true' size='10' />
                    <Image imgSrc={kinswa} altTxt='Ike Kinswa State Park, WA' hasCaption='true' size='10' />
                    <Image imgSrc={march} altTxt='Womens March 2017, Copenhagen' hasCaption='true' size='10' />
                    <Image imgSrc={nick} altTxt='Nick Drummand, Sofar Seattle' hasCaption='true' size='10' />
                    <Image imgSrc={michael} altTxt='Michael Tran, Gainesville' hasCaption='true' size='10' />
                    <Image imgSrc={nola} altTxt='New Orleans, LA' hasCaption='true' size='10' />
                    <Image imgSrc={santa} altTxt='Semana Santa, Malaga' hasCaption='true' size='10' />
                    <Image imgSrc={leah} altTxt='Leah T., Sofar Seattle' hasCaption='true' size='10' />
                    <Image imgSrc={taylor} altTxt='Taylor Raynor, Tampa' hasCaption='true' size='10' />
                    <Image imgSrc={tzvat} altTxt='Tzvat, Israel' hasCaption='true' size='10' />
                </ImageRow>
            </div>
        );
    }
}
 
export default Photographer;