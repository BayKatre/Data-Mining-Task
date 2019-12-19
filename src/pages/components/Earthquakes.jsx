import React, { Component } from 'react'
import './Earthquakes.scss'
import Tabledata from './table-data/Tabledata'
import { Dimmer } from 'tabler-react'

class Earthquakes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    isEmpty = (data) => {
        if(Object.entries(data).length)
            return 0
        else
            return 1
    }
    
    render() {
        const { data } = this.props
        // console.log(data)
        return (
            <Dimmer active={this.isEmpty(data)} loader>
                <Tabledata data={data}/>
            </Dimmer>
        )
    }
}
export default Earthquakes
