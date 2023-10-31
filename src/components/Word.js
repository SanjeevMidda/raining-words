import React from 'react'

function Word({word, left, delay}) {

    let styles = {
        left: left,
        animationDelay: delay,
        zIndex: delay,
        animationDuration: `${delay}s`,
    }

  return (
    <h3 style={styles}>{word}</h3>
  )
}

export default Word