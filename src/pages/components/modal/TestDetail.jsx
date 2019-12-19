import React, { Component } from 'react'
import { Container, Page, Card, Alert } from 'tabler-react'
import './test-detail.css'
import { min } from 'simple-statistics'

class TestDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             findedGroup: ''
        }
    }
    static getDerivedStateFromProps(prop, state){
        return prop
    }
    componentDidMount = () => {
        const { testEuklid } = this.state
        let group = Object.entries(testEuklid).filter(e => {
            if(e[1] === min(Object.values(testEuklid)))
                return e[0]
        })[0][0]
        console.log(group)
        console.log(testEuklid)
        this.setState({findedGroup: group})
    }
    createCard = () => {
        const { findedGroup } = this.state
        if(findedGroup === 'small')
            return (
                <Alert type="info" icon="check">
                    Girilen verilere göre bu bölgede <strong>küçük</strong> ölçekli bir deprem beklenmektedir.
                </Alert>
            )
        else if(findedGroup === 'middle')
            return (
                <Alert type="secondary" icon="bell">
                    Girilen verilere göre bu bölgede <strong>orta</strong> ölçekli bir deprem beklenmektedir.
                </Alert>
            )
        else if(findedGroup === 'serious')
            return (
                <Alert type="danger" icon="alert-triangle">
                    Girilen verilere göre bu bölgede <strong>ciddi</strong> ölçekli bir deprem beklenmektedir.
                </Alert>
            )
    }
    render() {
        return (
            <Container>
                <Page.Header
                    title="Test Sonuçları"
                    subTitle=""
                />
                <Card
                title="Veriler"
                statusColor="cyan"
                className="card-test"
                body={this.createCard()}
                />
            </Container>
        )
    }
}
export default TestDetail
