import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Developer from './containers/developer';
import Musician from './containers/musician';
import Photographer from './containers/photographer';
import './App.css';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Sarah Klein</h1>
                    <NavBar />
                    <div className='content'>
                        <Route path='/musician' component={Musician}/>
                        <Route path='/developer' component={Developer}/>
                        <Route path='/photographer' component={Photographer}/>
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;
