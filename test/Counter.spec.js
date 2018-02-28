import { shallow, renderToString } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.contains('.result')).toBe(true)
    expect(wrapper.contains('button')).toBe(true)
  })

  it('counts', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.find('.result').text()).toBe('0')
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.result').text()).toBe('1')
  })
})
