/**
 * Default Component Test Setup
 *
 */

import { createSerializer } from 'jest-emotion'
import fakeProps from 'react-fake-props'
import { mount, render } from './enzyme'
import toJson from 'enzyme-to-json'
import providerProps from './providerProps'

export { mount, render }
export { fakeProps }
export { toJson }
export { providerProps }

expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `jest-class-name-${index}`
    }
  })
)
