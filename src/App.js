import React, {Component} from 'react'
import './styles.css'
import Portrait from './components/portrait/portrait'
import Navbar from './components/navbar/navbar'
import MainContent from './components/main/mainContent'
import Info from './components/info/info'
import Events from './components/events/events'
import Howto from './components/howto/howto'
import Map from './components/map/map'
import Footer from './components/footer/footer'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name : 'miguel'
    }
  }

  render() {

    return (<div className="mainBox">
      <Navbar/>
      <Portrait buttonInfo="Leer más"/>
      <MainContent imagePlace={true}/>
      <MainContent/>
      <MainContent imagePlace={true}/>
      <Info/>
      <Events/>
      <Howto/>
      <Map isMarkerShown={true}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{  width:'100%', height: `100%` }} />}
        containerElement={<div style={{ width:'100%',height: `600px` }} />}
        mapElement={<div style={{ width:'100%',height: `100%` }} />}
      />
      <Footer/>
    </div>)
  }
}
