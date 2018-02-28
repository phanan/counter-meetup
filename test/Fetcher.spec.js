import sinon from 'sinon'
import { shallow } from '@vue/test-utils'
import Fetcher from '@/components/Fetcher.vue'
import store from '@/store'

describe('Fetcher', () => {
  it('fetches', () => {
    store.fetch = sinon.stub()
    const wrapper = shallow(Fetcher)
    wrapper.find('button').trigger('click')
    expect(store.fetch.called).toBe(true)
  })
})
