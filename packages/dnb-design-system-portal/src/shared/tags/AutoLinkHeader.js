import React from 'react'
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import classnames from 'classnames'
import { makeSlug } from '../../uilib/utils/slug'

const AutoLinkHeader = ({
  is: Component,
  useSlug,
  children,
  className,
  ...props
}) => {
  const id = makeSlug(children, useSlug)

  if (typeof children === 'string' && /\{#(.*)\}/.test(children)) {
    children = children.replace(/\{#(.*)\}/g, '').trim()
  }

  const clickHandler =
    className && /skip-anchor/g.test(String(className))
      ? null
      : () => {
          if (typeof window !== 'undefined' && id) {
            try {
              window.history.replaceState(undefined, undefined, `#${id}`)
            } catch (e) {
              console.log('Could not call replaceState:', e)
            }
          }
        }

  return (
    <Component
      className={classnames(`dnb-${Component}`, className)}
      {...props}
    >
      {clickHandler && id && (
        <AnchorLink
          offset="100"
          className="dnb-anchor anchor"
          title="Click to set a Anchor URL"
          id={id}
          href={`#${id}`}
          onClick={clickHandler}
          aria-hidden
        >
          #
        </AnchorLink>
      )}
      {children}
    </Component>
  )
}
AutoLinkHeader.propTypes = {
  is: PropTypes.string,
  useSlug: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
AutoLinkHeader.defaultProps = { is: 'h2', useSlug: null, className: null }

export default AutoLinkHeader
