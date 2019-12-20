import React, { Component } from 'react'
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import { Badge, Grid, Alert } from 'tabler-react'
// eslint-disable-next-line
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie, VictoryLine, VictoryZoomContainer, VictoryBrushContainer, VictoryScatter } from 'victory';
// eslint-disable-next-line
Array.prototype.groupBy = function(prop) {
return this.reduce(function(groups, item) {
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
}, {})
}
class Analytics extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             locationBased: [],
             testData: [],
             successStatus: 0,
             sm: {
                 kesinlik: 0,
                 anma: 0,
                 f: 0
             },
             me: {
                kesinlik: 0,
                anma: 0,
                f: 0
             },
             se: {
                kesinlik: 0,
                anma: 0,
                f: 0
             },
        }
    }
    static getDerivedStateFromProps = (props, state) => {
        return props
    }
    componentDidMount = () => {
        this.filterData()
        this.createModelSuccess()
    }
    filterData = () => {
        const { data } = this.state
        // console.log(data)
        if(data){
            const locationBasedGroup = data.groupBy('location');
            // console.log(locationBasedGroup)
            const locationBased = Object.entries(locationBasedGroup).map(e => {
                return {x: e[0], y: e[1].length}
            })
            // console.log(locationBased)
            this.setState({locationBased: locationBased})
        }
    }
    createModelSuccess = () => {
        const { testData, data } = this.state
        this.euklid = {
            small: 999999999999,
            middle: 99999999999,
            serious: 99999999999,
        }
        let smPositive = [], smNegative = [], mPositive = [], mNegative = [], sePositive = [], seNegative = []
        const successStatus = Object.values(testData).map(e => {
            let nearest = 999999
            let mag
            Object.values(data).forEach(f => {
                let small = Math.sqrt(
                                Math.pow(f['latitude']-e['latitude'], 2)+
                                Math.pow(f['longitude']-e['longitude'], 2)+
                                Math.pow(f['depth']-e['depth'], 2))
                if(nearest > small){
                    nearest = small
                    mag = f['mag']
                }
                
            })
            if( mag > 1 && mag < 5 )
                if(e['mag'] > 1 && e['mag'] < 4 ){
                    smPositive.push(true)
                    mNegative.push(true)
                    seNegative.push(true)
                    return true
                }
                else {
                    smPositive.push(false)
                    mNegative.push(false)
                    seNegative.push(false)
                    return false
                }
            else if( mag >= 5 && mag < 7 )
                if(e['mag'] >= 5 && e['mag'] < 7 ){
                    smNegative.push(true)
                    mPositive.push(true)
                    seNegative.push(true)
                    return true
                }
                else {
                    smNegative.push(false)
                    mPositive.push(false)
                    seNegative.push(false)
                    return false
                }
            else if( mag >= 7 && mag < 8 )
                if(e['mag'] >= 7 && e['mag'] < 7 ){
                    smNegative.push(true)
                    mNegative.push(true)
                    sePositive.push(true)
                    return true
                }
                else {
                    smNegative.push(false)
                    mNegative.push(false)
                    sePositive.push(false)
                    return false
                }
        }).filter(e => e===true)
        
        this.setState({
            successStatus: (successStatus.length/testData.length)
        })
        let sm = {
            kesinlik: (smPositive.filter(e=> e===true).length/smPositive.length), 
            anma: (smPositive.filter(e=> e===true).length/(smPositive.filter(e=> e===true).length+smNegative.filter(e=> e===false).length)),
            f: 0
        }
        let me = {
            kesinlik: (mPositive.filter(e=> e===true).length/mPositive.length),
            anma: (mPositive.filter(e=> e===true).length/(mPositive.filter(e=> e===true).length+mNegative.filter(e=> e===false).length)),
            f: 0
        }
        let se = {
            kesinlik: sePositive.length ? (sePositive.filter(e=> e===true).length/sePositive.length) : 0,
            anma: sePositive.length ? (sePositive.filter(e=> e===true).length/(sePositive.filter(e=> e===true).length+seNegative.filter(e=> e===false).length)): 0,
            f: 0
        }
        sm = {
            kesinlik: sm.kesinlik,
            anma: sm.anma,
            f: (sm.kesinlik+sm.anma) ? (2*sm.kesinlik*sm.anma/(sm.kesinlik+sm.anma)) : 0
        }
        me = {
            kesinlik: me.kesinlik,
            anma: me.anma,
            f: (me.kesinlik + me.anma) ? (2*me.kesinlik*me.anma/(me.kesinlik+me.anma)) : 0
        }
        se = {
            kesinlik: se.kesinlik,
            anma: se.anma,
            f: (se.kesinlik + se.anma) ? (2*se.kesinlik*se.anma/(se.kesinlik+se.anma)) : 0
        }
        // console.log(sePositive)
        this.findKesinlik(sm, me, se)


    }
    findKesinlik = (sm, me, se) => {
        this.setState({
            sm: sm, 
            me: me, 
            se: se
        })
    }
    createPieData = () => {
        const { successStatus } = this.state
        const dataPie = {
            labels: ["Success Rate", "Error Rate"],
            datasets: [
              {
                data: [successStatus, 1-successStatus],
                backgroundColor: [
                  "#46BFBD",
                  "#F7464A"
                ],
                hoverBackgroundColor: [
                  "#5AD3D1",
                  "#FF5A5E",
                ]
              }
            ]
          }
          return dataPie
    }
   


    render() {
        const { sm } = this.state
        return (
            <>
            <MDBContainer>
                <h3 className="mt-5">Model Success - Accuracy</h3>
                <Pie data={this.createPieData()} options={{ responsive: true }} />
                <h4 className="mt-8">For Small Expected Earthquakes</h4>
                <Grid.Row className="mt-3 mb-5" cards alignItems="center">
                    <Grid.Col>
                        <Badge color="primary" className="mr-1">
                            Kesinlik
                        </Badge>
                        <h5 className="mt-1">{sm.kesinlik}</h5>
                    </Grid.Col>
                    <Grid.Col>
                        <Badge color="primary" className="mr-1">
                            Anma
                        </Badge>
                        <h5 className="mt-1">{sm.anma}</h5>
                    </Grid.Col>
                    <Grid.Col>
                        <Badge color="primary" className="mr-1">
                            F - Ölçütü
                        </Badge>
                        <h5 className="mt-1">{sm.f}</h5>
                    </Grid.Col>
                </Grid.Row>
                <Alert type="danger" icon="alert-triangle">
                   Other values didn't calculate because of there is no true guess for middle and serious eartquakes. It causes that Turkey doesn't have enough serious earthquake datas for our guess.
                </Alert>
            </MDBContainer>
                {/* <VictoryChart containerComponent={<VictoryZoomContainer/>}>
                <VictoryScatter data={locationBased} />
                </VictoryChart> */}
            </>
        )
    }
}
export default Analytics
