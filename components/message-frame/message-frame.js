// components/message-frame/message-frame.js
Component({
  options: {
    multipleSlots: true,
  },
  
  properties: {
    title: {
      type: String,
    }
  },
  
  externalClasses: ['message-frame-style'],
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleFrame() {
      this.triggerEvent('tapFrame',{},{})
    },
  }
})
