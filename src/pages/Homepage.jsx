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
             data: []
        }
    }
    route = location => {
        this.setState({location: location})
    }
    componentDidMount = () => {
        Service.fetchDataset().then(res=> {
            const data = res.data.filter(e => e.location)
            this.setState({data: data})
        })
    }
    
    render() {
        const { location, data } = this.state
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
                            <Test data={data}/>
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
