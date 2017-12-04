import React from 'react'
import WorkCard from './worksCard'

const Howto = () => {

  let works = [1, 2, 3, 4, 5, 6]
  let styles = {
    worksContent : {
      width: '100%',
      display: 'flex',
      flexDirection : 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }
  }

  return (
    <div className="howTo">
      <div>
        <h2 style={{fontFamily : 'sectionsL'}}>Nuestro Trabajo</h2>
      </div>
      <div style={styles.worksContent}>
        {works.map( element  => <WorkCard/>)}
      </div>
    </div>
  )
}

export default Howto