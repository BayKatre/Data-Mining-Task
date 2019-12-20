import React, { Component } from 'react'
import { Form, Button, Grid } from 'tabler-react'
import { number } from 'prop-types'
import { max } from 'simple-statistics'
import ReactModal from 'react-modal';
import TestDetail from './modal/TestDetail';
import './test.scss'
import TestTabledata from './table-data/TestTabledata';

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             latitude: number,
             longitude: number,
             depth: number,
             bDepthScore: [],
             showModal: false,
             testEuklid: []
        }
    }
    smLatitudeScore
    smLongitudeScore
    smDepthScore
    mLatitudeScore
    mLongitudeScore
    mDepthScore
    seLatitudeScore
    seLongitudeScore
    seDepthScore
    euklid = {
        small: 999999999999,
        middle: 99999999999,
        serious: 99999999999,
    }
    static getDerivedStateFromProps(props, state){
        return props
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        // console.log(this.state.depth)
    }
    openAddModal = (event) => {
        this.setState({ eventDataForTalkers: event })
        this.handleOpenModal()
    }
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
    handleCloseModal = () => {
        this.setState({ showModal: false });
    }
    componentDidMount = () => {
        this.findZScores();
    }
    findZScores = () => {
        let smallLatitudes = this.state.data.filter(e => e.mag>1 && e.mag<5).map(element => {
            return element.latitude
        })
        // smallLatitudes = smallLatitudes.map(e => e+=min(smallLatitudes))
        let smallLongitudes = this.state.data.filter(e => e.mag>1 && e.mag<5).map(element => {
            return element.longitude
        })
        // smallLongitudes = smallLongitudes.map(e => e+=min(smallLongitudes))
        let smallDepths = this.state.data.filter(e => e.mag>1 && e.mag<5).map(element => {
            return element.depth
        })
        // smallDepths = smallDepths.map(e => e+=min(smallDepths))
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
        // let mlatitudesScore = zscore(smallLatitudes)
        // let mlongitudesScore = zscore(smallLongitudes)
        // let mdepthsScore = zscore(smallDepths)
        // let slatitudesScore = zscore(middleLatitudes)
        // let slongitudesScore = zscore(middleLongitudes)
        // let sdepthsScore = zscore(middleDepths)
        // let blatitudesScore = zscore(seriousLatitudes)
        // let blongitudesScore = zscore(seriousLongitudes)
        // let bdepthsScore = zscore(seriousDepths)
        let smlatitudesScore = smallLatitudes
        let smlongitudesScore = smallLongitudes
        let smdepthsScore = smallDepths
        let mlatitudesScore = middleLatitudes
        let mlongitudesScore = middleLongitudes
        let mdepthsScore = middleDepths
        let selatitudesScore = seriousLatitudes
        let selongitudesScore = seriousLongitudes
        let sedepthsScore = seriousDepths
        // this.mLatitudeScore = mlatitudesScore.map(e => e-min(mlatitudesScore))
        // this.mLongitudeScore = mlongitudesScore.map(e => e-min(mlongitudesScore))
        // this.mDepthScore = mdepthsScore.map(e => e-min(mdepthsScore))
        // this.sLatitudeScore = slatitudesScore.map(e => e-min(slatitudesScore))
        // this.sLongitudeScore = slongitudesScore.map(e => e-min(slongitudesScore))
        // this.sDepthScore = sdepthsScore.map(e => e-min(sdepthsScore))
        // this.bLatitudeScore = blatitudesScore.map(e => e-min(blatitudesScore))
        // this.bLongitudeScore = blongitudesScore.map(e => e-min(blongitudesScore))
        // this.bDepthScore = bdepthsScore.map(e => e-min(bdepthsScore))
        this.smLatitudeScore = smlatitudesScore
        this.smLongitudeScore = smlongitudesScore
        this.smDepthScore = smdepthsScore
        this.mLatitudeScore = mlatitudesScore
        this.mLongitudeScore = mlongitudesScore
        this.mDepthScore = mdepthsScore
        this.seLatitudeScore = selatitudesScore
        this.seLongitudeScore = selongitudesScore
        this.seDepthScore = sedepthsScore
        // console.log(smallDepths)
    }
    calculate = (latitude, longitude, depth) => {
        this.euklid = {
            small: 999999999999,
            middle: 99999999999,
            serious: 99999999999,
        }
        const totalLength = max([this.smLatitudeScore.length, this.mLatitudeScore.length, this.seLatitudeScore.length])
        for (let i = 0; i<totalLength; i++){
            let small = Math.sqrt(
                            Math.pow(this.smLatitudeScore[i]-latitude, 2)+
                            Math.pow(this.smLongitudeScore[i]-longitude, 2)+
                            Math.pow(this.smDepthScore[i]-depth, 2))
            let middle = Math.sqrt(
                            Math.pow(this.mLatitudeScore[i]-latitude, 2)+
                            Math.pow(this.mLongitudeScore[i]-longitude, 2)+
                            Math.pow(this.mDepthScore[i]-depth, 2))
            let serious = Math.sqrt(
                            Math.pow(this.seLatitudeScore[i]-latitude, 2)+
                            Math.pow(this.seLongitudeScore[i]-longitude, 2)+
                            Math.pow(this.seDepthScore[i]-depth, 2))
            if(this.euklid.small > small) this.euklid.small = small
            if(this.euklid.middle > middle) this.euklid.middle = middle
            if(this.euklid.serious > serious) this.euklid.serious = serious 
        }
        
        this.setState({testEuklid: this.euklid, showModal: true})
        
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
            <ReactModal
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}
                style={modalStyles}
                ariaHideApp={false}
                contentLabel="Add Talker Modal"
                >
                <TestDetail testEuklid={this.state.testEuklid}/>
                <Button color="cyan" className="button-close" onClick={this.handleCloseModal}>Kapat</Button>
            </ReactModal>
            </>
        )
    }

    
    
    render() {
        const { testData } = this.props
        return (
            <>
                <Grid.Row>
                    <Grid.Col
                        width={6}
                    >
                        <TestTabledata data={testData} />
                    </Grid.Col>
                    <Grid.Col 
                        width={6}
                    >
                        {this.createForm()}
                    </Grid.Col>
                </Grid.Row>
            </>
        )
    }
}
export default Test
const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40vw',
      height: '35vw'
    }
  };