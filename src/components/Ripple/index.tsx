import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { IRippleProps, IRippleState } from './types'
import styled, { keyframes } from 'styled-components'

const ripple = keyframes`
  to {transform: scale(24); opacity:0;}
`

const RippleContainer = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  transform: translateZ(0);
  border-radius: inherit;
  pointer-events: none;
`

const RippleWave = styled('span')<{ width: number; height: number; top: number; left: number }>`
  backface-visibility: hidden;
  position: absolute;
  border-radius: 50%;
  transform: scale(0.7);
  background: rgba(255, 255, 255, 0.32);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  animation: ${ripple} 1s forwards;
`

class Ripple extends Component<IRippleProps, IRippleState> {
  public constructor(props: IRippleProps) {
    super(props)

    this.state = {
      parent: undefined,
      ripples: {},
    }
  }

  public componentDidMount(): void {
    const parent = findDOMNode(this)?.parentNode
    if (parent) {
      parent.addEventListener('click', this.appendRipple)
      this.setState((state) => ({
        ...state,
        parent,
      }))
    }
  }

  public componentWillUnmount(): void {
    const {
      state: { parent },
    } = this
    if (parent) {
      parent.removeEventListener('click', this.appendRipple)
    }
  }

  public appendRipple = (event: any) => {
    const { currentTarget, clientX, clientY } = event
    const {
      props: { centered, color },
    } = this

    const { left, top, height, width } = currentTarget.getBoundingClientRect()
    const startDiameter = Math.min(height, width, 100)

    const centerOrigin = centered || clientX <= 0

    const clickOrigin = {
      top: centerOrigin ? Math.floor(height / 2) : clientY - top,
      left: centerOrigin ? Math.floor(width / 2) : clientX - left,
    }

    const rippleRadius = Math.floor(startDiameter / 2)

    const rippleOrigin = {
      top: clickOrigin.top - rippleRadius,
      left: clickOrigin.left - rippleRadius,
    }

    this.setState((state: any) => {
      const index = Date.now()
      return {
        ripples: {
          ...state.ripples,
          [index]: (
            <RippleWave
              className="rippleWave"
              color={color}
              data-index={index}
              key={index}
              width={startDiameter}
              height={startDiameter}
              top={rippleOrigin.top}
              left={rippleOrigin.left}
            />
          ),
        },
      }
    })
  }

  public removeRipple = (event: any) => {
    const {
      target: {
        dataset: { index },
      },
    } = event

    const {
      state: { ripples },
    } = this

    const indexNumber = Number(index)

    const newRipples = { ...ripples }

    delete newRipples[indexNumber]

    this.setState((state) => ({
      ...state,
      ripples: newRipples,
    }))
  }

  public render() {
    const {
      props: { className },
      removeRipple,
      state: { ripples },
    } = this

    return (
      <RippleContainer onAnimationEnd={removeRipple} className={`${className ? `${className} ` : ''}rippleContainer`}>
        {Object.keys(ripples).map((element) => ripples[element])}
      </RippleContainer>
    )
  }
}

export { Ripple }
