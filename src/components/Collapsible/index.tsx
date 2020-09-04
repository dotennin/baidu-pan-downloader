import React, { useRef, useLayoutEffect, useState } from 'react'
import { Spacer } from '../Layout'
import { ActionButton } from '../ActionButton'
import { GridCol, GridRow } from '../Layout'
import { ICollapsible } from './types'
import styled from 'styled-components'

const H4 = styled.h3`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  margin: 0;
  letter-spacing: normal;
`

const Body2 = styled.p`
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: 0.5px;
  margin: 0;
`

const StyledBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .content {
      transition: height .3s;
      min-height: 0;
      overflow: hidden;
    },
    .content.open {
      transition: height .3s;
    }
    .content.open.finally {
      overflow: visible;
    }
    #close_collapse {
      &:focus {
        background-color: transparent;
      }
      &:active {
        background-color: transparent;
      }
      margin: auto;
      width: 32px;
      height: 32px;
    },
`

const calcHeight = (props: any, container: any) => {
  if (!props.open) {
    return '0px'
  }

  //make clone element, append it to body to get height, remove it to clean up
  const element = container.current.cloneNode(true) as HTMLElement
  element.style.width = container.current.getBoundingClientRect().width + 'px'
  element.style.position = 'absolute'
  element.style.left = '-100vw'
  element.style.height = 'auto'
  document.getElementsByTagName('body')[0].appendChild(element)

  const height = element.getBoundingClientRect().height + 'px'
  document.getElementsByTagName('body')[0].removeChild(element)

  setTimeout(() => {
    if (container && container.current && container.current.className.indexOf('finally') <= 0) {
      container.current.className += ' finally'
    }
  }, 400)
  return height
}

const config = { attributes: true, childList: true, subtree: true }

const Collapsible = (props: ICollapsible) => {
  const container = useRef(null)
  const content = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')

  // these are to make the component realize that it's content has changed
  const [random, setRandom] = useState(1)
  const [observer] = useState(
    new MutationObserver(() => {
      setRandom(Math.random())
    })
  )

  useLayoutEffect(() => {
    setHeight(calcHeight(props, container))

    // these are to make the component realize that it's content has changed
    if (observer && content.current) {
      observer.disconnect()
      observer.observe(content.current, config)
    }

    // this works, so ignore the issue
  }, [props.open, random])

  const { variant, title, addendum, children, onClick, open, ...rest } = props
  return (
    <>
      {variant === 'arrowLeft' ? (
        <StyledBox className={open ? 'collapsible open' : 'collapsible'} {...rest}>
          <GridRow style={{ width: '100%', height: '67px' }}>
            <div style={{ margin: '15px' }}>
              {/* arrows are flipped/animated by CSS, but somehow still need different icons */}
              <ActionButton
                icon={open ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                onClick={onClick}
                size="large"
              />
            </div>
            <GridRow style={{ flex: '1 1 auto' }}>
              <GridCol align="left" sizeL={6}>
                <H4>{title}</H4>
              </GridCol>
              <GridCol align="left" sizeL={6}>
                <Body2>{addendum}</Body2>
              </GridCol>
            </GridRow>
          </GridRow>

          <div ref={container} style={{ height: height }} className={open ? 'content open' : 'content'}>
            <div ref={content}>{children}</div>
          </div>
        </StyledBox>
      ) : variant === 'arrowRight' ? (
        <StyledBox className={open ? 'collapsible open' : 'collapsible'} {...rest}>
          <GridRow style={{ width: '100%', height: '67px' }}>
            <GridRow style={{ flex: '1 1 auto' }}>
              <GridCol align="left" sizeL={6}>
                <H4>{title}</H4>
              </GridCol>
              <GridCol align="left" sizeL={6}>
                <Body2>{addendum}</Body2>
              </GridCol>
            </GridRow>
            <div style={{ margin: '15px' }}>
              <ActionButton icon={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} onClick={onClick} size="large" />
            </div>
          </GridRow>
          <div ref={container} style={{ height: height }} className={open ? 'content open' : 'content'}>
            <div ref={content}>{children}</div>
          </div>
        </StyledBox>
      ) : (
        <StyledBox className={open ? 'collapsible open' : 'collapsible'} {...rest}>
          <div ref={container} style={{ height: height }} className={open ? 'content open' : 'content'}>
            <div ref={content}>{children}</div>
          </div>
          <Spacer height={4} />
          <ActionButton
            id="close_collapse"
            icon={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            onClick={onClick}
            size="small"
          />
        </StyledBox>
      )}
    </>
  )
}

export { Collapsible }
