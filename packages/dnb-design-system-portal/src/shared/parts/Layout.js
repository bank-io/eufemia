/**
 * Page Component
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classnames from 'classnames'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/core'
import MainMenu from '../menu/MainMenu'
import Sidebar from '../menu/SidebarMenu'
import StickyMenuBar from '../menu/StickyMenuBar'
import { markdownStyle } from './Markdown'
import { buildVersion } from '../../../package.json'
import { MainMenuProvider } from '../menu/MainMenuContext'
import { SidebarMenuProvider } from '../menu/SidebarMenuContext'
import ToggleGrid from '../menu/ToggleGrid'
import {
  setPageFocusElement,
  scrollToLocationHashId
} from 'dnb-ui-lib/src/shared/tools'
import { Logo } from 'dnb-ui-lib/src'

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
  }
  componentDidMount() {
    // gets aplyed on "onRouteUpdate"
    setPageFocusElement('.dnb-app-content h1:nth-of-type(1)', 'content')

    // if url hash is defined, scroll to the id
    scrollToLocationHashId({ offset: 100 })
  }
  render() {
    const { children, location } = this.props

    if (/fullscreen/.test(location.search)) {
      return (
        <>
          <Content className="fullscreen-page">
            <ContentInner className="dnb-app-content-inner dev-grid-first">
              {children}
            </ContentInner>
          </Content>
          <ToggleGrid />
          <Footer />
        </>
      )
    }

    return (
      <MainMenuProvider>
        <SidebarMenuProvider>
          <Global styles={globalStyles} />
          <a className="dnb-skip-link dnb-button" href="#dnb-app-content">
            Skip to content
          </a>
          <MainMenu enableOverlay />
          <StickyMenuBar />
          <Wrapper className="content-wrapper">
            <Sidebar location={location} showAll={false} />
            <Content>
              <ContentInner className="dnb-app-content-inner dev-grid-first">
                {children}
              </ContentInner>
              <Footer />
            </Content>
          </Wrapper>
        </SidebarMenuProvider>
      </MainMenuProvider>
    )
  }
}

export default Layout

const globalStyles = css`
  ${'' /* html {
    scroll-behavior: smooth;
  } */}
  @media (max-width: 40em) {
    a.dnb-skip-link {
      display: none;
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between; /* pos Footer at the bottom */

  @media (max-width: 50em) {
    display: block;
  }
`

const Content = ({ className, children }) => (
  <ContentWrapper
    id="dnb-app-content"
    css={markdownStyle}
    className={classnames('dnb-spacing', 'dnb-app-content', className)}
  >
    {children}
  </ContentWrapper>
)
Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
Content.defaultProps = {
  className: null
}

const ContentWrapper = styled.main`
  position: relative;
  z-index: 2; /* heigher than styled.aside */

  width: 100%;
  overflow: visible;

  margin-left: 30vw; /* fallback */
  margin-left: var(--aside-width);
  padding: 0;

  /* we use padding here, insted of margin,
  because applyPageFocus is else scrolling the page unwanted
  height of StickyMenuBar - 1px border */
  padding-top: 4rem;

  .dnb-app-content-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: calc(100vh - 4rem); /* height of StickyMenuBar */
    padding: 2rem 5vw 2rem;
  }

  background-color: var(--color-black-background);
  border-left: 1px solid var(--color-black-border);

  /* make sure that Sidebar aside "styled.aside" gets the same max-width */
  @media (max-width: 50em) {
    margin-left: 0;
    padding-left: 0;
  }

  &.fullscreen-page {
    margin: 0;
    padding-top: 0;
    border: none;
  }

  /* for whider screens */
  &:not(.fullscreen-page) {
    .dnb-app-content-inner {
      @media (min-width: 70em) {
        max-width: 70rem;
      }
    }
  }
`

const ContentInner = styled.div`
  width: 100%;
  padding: 0 2rem;
`

const FooterWrapper = styled.footer`
  position: relative;
  z-index: 2; /* 1 heigher than aside */

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  border-top: 1px solid var(--color-black-border);
  background-color: var(--color-emerald-green);

  &,
  a {
    color: var(--color-white);
  }
  a {
    margin-left: 1rem;
  }
  small {
    padding: 0 2rem;
  }

  .toggle-grid {
    margin-left: 1rem;
  }
`
const Footer = () => (
  <FooterWrapper>
    <Logo height="40" color="white" />
    <small>
      Last Portal update: {buildVersion}
      <Link to="/license" className="dnb-no-anchor-underline">
        Copyright (c) 2018-present DNB.no
      </Link>
    </small>
    <span />
  </FooterWrapper>
)
