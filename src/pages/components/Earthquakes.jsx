import React, { Component } from 'react'
import './Earthquakes.scss'
import Tabledata from './table-data/Tabledata'
import { Loader } from 'tabler-react'

class Earthquakes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { data } = this.props
        console.log(data)
        return (data.row === [] 
            ? 
                <Loader />
            :
                <Tabledata data={data}/>
        )
    }
}
export default Earthquakes
