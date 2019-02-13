/**
 * Jest Setup
 *
 */

import { axe, toHaveNoViolations } from 'jest-axe'
import fakeProps from 'react-fake-props'
import { mount, render, shallow } from './enzyme'
import ReactDOMServer from 'react-dom/server'
import fs from 'fs-extra'
import onceImporter from 'node-sass-once-importer'
import path from 'path'
import sass from 'node-sass'
import { toBeType } from 'jest-tobetype'
import toJson from 'enzyme-to-json'

export {
  fakeProps, // we have also our own replacement function called "fakeAllProps"
  shallow,
  mount,
  render,
  toJson,
  axe,
  toHaveNoViolations
}

expect.extend({ toBeType })
expect.extend(toHaveNoViolations)

export const loadScss = file => {
  try {
    const sassResult = sass.renderSync({
      file: file,
      includePaths: [path.resolve(__dirname, '../../style/core/')],
      importer: [onceImporter()]
    })
    return String(sassResult.css)
  } catch (e) {
    console.log('Error', e)
  }
}

export const loadImage = async imagePath =>
  await fs.readFile(path.resolve(imagePath))

export const toHtml = Component =>
  ReactDOMServer.renderToStaticMarkup(Component)

export const axeComponent = async (...components) =>
  await axe(components.map(Component => toHtml(Component)).join('\n'))

// global.shallow = enzyme.shallow
// global.render = enzyme.render
// global.mount = enzyme.mount

function jestSetup() {}

export default jestSetup
