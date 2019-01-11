import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

import './style/genderData.css';

class GenderData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: this.props.label
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver(e, d, i) {
        const data = d.map((entry, index) => {
            if(index === i) {
                return entry['title'];
            }
            return '';
        });

        this.setState({
            label: data[0] ? data[0] : data[1] ? data[1] : data[2] ? data[2] : ''
        });
    }

    onMouseOut(e, d, i) {
        this.setState({
            label: ''
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
                />;
                <p className='genderLabel'>{this.state.label}</p>
            </div>
        );
    }
}

export default GenderData;
