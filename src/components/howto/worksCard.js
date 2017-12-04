import React from 'react'

const WorkCard = () => {

  const styles = {
    cards : {
      width: 370,
      height: 350,
      paddingTop: 30,
    },
    img: {
      width: 370,
      height: 180,
    },

    infoContent : {
      fontFamily: 'sectionsL'
    }
  }

  return (
    <div style={styles.cards}>
      <img style={styles.img} src="http://dentalyopticadelparque.com/wp-content/uploads/estresshutters3.jpg" ></img>
      <div style={styles.infoContent}>
        <h3>Some title</h3>
        <p>Whitening toothpastes can lighten the tooth's color by about one shade. In contrast, light-activated whitening conducted in your dentist's office can make your teeth three to eight shades lighter.</p>
      </div>
    </div>
  )
}

export default WorkCard
