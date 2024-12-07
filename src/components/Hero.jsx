import React from 'react'
import { Container } from '@mantine/core'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <div className={classes.hero}>
        <div className={classes.heroinner}>
            Hero Component Left
        </div>
    </div>
  )
}

export default Hero