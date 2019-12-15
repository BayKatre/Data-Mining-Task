import React, { Component } from 'react'
import zscore from 'zscore';
import { Form, Button } from 'tabler-react'
import { number } from 'prop-types'
import {min} from 'simple-statistics'

class Analytics extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             latitude: number,
             longitude: number,
             depth: number,
             bDepthScore: [],
        }
    }
    mLatitudeScore
    mLongitudeScore
    mDepthScore
    sLatitudeScore
    sLongitudeScore
    sDepthScore
    bLatitudeScore
    bLongitudeScore
    euklid = {
        middle: 9999999,
        serious: 9999999,
        big: 9999999,
    }
    static getDerivedStateFromProps(props, state){
        return props
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    componentDidMount = () => {
        this.findZScores();
    }
    findZScores = () => {
        let middleLatitudes = this.state.data.filter(e => e.mag>5 && e.mag<7).map(element => {
            return element.latitude
        })
        // middleLatitudes = middleLatitudes.map(e => e+=min(middleLatitudes))
        let middleLongitudes = this.state.data.filter(e => e.mag>5 && e.mag<7).map(element => {
            return element.longitude
        })
        // middleLongitudes = middleLongitudes.map(e => e+=min(middleLongitudes))
        let middleDepths = this.state.data.filter(e => e.mag>5 && e.mag<7).map(element => {
            return element.depth
        })
        // middleDepths = middleDepths.map(e => e+=min(middleDepths))
        let seriousLatitudes = this.state.data.filter(e => e.mag>7 && e.mag<8).map(element => {
            return element.latitude
        })
        // seriousLatitudes = seriousLatitudes.map(e => e+=min(seriousLatitudes))
        let seriousLongitudes = this.state.data.filter(e => e.mag>7 && e.mag<8).map(element => {
            return element.longitude
        })
        // seriousLongitudes = seriousLongitudes.map(e => e+=min(seriousLongitudes))
        let seriousDepths = this.state.data.filter(e => e.mag>7 && e.mag<8).map(element => {
            return element.depth
        })
        // seriousDepths = seriousDepths.map(e => e+=min(seriousDepths))
        let bigLatitudes = this.state.data.filter(e => e.mag>8 && e.mag<10).map(element => {
            return element.latitude
        })
        // bigLatitudes = bigLatitudes.map(e => e+=min(bigLatitudes))
        let bigLongitudes = this.state.data.filter(e => e.mag>8 && e.mag<10).map(element => {
            return element.longitude
        })
        // bigLongitudes = bigLongitudes.map(e => e+=min(bigLongitudes))
        let bigDepths = this.state.data.filter(e => e.mag>8 && e.mag<10).map(element => {
            return element.depth
        })
        // bigDepths = bigDepths.map(e => e+=min(bigDepths))
        // let mlatitudesScore = zscore(middleLatitudes)
        // let mlongitudesScore = zscore(middleLongitudes)
        // let mdepthsScore = zscore(middleDepths)
        // let slatitudesScore = zscore(seriousLatitudes)
        // let slongitudesScore = zscore(seriousLongitudes)
        // let sdepthsScore = zscore(seriousDepths)
        // let blatitudesScore = zscore(bigLatitudes)
        // let blongitudesScore = zscore(bigLongitudes)
        // let bdepthsScore = zscore(bigDepths)
        let mlatitudesScore = middleLatitudes
        let mlongitudesScore = middleLongitudes
        let mdepthsScore = middleDepths
        let slatitudesScore = seriousLatitudes
        let slongitudesScore = seriousLongitudes
        let sdepthsScore = seriousDepths
        let blatitudesScore = bigLatitudes
        let blongitudesScore = bigLongitudes
        let bdepthsScore = bigDepths
        // this.mLatitudeScore = mlatitudesScore.map(e => e-min(mlatitudesScore))
        // this.mLongitudeScore = mlongitudesScore.map(e => e-min(mlongitudesScore))
        // this.mDepthScore = mdepthsScore.map(e => e-min(mdepthsScore))
        // this.sLatitudeScore = slatitudesScore.map(e => e-min(slatitudesScore))
        // this.sLongitudeScore = slongitudesScore.map(e => e-min(slongitudesScore))
        // this.sDepthScore = sdepthsScore.map(e => e-min(sdepthsScore))
        // this.bLatitudeScore = blatitudesScore.map(e => e-min(blatitudesScore))
        // this.bLongitudeScore = blongitudesScore.map(e => e-min(blongitudesScore))
        // this.bDepthScore = bdepthsScore.map(e => e-min(bdepthsScore))
        this.mLatitudeScore = mlatitudesScore
        this.mLongitudeScore = mlongitudesScore
        this.mDepthScore = mdepthsScore
        this.sLatitudeScore = slatitudesScore
        this.sLongitudeScore = slongitudesScore
        this.sDepthScore = sdepthsScore
        this.bLatitudeScore = blatitudesScore
        this.bLongitudeScore = blongitudesScore
        this.bDepthScore = bdepthsScore
        console.log(middleDepths)
    }
    calculate = (latitude, longitude, depth) => {
        for (let i = 0; i<6248; i++){
            let middle = Math.sqrt(
                            Math.pow(this.mLatitudeScore[i]-latitude, 2)+
                            Math.pow(this.mLongitudeScore[i]-longitude, 2)+
                            Math.pow(this.mDepthScore[i]-depth, 2))
            let serious = Math.sqrt(
                            Math.pow(this.sLatitudeScore[i]-latitude, 2)+
                            Math.pow(this.sLongitudeScore[i]-longitude, 2)+
                            Math.pow(this.sDepthScore[i]-depth, 2))
            let big = Math.sqrt(
                            Math.pow(this.bLatitudeScore[i]-latitude, 2)+
                            Math.pow(this.bLongitudeScore[i]-longitude, 2)+
                            Math.pow(this.bDepthScore[i]-depth, 2))
            if(this.euklid.middle > middle) this.euklid.middle = middle
            if(this.euklid.serious > serious) this.euklid.serious = serious
            if(this.euklid.big > big) this.euklid.big = big 
        }
        console.log(this.euklid)
    }
    createForm(){
        return (
            <>
            <Form>
                <Form.Group label="Latitude">
                    <Form.Input
                    icon="feather"
                    name="latitude"
                    placeholder="Latitude"
                    position="append" value={this.state.latitude} onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group label="Longitude">
                    <Form.Input
                    icon="layers"
                    name="longitude"
                    placeholder="Longitude"
                    position="append" value={this.state.longitude} onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group label="Depth">
                    <Form.Input
                    icon="bookmark"
                    name="depth"
                    placeholder="Depth"
                    position="append" value={this.state.depth} onChange={this.handleChange}
                    />
                </Form.Group>
            </Form>
            <Button color="primary" style={{float: 'right'}} onClick={() => this.calculate(this.state.latitude, this.state.longitude, this.state.depth)}>Calculate</Button>
            </>
        )
    }

    
    
    render() {
        return (
            <>
            {this.createForm()}
            </>
        )
    }
}
export default Analytics
