import React from 'react'
import Button from '../button/button'

const MainContent = (props) => {

  if(props.imagePlace) {
    return (
      <section className="mainContent">
      <div className="contentImage"></div>
      <div className="contentInfo">
        <div className="infoContainer">
          <h3 style={{fontSize:'30px'}}>Tu sonrisa paso por paso</h3>
          <h5 style={{fontSize:'16px', fontFamily:'sectionsL'}}>5 cosas que deberias saber acerca de tu sonrisa</h5>
          <p style={{color:'grey'}}>Cepillarse los dientes con regularidad es importante, pero el cepillado en el orden
           correcto también es fundamental. 
           Muchas personas manejan todo el proceso de cepillarse
           los dientes a su manera y tienen el hábito antes de ir a la cama...</p>
          <Button buttonInfo="Mas informacíon"/>
        </div>
      </div>
    </section>  
    )
  }

  return (
    <section className="mainContent" onClick={props.imagePlace}>
      <div className="contentInfo">
        <div className="infoContainer">
          <h3 style={{fontSize:'30px'}}>Tu sonrisa paso por paso</h3>
          <h5 style={{fontSize:'16px', fontFamily:'sectionsL'}}>5 cosas que deberias saber acerca de tu sonrisa</h5>
          <p style={{color:'grey'}}>Cepillarse los dientes con regularidad es importante, pero el cepillado en el orden
           correcto también es fundamental. 
           Muchas personas manejan todo el proceso de cepillarse
           los dientes a su manera y tienen el hábito antes de ir a la cama...</p>
          <Button buttonInfo="Mas informacíon"/>
        </div>
      </div>
      <div className="contentImage"></div>
    </section>
  )
}

export default MainContent
