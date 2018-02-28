import { mount, shallow } from '@vue/test-utils'
import App from '@/App'
import Counter from '@/components/Counter.vue'

describe('App', () => {
  it.skip('renders', () => {
    console.log('shallow: ', shallow(App).html())
    console.log('mount: ', mount(App).html())
    expect(true).toBe(true)
  })
})
