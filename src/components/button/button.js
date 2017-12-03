import React from 'react'

const Button = (props) => {
  const styles ={
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a1e14d',
      textDecoration:'none',
      width: '180px',
      height: '80px',
      textAlign: 'center',
      color: 'white',
      fontSize: '20px'
    }
  }

  return (
    <a href="/info" style={styles.button}>{props.buttonInfo}</a>
  )
}

export default Button

