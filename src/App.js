import React, {Component} from 'react'
import './styles.css'
import {} from '../node_modules/font-awesome/css/font-awesome.css'
import Portrait from './components/portrait/portrait'
import Navbar from './components/navbar/navbar'
import MainContent from './components/main/mainContent'
import Info from './components/info/info'
import Events from './components/events/events'
import Howto from './components/howto/howto'
import Map from './components/map/map'
import Footer from './components/footer/footer'
import MapUrl from './components/map/key'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name : 'miguel'
    }
  }

  handleScroll() {
    console.log(document.documentElement.scrollTop)
  }
 
  componentDidMount () {
    window.onscroll = () => {
      this.handleScroll()
    }
  }

  render() {

    return (<div className="mainBox">
      <Navbar/>
      <Portrait buttonInfo="Leer más"/>
      <MainContent
        textPosition = {'end'}
        backgroundImage = {'http://netdoctor.cdnds.net/17/02/1600x800/landscape-1484045466-woman-in-dentist-chair-having-a-filling.jpg'} 
        imageRigth={true}/>
      <MainContent
        textPosition = {'start'}
        backgroundImage = {'https://images.dentalplans.com/2016/dear-doctor/general-dentist/general-dentist.jpg'} 
        imageRigth={false}/>
      <MainContent
        textPosition = {'end'}
        backgroundImage = {'http://flourishpediatricdentistry.com/assets/images/slides-home/02.jpg'} 
        imageRigth={true}/>
      <Info/>
      <Events/>
      <Howto/>
      <Map isMarkerShown={true}
        googleMapURL= {MapUrl}
        loadingElement={<div style={{  width:'100%', height: `100%` }} />}
        containerElement={<div style={{ width:'100%',height: `600px` }} />}
        mapElement={<div style={{ width:'100%',height: `100%` }} />}
      />
      <Footer/>
    </div>)
  }
}
