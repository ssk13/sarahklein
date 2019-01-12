import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

import './style/genderData.css';

class GenderData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genderLabel: ''
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver(e, d, i) {
        var title = d[i]['title'];
        var value = d[i]['value'] / (d[0]['value'] + d[1]['value'] + d[2]['value']);

        this.setState({
            genderLabel: title + ': ' + (value * 100).toString().substring(0,5) + '%'
        });
    }

    onMouseOut(e, d, i) {
        this.setState({
            genderLabel: ''
        });
    }

    render() {
        return (
            <div className='genderData'>
                <PieChart
                    data={this.props.genderData}
                    startAngle={180}
                    lengthAngle={180}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                />
                <p className='genderLabel'>{this.state.genderLabel}</p>
            </div>
        );
    }
}

export default GenderData;
