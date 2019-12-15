import React, { Component } from 'react'
import './Homepage.scss'
import { Container, Page, Card, Nav, Grid } from 'tabler-react'
import "tabler-react/dist/Tabler.css";
import Service from '../service/Service'
import Earthquakes from './components/Earthquakes'
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
            this.setState({data: res.data})
            console.log(this.state.data)
        })
    }
    
    render() {
        const { location, data } = this.state
        console.log(data)
        return (
            <Container>
                <Page>
                    <Page.Header
                    title="Data Mining Earthquake Task"
                    subTitle="..."
                    />
                    <Nav>
                        <Nav.Item icon="globe" active={location === 'data'} onClick={() => this.route('data')}>Eartquake Data</Nav.Item>
                        <Nav.Item icon="map" active={location === 'analytics'} onClick={() => this.route('analytics')}>Analytics</Nav.Item>
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
