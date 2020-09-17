import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  const msg = 'new message'
  const wrapper = shallowMount(Counter, {
    props: { msg }
  });
  // test('test count 0, and click', ()=>{
  //   expect(wrapper.text()).toContain("My count 0");
  //   wrapper.find('#cntplus').trigger('click')
  // });
  test('test count is 1', async ()=>{
    await wrapper.find('#cntplus').trigger('click')
    expect(wrapper.text()).toContain("My count 1");
  });
  // expect(wrapper.text()).toContain("My count 1");
})

// it('it increments the counter by 1 when #inc button is clicked', async () => {
//   const wrapper = shallowMount(Counter)
//   expect(wrapper.find("#cnt-value").text()).toEqual('My count 0')
  
//   await wrapper.find('#cntplus').trigger('click')
//   expect(wrapper.find("#cnt-value").text()).toEqual('My count 1')
// })

/*
it('it increments the counter by 1 when #inc button is clicked', async () => {
  const wrapper = shallowMount(Counter)
  expect(wrapper.find("#c").text()).toContain('Counter : 0')
  
  await wrapper.find('#inc').trigger('click')
  expect(wrapper.find("#c").text()).toContain('Counter : 1')
})

*/
