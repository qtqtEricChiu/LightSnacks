import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://lightsnacks.netlify.app/',
  lang: 'zh-CN',
  title: 'LightSnacks!',
  author: {
    name: 'qtqt_Eric_Chiu',
    avatar: 'https://lspgal.net/2023/01/12/a2a18a0637ef5.png',
  },
  favicon: 'https://raw.githubusercontent.com/qtqtEricChiu/blog/main/resources/images/base/favicon.ico',
  subtitle: '轻小点 | 书之梦境——',
  description: '“满怀美梦的少年是现实主义者”',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/qtqtEricChiu',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
    title: '赞助',
    methods: [
      {
        name: '支付宝',
        url: '',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
    ],
  },
})
