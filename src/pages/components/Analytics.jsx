import React, { Component } from 'react'

import { VictoryBar, 
         VictoryChart, 
         VictoryAxis, 
         VictoryTheme,
         VictoryPie,
        VictoryLine,
        VictoryZoomContainer,
        VictoryBrushContainer,
    VictoryScatter } from 'victory';
const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
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
             locationBased: []
        }
    }
    
    static getDerivedStateFromProps = (props, state) => {
        return props
    }
    componentDidMount = () => {
        this.filterData()
    }
    componentDidUpdate = () => {

    }
    filterData = () => {
        const { data } = this.state
        console.log(data)
        if(data){
            const locationBasedGroup = data.groupBy('location');
            console.log(locationBasedGroup)
            const locationBased = Object.entries(locationBasedGroup).map(e => {
                return {x: e[0], y: e[1].length}
            })
            console.log(locationBased)
            this.setState({locationBased: locationBased})
        }
    }


    handleZoom = (domain) => {
        this.setState({selectedDomain: domain});
      }
    
      handleBrush = (domain) => {
        this.setState({zoomDomain: domain});
      }

    
    render() {
        const { locationBased } = this.state
        return (
            <>
           <VictoryChart containerComponent={<VictoryZoomContainer/>}>
            <VictoryScatter data={locationBased} />
            </VictoryChart>
       </>
        )
    }
}
export default Analytics
