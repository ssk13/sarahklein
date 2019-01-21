import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import './style/fictionData.css';

class FictionData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fictionLabel: ''
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    getFictionLabelClass() {
        if (this.state.fictionLabel) {
            return 'fictionLabel visible';
        }
        return 'fictionLabel';
    }

    onMouseOver(e, d, i) {
        var title = d[i]['title'];
        var total = 0;

        for (var j = 0; j < d.length; ++j) {
            total += d[j]['value'];
        }

        var value = d[i]['value'] / total;

        this.setState({
            fictionLabel: title + ': ' + (value * 100).toString().substring(0,5) + '%'
        });
    }

    onMouseOut(e, d, i) {
        this.setState({
            fictionLabel: ''
        });
    }

    render() {
        return (
            <div className='fictionData'>
                <h3>Authorship by fiction/non-fiction</h3>
                <p className={this.getFictionLabelClass()}>{this.state.fictionLabel}</p>
                <ReactMinimalPieChart
                    data={this.props.fictionData}
                    startAngle={180}
                    lengthAngle={180}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                />
            </div>
        );
    }
}

export default FictionData;
