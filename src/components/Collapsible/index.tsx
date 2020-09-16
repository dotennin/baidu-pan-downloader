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
  &:focus {
    background-color: rgba(25, 118, 210, 0.12);
  }
  .content {
    transition: height 0.3s;
    min-height: 0;
    overflow: hidden;
    &.finally {
      overflow: visible;
    }
  }
`

const config = { attributes: true, childList: true, subtree: true }

const Collapsible = React.memo((props: ICollapsible) => {
  const { variant, title, addendum, children, nonIcon, toggleCollapses, ...rest } = props
  const container = useRef(null)
  const content = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')
  const [open, setOpen] = useState(Boolean(props.expanded))

  // these are to make the component realize that it's content has changed
  const [random, setRandom] = useState(1)
  const [observer] = useState(
    new MutationObserver(() => {
      setRandom(Math.random())
    })
  )

  const calcHeight = (container: React.MutableRefObject<any>) => {
    if (!open) {
      return '0px'
    }
    // if (variant === 'arrowLeft') {
    //   return 'auto'
    // }

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

  useLayoutEffect(() => {
    setHeight(calcHeight(container))

    // these are to make the component realize that it's content has changed
    if (observer && content.current) {
      observer.disconnect()
      observer.observe(content.current, config)
    }
  }, [open, random])
  const handleClick = () => {
    setOpen(!open)
    typeof toggleCollapses === 'function' && toggleCollapses(!open)
  }

  return (
    <>
      {variant === 'arrowLeft' ? (
        <StyledBox className={open ? 'collapsible open' : 'collapsible'} {...rest}>
          <GridRow style={{ width: '100%' }}>
            {!nonIcon && (
              <ActionButton
                icon={open ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                onClick={handleClick}
                size={'small'}
                css={`
                  button {
                    width: auto;
                    height: auto;
                    span {
                      width: auto;
                      height: 18px;
                    }
                  }
                  svg {
                    width: 18px;
                    height: 18px;
                  }
                `}
              />
            )}
            <GridRow style={{ flex: '1 1 auto', maxWidth: '90%' }}>
              <span
                onClick={handleClick}
                css={`
                  -webkit-font-smoothing: antialiased;
                  color: rgba(0, 0, 0, 0.87);
                  list-style: none;
                  -webkit-tap-highlight-color: transparent;
                  cursor: pointer;
                  box-sizing: inherit;
                  margin: 0;
                  text-align: left;
                  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                  font-weight: 400;
                  line-height: 1.5;
                  letter-spacing: 0.00938em;
                  width: 100%;
                  position: relative;
                  margin-left: ${nonIcon ? '18px' : '4px'};
                  &:hover {
                    background-color: rgba(0, 0, 0, 0.04);
                  }

                  word-break: break-all;
                  overflow: auto;
                  //text-overflow: ellipsis;
                  white-space: nowrap;
                `}
              >
                {title}
              </span>
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
              <ActionButton
                icon={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                onClick={handleClick}
                size="large"
              />
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
          <ActionButton icon={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} onClick={handleClick} size="large" />
        </StyledBox>
      )}
    </>
  )
})
Collapsible.displayName = 'Collapsible'

export { Collapsible }
