// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    theme: "light",
    list: [{
      id: 'form',
      name: '表单',
      open: false,
      pages: ['cell', 'slideview', 'form', 'uploader']
    }, {
      id: 'widget',
      name: '基础组件',
      open: false,
      pages: ['article', 'icons', 'badge', 'flex', 'footer', 'gallery', 'grid', 'loadmore', 'loading', 'panel', 'preview']
    }, {
      id: 'feedback',
      name: '操作反馈',
      open: false,
      pages: ['dialog', 'msg', 'half-screen-dialog', 'actionsheet', 'toptips']
    }, {
      id: 'nav',
      name: '导航相关',
      open: false,
      pages: ['navigation', 'tabbar']
    }, {
      id: 'search',
      name: '搜索相关',
      open: false,
      pages: ['searchbar']
    }]
  }
})
