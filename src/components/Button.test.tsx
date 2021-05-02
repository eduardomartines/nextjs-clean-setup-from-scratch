import renderer from 'react-test-renderer'
import { Button } from './Button'

describe('Button', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Button label="Testing" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
