import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue testing', () => {
  const wrapper = shallowMount(Counter, {  });

  test('test count is 0', ()=>{
    expect(wrapper.text()).toContain("Counter now: 0");
  });

  test('test count is 1', async ()=>{
    await wrapper.find('#inc_count').trigger('click')
    expect(wrapper.text()).toContain("Counter now: 1");
  });
  
  test('test count is 3', async ()=>{
    await wrapper.find('#inc_count').trigger('click')
    await wrapper.find('#inc_count').trigger('click')
    expect(wrapper.text()).toContain("Counter now: 3");
  });

  test('test count is 2', async ()=>{
    await wrapper.find('#dec_count').trigger('click')
    expect(wrapper.text()).toContain("Counter now: 2");
  });

  test('test count is 1', async ()=>{
    await wrapper.find('#dec_count').trigger('click')
    expect(wrapper.text()).toContain("Counter now: 1");
  });

  test('test count is 1', async ()=>{
    await wrapper.find('#inc_count').trigger('click')
    await wrapper.find('#dec_count').trigger('click')
    expect(wrapper.text()).toContain("Counter now: 1");
  });
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
