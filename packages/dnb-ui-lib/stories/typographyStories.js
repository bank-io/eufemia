/**
 * Storybook Story
 *
 */

import React from 'react'
import { Wrapper, Box } from './helpers'
import styled from '@emotion/styled'

const stories = []
export default stories

const CustomStyle = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    background-color: rgba(0, 200, 200, 0.25);
    :only-child {
      background-color: rgba(255, 255, 122, 0.35);
    }
  }
  h1 ~ h1,
  h2 ~ h2,
  h3 ~ h3,
  h4 ~ h4,
  h5 ~ h5,
  h6 ~ h6 {
    background-color: rgba(213, 30, 149, 0.25);
    :only-child {
      background-color: rgba(0, 200, 200, 1);
    }
  }
  p {
    background-color: rgba(213, 30, 149, 0.25);
  }
`

const Typography = () => (
  <CustomStyle>
    <h1 className="dnb-h1">H1</h1>
    <h2 className="dnb-h2">H2</h2>
    <h3 className="dnb-h3">H3</h3>
    <h4 className="dnb-h4">H4</h4>
    <h5 className="dnb-h5">H5</h5>
    <h6 className="dnb-h6">H6</h6>
    <p className="dnb-p">
      Paragraph with Link{' '}
      <a className="dnb-anchor" href="#anchor">
        Anchor
      </a>{' '}
      Posuere eget
      <code>vestibulum</code> nostra odio varius <span>integer</span>
      ullamcorper curabitur mi
    </p>
    <p className="dnb-p">Another Paragraph</p>
  </CustomStyle>
)

stories.push([
  'Paragraphs',
  () => (
    <Wrapper className="dnb-spacing">
      <CustomStyle>
        <Box>
          <article>
            <h1 className="dnb-h1">H1</h1>
            <p className="dnb-p">Paragraph A</p>
            <p className="dnb-p">Paragraph B</p>
            <p className="dnb-p">Paragraph C</p>
          </article>
          <article>
            <h2 className="dnb-h2">H2</h2>
            <p className="dnb-p">Paragraph A</p>
            <p className="dnb-p">Paragraph B</p>
            <p className="dnb-p">Paragraph C</p>
          </article>
          <h2 className="dnb-h2">H3</h2>
        </Box>
      </CustomStyle>
    </Wrapper>
  )
])

stories.push([
  'Headings',
  () => (
    <Wrapper className="dnb-spacing">
      <Box>
        <Typography />
      </Box>
    </Wrapper>
  )
])

stories.push([
  'Small',
  () => (
    <Wrapper className="dnb-spacing">
      <CustomStyle>
        <Box>
          {/* p */}
          <p className="dnb-p">
            Posuere eget vestibulum <small>Small Text</small> integer{' '}
            <a className="dnb-anchor" href="#anchor">
              Normal Anchor
            </a>{' '}
            <a className="dnb-anchor" href="#anchor">
              <small>Small Anchor</small>
            </a>{' '}
            curabitur mi
          </p>
        </Box>
        <Box>
          {/* h1 */}
          <h1 className="dnb-h1">
            <small>Small H1</small> Normal H1
          </h1>
          <h1 className="dnb-h1">
            <small>Small only H1</small>
          </h1>
          <h1 className="dnb-h1 dnb-small">Small class H1</h1>
        </Box>
        <Box>
          {/* h2 */}
          <h2 className="dnb-h2">
            Normal H2 <small>Small H2</small>
          </h2>
          <h2 className="dnb-h2">
            <small>Small only H2</small>
          </h2>
          <h2 className="dnb-h2 dnb-small">Small class H2</h2>
        </Box>
        <Box>
          {/* h3 */}
          <h3 className="dnb-h3">
            Normal H3 <small>Small H3</small>
          </h3>
          <h3 className="dnb-h3">
            <small>Small only H3</small>
          </h3>
          <h3 className="dnb-h3 dnb-small">Small class H3</h3>
        </Box>
        <Box>
          {/* h4 */}
          <h4 className="dnb-h4">
            Normal H4 <small>H4 Small</small>
          </h4>
          <h4 className="dnb-h4">Normal H4</h4>
        </Box>
        <Box>
          {/* h5 */}
          <h5 className="dnb-h5">
            Normal H5 <small>H5 Small</small>
          </h5>
          <h5 className="dnb-h5">Normal H5</h5>
        </Box>
        <Box>
          {/* h6 */}
          <h6 className="dnb-h6">
            Normal H6 <small>H6 Small</small>
          </h6>
          <h6 className="dnb-h6">Normal H6</h6>
        </Box>
      </CustomStyle>
    </Wrapper>
  )
])

stories.push([
  'Headings outside of `dnb-spacing`',
  () => (
    <Wrapper>
      <Box>
        <Typography />
      </Box>
    </Wrapper>
  )
])
