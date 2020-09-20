import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue testing', () => {
  const wrapper = shallowMount(Counter, {  });

  test('test count is 0', ()=>{
    // expect(wrapper.find("#count_head").text()).toEqual('My count 0')
    expect(wrapper.find("#count_head").text()).toEqual("Counter now: 0");
  });

  test('test count is 1', async ()=>{
    await wrapper.find('#inc_count').trigger('click')
    expect(wrapper.find("#count_head").text()).toEqual("Counter now: 1");
  });
  
  test('test count is 3', async ()=>{
    await wrapper.find('#inc_count').trigger('click')
    await wrapper.find('#inc_count').trigger('click')
    expect(wrapper.find("#count_head").text()).toEqual("Counter now: 3");
  });

  test('test count is 2', async ()=>{
    await wrapper.find('#dec_count').trigger('click')
    expect(wrapper.find("#count_head").text()).toEqual("Counter now: 2");
  });

  test('test count is 1', async ()=>{
    await wrapper.find('#dec_count').trigger('click')
    expect(wrapper.find("#count_head").text()).toEqual("Counter now: 1");
  });

  test('test count is 1', async ()=>{
    await wrapper.find('#inc_count').trigger('click')
    await wrapper.find('#dec_count').trigger('click')
    expect(wrapper.find("#count_head").text()).toEqual("Counter now: 1");
  });
})

