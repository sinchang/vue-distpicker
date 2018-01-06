import { mount } from 'vue-test-utils'
import Distpicker from './'

test('it works', () => {
  const wrapper = mount(Distpicker)
  expect(wrapper.isVueInstance()).toBe(true)
})

test('dom corrent', () => {
  const wrapper = mount(Distpicker)
  expect(wrapper.findAll('select').length).toEqual(3)
})

test('set provId', () => {
  const wrapper = mount(Distpicker)
  wrapper.setProps({ ids: [110000] })
  expect(wrapper.props().ids).toEqual([110000])
})

