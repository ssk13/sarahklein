import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

import './style/hometownData.css';

class HometownData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hometownLabel: ''
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    getHometownLabelClass() {
        if (this.state.hometownLabel) {
            return 'hometownLabel visible';
        }
        return 'hometownLabel';
    }

    onMouseOver(e, d, i) {
        var title = d[i]['title'];
        var total = 0;

        for (var j = 0; j < d.length; ++j) {
            total += d[j]['value'];
        }
    
        var value = d[i]['value'] / total;

        this.setState({
            hometownLabel: title + ': ' + (value * 100).toString().substring(0,5) + '%'
        });
    }

    onMouseOut(e, d, i) {
        this.setState({
            hometownLabel: ''
        });
    }

    render() {
        return (
            <div className='hometownData'>
                <h3>Authorship by hometown</h3>
                <p className={this.getHometownLabelClass()}>{this.state.hometownLabel}</p>
                <PieChart
                    data={this.props.hometownData}
                    startAngle={180}
                    lengthAngle={180}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                />
            </div>
        );
    }
}

export default HometownData;
