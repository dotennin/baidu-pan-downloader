import React, { Component } from 'react'
import { ITabProps, ITabsProps } from './types'
import styled from 'styled-components'

const TabContainer = styled.div.attrs((props) => ({
  placeholder: props.placeholder,
}))`
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 8px 0 8px 0;
  overflow-x: hidden;
`

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: 0.5px;
  max-width: 100%;
`

const TabNavigation = styled.div.attrs((props) => ({
  placeholder: props.placeholder,
}))`
  display: flex;
  flex-direction: row;
`

const TabNavItem = styled.div.attrs((props: { active: boolean }) => ({
  active: props.active,
}))`
  box-sizing: border-box;
  transition: border-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  text-align: center;
  height: 45px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: ${(props) => (props.active ? '#003380' : 'rgba(0,0,0,0.6)')};
  padding-bottom: ${(props) => (props.active ? '8px' : '9px')};
  padding-top: 8px;
  border: 0 solid transparent;
  border-bottom-width: ${(props) => (props.active ? '2px' : '1px')};
  border-bottom-color: ${(props) => (props.active ? '#2f67bc' : '#e0e0e0')};
  :hover {
    background-color: #f5f7fb;
  }
  &.error {
    border-bottom-color: ${(props) => (props.active ? '#b00020 !important' : '')};
  }
  &.error span {
    color: #b00020 !important;
  }
`

const AllTabs = styled.div.attrs((props: { tabs: number; activeTab: number }) => ({
  tabs: props.tabs,
  activeTab: props.activeTab,
}))`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: -${(props) => props.activeTab * 100}%;
  width: ${(props) => props.tabs * 100}%;
  transition: left 0.3s ease-in-out;
`

const TabWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
`

class Tabs extends Component<ITabsProps, unknown> {
  protected static defaultProps: Pick<ITabsProps, 'activeTab'> = {
    activeTab: 0,
  }

  public render() {
    const {
      props: { children, onChange, activeTab, ...rest },
    } = this

    return (
      <TabContainer className={'tabContainer'} {...rest}>
        <TabNavigation className={'tabNav'}>
          {children.map((child: React.ReactElement<ITabProps>, key) => {
            if (!child) return null
            return (
              <TabNavItem
                className={child.props.error ? ' tab error ' : ' tab '}
                key={key}
                onClick={() => {
                  if (typeof onChange === 'function') {
                    onChange(child, key)
                  }
                }}
                active={key === activeTab}
              >
                <ButtonText
                  style={{ padding: '0 13px' }}
                  color={key === activeTab ? 'primary' : 'default'}
                  css={`
                    color: ${key === activeTab ? '#2F67BC' : '#666'};
                  `}
                >
                  {child.props && child.props.name ? child.props.name : 'Tab ' + key}
                </ButtonText>
              </TabNavItem>
            )
          })}
        </TabNavigation>
        <AllTabs activeTab={activeTab} tabs={children.length}>
          {children.map((child, index) => {
            return <TabWrapper key={index}>{child}</TabWrapper>
          })}
        </AllTabs>
      </TabContainer>
    )
  }
}

export { Tabs }
export { Tab } from './Tab'
