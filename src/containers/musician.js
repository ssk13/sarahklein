import React, { Component } from 'react';
import Image from '../components/image';
import viol from '../assets/viol.jpg';
 
class Musician extends Component {
    render() {
        return (
            <div>
                <h2>Musician</h2>

                <Image imgSrc={viol} altTxt='Viol, Milan' size='30' float='right' />

                <div>

                    <p>
                        I started my career as a musician banging on a slightly-out-of-tune piano, as most do. 
                        I graduadually shifted focus to the upright bass, followed by the guitar, mandolin, ukulele, 
                        and briefly the cello, but found my way back to bass before beginning study at the University of 
                        Florida with Kevin Casseday.
                    </p>

                    <p>
                        While at the University of Florida, I participated in the Symphony Orchestra, Wind Symphony, 
                        and various chamber ensembles. I also performed with the School of Theatre and Dance in their productions of
                        <i>Urinetown</i>, <i>Guys & Dolls</i>, <i>Sweeney Todd</i>, <i>The Drowsy Chaperone</i>, and <i>Spring 
                        Awakening</i>. I also performed in the Ocala Symphony Orchestra, and founded and managed a jazz combo 
                        'The Tramp Collection', which recorded one self-titled album in 2015.
                    </p>

                    <p>
                        During my studies, I gained proficiency in tools such as Finale, Audacity, and Reason. I was formally trained 
                        in composition, arranging, conducting, and score reading. I also explored algorithmic composition,  
                        developing a web applicaiton that verifies species counterpoint as a combined senior project for my two degrees.
                    </p>

                    <p>
                        During my final semester, I moved to Madrid, where I was able to perform in Zaragoza and Ubeda with the  
                        <i>Orchestra de Universidad Carlos III</i>.
                    </p>

                    <p>
                        I currently live and play in Seattle, WA, performing with the Seattle Philharmonic and the local bolero group  
                        <i>Encanto</i>.
                    </p>

                </div>       

            </div>
        );
    }
}
 
export default Musician;