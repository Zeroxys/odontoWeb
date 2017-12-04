import React from 'react'
import Button from '../button/button'

const MainContent = (props) => {

  console.log(props.backgroundImage)

  let styles = {
    positionBackground : {
      backgroundImage : `url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '50%',  
      height: '600px'
    },

    infoContainer : {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sectionsL',
      color: '#303334',
      width: '90%',
      height: '400px',
      justifyContent : `space-around`,
      alignItems: `flex-${props.textPosition}`,
    }
  }

  return (
    <section className="mainContent">
    {props.imageRigth ? <div style={styles.positionBackground}></div> : null }      
    <div className="contentInfo">

      <div style={styles.infoContainer} >
        <h3 style={{fontSize:'30px'}}>Tu sonrisa paso por paso</h3>
        <h5 style={{fontSize:'16px', fontFamily:'sectionsL'}}>5 cosas que deberias saber acerca de tu sonrisa</h5>
        <p>Cepillarse los dientes con regularidad es importante, pero el cepillado en el orden
          correcto también es fundamental. 
          Muchas personas manejan todo el proceso de cepillarse
          los dientes a su manera y tienen el hábito antes de ir a la cama...</p>
        <Button buttonInfo="Mas informacíon"/>
      </div>

    </div>
    {props.imageRigth ? null : <div style={styles.positionBackground}></div> }
  </section>  
  )
}

export default MainContent
