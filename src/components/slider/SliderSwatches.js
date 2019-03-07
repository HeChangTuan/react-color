import React from 'react'
import reactCSS from 'reactcss'

import SliderSwatch from './SliderSwatch'

export const SliderSwatches = ({ onClick, hsl }) => {
  const styles = reactCSS({
    default: {
      swatches: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
      },
      swatch: {
        boxSizing: 'border-box',
        width: '14.2%',
        paddingRight: '1px',
        float: 'left',
      },
      clear: {
        clear: 'both',
      },
    },
  })

  return (
    <div style={ styles.swatches }>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset="1"
          active={
            Math.round(hsl.l * 100) / 100 === 1.0 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
          first
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".80"
          active={
            Math.round(hsl.l * 100) / 100 === 0.8 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
          first
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".65"
          active={
            Math.round(hsl.l * 100) / 100 === 0.65 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".50"
          active={
            Math.round(hsl.l * 100) / 100 === 0.5 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".35"
          active={
            Math.round(hsl.l * 100) / 100 === 0.35 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".20"
          active={
            Math.round(hsl.l * 100) / 100 === 0.2 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
          last
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset="0.0"
          active={
            Math.round(hsl.l * 100) / 100 === 0.0 &&
            Math.round(hsl.s * 100) / 100 === 0.5
          }
          onClick={ onClick }
          last
        />
      </div>
      <div style={ styles.clear } />
    </div>
  )
}

export default SliderSwatches
