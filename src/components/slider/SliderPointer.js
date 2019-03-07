import React from 'react'
import reactCSS from 'reactcss'

export const SliderPointer = () => {
  const styles = reactCSS({
    default: {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '3px',
        transform: 'translate(-7px, -4px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  })

  return <div style={ styles.picker } />
}

export default SliderPointer
