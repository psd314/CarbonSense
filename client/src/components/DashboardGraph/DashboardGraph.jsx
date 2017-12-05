import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LiquidFillGauge from 'react-liquid-gauge';
import "./DashboardGraph.css"
import axios from "axios";
 
class ProfileGraph extends Component {
    state = {
        value: 1,
        gaugeTarget: 0
    };
    startColor = '#000000'; // cornflowerblue
    endColor = '#000000'; // crimson



    updateGaugeTarget = () => {
        axios.put("/gaugeTarget")
            .then(res => {
                this.setState({ gaugeTarget: res.data.gaugeTarget });
                console.log("results", this.state.gaugeTarget);
            })
            .catch(err => console.log(err));
    }

 
    render() {
        const radius = 205;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(this.state.value / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '80%',
                stopColor: color("#000000").darker(0.5).toString(),
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];
 
        return (

            <div className="DashboardGraph" style={{marginBottom:150}}>
                <h1>Max Carbon Points: {this.state.gaugeTarget}</h1>
                <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={radius * 2}
                    height={radius * 2}
                    value={this.props.value}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };
 
                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('white').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#ff0000').toString(),
                        fontFamily: 'Arial'
                    }}
                    /*onClick={() => {
                        this.setState({ value: Math.random() * 100 });
                    }}*/
                />
                <div
                    style={{
                        margin: '20px auto',
                        width: 120
                    }}
                >
                </div>
            </div>
        );
    }
};

export default ProfileGraph;