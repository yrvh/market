// components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Boolean,
    },
    title: {
      type: String
    }
  },
  externalClasses: ['button'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange() {
      this.triggerEvent('tapChange')
    }
  }
})
