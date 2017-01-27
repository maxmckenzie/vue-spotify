import Vue from 'vue'
import Releases from 'src/components/releases'

describe('Releases.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Releases)
    })
    expect(vm.$el.querySelector('.releases').textContent)
      .to.be.true
  })
})
