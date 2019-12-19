import React, { Component } from 'react'
import './Homepage.scss'
import { Container, Page, Card, Nav, Grid } from 'tabler-react'
import "tabler-react/dist/Tabler.css";
import Service from '../service/Service'
import Earthquakes from './components/Earthquakes'
import Test from './components/Test';
import Analytics from './components/Analytics';

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             location: 'data',
             data: [],
             testData: []
        }
    }
    route = location => {
        this.setState({location: location})
    }
    componentDidMount = () => {
        Service.fetchDataset().then(res=> {
            let data = res.data
            const testData = data.slice(-500, -1)
            data = data.slice(0, data.length-500)
            // console.log(testData)
            // console.log(data)
            this.setState({data: data, testData: testData})
        })
    }
    
    
    render() {
        const { location, data, testData } = this.state
        return (
            <Container>
                <Page>
                    <Page.Header
                    title="Data Mining Earthquake Task"
                    subTitle="..."
                    />
                    <Nav>
                        <Nav.Item icon="globe" active={location === 'data'} onClick={() => this.route('data')}>Eartquake Data</Nav.Item>
                        <Nav.Item icon="map" active={location === 'test'} onClick={() => this.route('test')}>Test</Nav.Item>
                        <Nav.Item icon="globe" active={location === 'analytics'} onClick={() => this.route('analytics')}>Analytics</Nav.Item>
                    </Nav>
                    <Grid.Row cards deck>
                    <Grid.Col md={10} offset={1} className="column">
                        <Card 
                        title="Eartquake Data"
                        className="mt-4"
                        body={
                            location === 'data'
                            ?
                            <Earthquakes data={data}/>
                            :
                            location === 'test'
                            ?
                            <Test data={data} testData={testData}/>
                            :
                            location === 'analytics'
                            ?
                            <Analytics data={data}/>
                            : ''
                        }
                        />
                    </Grid.Col>
                </Grid.Row>
                </Page>
            </Container>
        )
    }
}
export default Homepage
