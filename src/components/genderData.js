import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

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

    getGenderLabelClass() {
        if (this.state.genderLabel) {
            return 'genderLabel visible';
        }
        return 'genderLabel';
    }

    onMouseOver(e, d, i) {
        var title = d[i]['title'];
        var total = 0;

        for (var j = 0; j < d.length; ++j) {
            total += d[j]['value'];
        }

        var value = d[i]['value'] / total;

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
                <h3>Authorship by gender</h3>
                <p className={this.getGenderLabelClass()}>{this.state.genderLabel}</p>
                <ReactMinimalPieChart
                    data={this.props.genderData}
                    startAngle={180}
                    lengthAngle={180}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                />
            </div>
        );
    }
}

export default GenderData;
