import dotHome from '@/assets/dot_home.svg'
import dotMine from '@/assets/dot_mine.svg'
import dotSkills from '@/assets/dot_skills.svg'
import dotWorks from '@/assets/dot_works.svg'
import dotExperience from '@/assets/dot_experience.svg'

export const themeColor = '#42a5f5'

export const titleList = [
  {
    svg: dotHome,
    title: '首页'
  },
  {
    svg: dotMine,
    title: '关于我'
  },
  {
    svg: dotSkills,
    title: '技能栈'
  },
  {
    svg: dotWorks,
    title: '作品集'
  },
  {
    svg: dotExperience,
    title: '经历'
  }
]

export const home = {
  avatar: require('@/assets/avatar.jpg'),
  avatarURL: 'https://github.com/wangxiujuni',
  title: '好的代码像粥一样，都是用时间熬出来的',
  details: ['我是王修珺', '一名前端工程师', 'wangxiujuni@qq.com']
}

export const mine = {
  title: '关于我',
  baseInfo: [
    {
      key: '年龄',
      value: '22岁',
      iconURL: require('@/assets/mine_age.svg')
    },
    {
      key: '学历',
      value: '本科',
      iconURL: require('@/assets/mine_education.svg')
    },
    {
      key: '城市',
      value: '上海',
      iconURL: require('@/assets/mine_location.svg')
    },
    {
      key: '状态',
      value: '求职中',
      iconURL: require('@/assets/mine_state.svg')
    }
  ],
  details: [
    '长春光华学院，通信工程，2019年毕业',
    '自学前端一年，喜欢设计，喜欢创造',
    '具备很强的自学能力，有良好的编码规范',
    '坚定前行，只看脚下'
  ]
}

export const skills = {
  title: '技术栈',
  skillTable: [
    {
      name: 'JavaScript',
      percent: '80%',
      backgroundColor: '#d6efff',
      color: '#2a7da9',
      borderLeftColor: ''
    },
    {
      name: 'HTML(5)&CSS(3)',
      percent: '70%',
      backgroundColor: '#d6efff',
      color: '#2a7da9',
      borderLeftColor: ''
    },
    {
      name: 'Vue',
      percent: '60%',
      backgroundColor: '#eaf6d0',
      color: '#6e9c0f',
      borderLeftColor: ''
    },
    {
      name: 'React',
      percent: '60%',
      backgroundColor: '#eaf6d0',
      color: '#6e9c0f',
      borderLeftColor: ''
    },
    {
      name: 'Nodejs',
      percent: '20%',
      backgroundColor: '#fdbc40',
      color: '#ff742a',
      borderLeftColor: ''
    },
    {
      name: 'TypeScript',
      percent: '20%',
      backgroundColor: '#fdbc40',
      color: '#ff742a',
      borderLeftColor: ''
    }
  ],
  otherSkills: [
    { name: 'Webpack', backgroundColor: '#00838f' },
    { name: 'Express', backgroundColor: '#4e342e' },
    { name: 'Sass', backgroundColor: '#00838f' },
    { name: 'jQuery', backgroundColor: '#4e342e' },
    { name: 'Jest', backgroundColor: '#00838f' },
    { name: '小程序', backgroundColor: '#4e342e' },
    { name: 'GraphQL', backgroundColor: '#00838f' }
  ],
  skillContent: [
    '使用Vue全家桶或React全家桶完成工程化项目编写',
    '掌握原生JS，ES6语法，遵守前端编码规范',
    '了解基于Restful API，GraphQL的前后端的交互过程',
    '了解TypeScript，Node.js，会使用常见的前端框架和构建工具'
  ]
}

export const works = {
  title: '作品集',
  worksList: [
    {
      className: 'remuse',
      name: 'React Hooks个人简历',
      url:'http://wang.codetech.top/remuse',
      details: [
        '使用React Hooks的Web简历',
        '对比class组件，深入了解了Hooks的思想',
        '加深了对css3的使用'
      ],
      imageURL: require('@/assets/remuse.jpg')
    },
    {
      className: 'weather',
      name: 'Vue PWA 天气app',
      url:'http://wang.codetech.top',
      details: [
        '使用Vue构建的PWA应用',
        '对PWA思想和Service Worker进行了了解',
        '对Workbox配置进行了了解'
      ],
      imageURL: require('@/assets/weather.jpg')
    }
  ]
}

export const experience = {
  title: '经历',
  companyImage: require('@/assets/guotouchuangzhi.png'),
  company: '吉林市国投创智科技有限公司',
  job: '实习web开发工程师',
  start: '2018/07',
  end: '2019/01',
  jobContent: [
    '使用vue全家桶和element-ui进行项目构建',
    '在实习的过程中不断自学，丰富自己的前端知识'
  ],
  contactIcon: [
    { className:'blog',
      url: 'https://www.cnblogs.com/wangxiujuni',
      icon: require('@/assets/blog.svg')},
    { className:'github',
      url: 'https://github.com/wangxiujuni',
      icon: require('@/assets/github.svg')},
    { 
      className:'wechat',
      // eslint-disable-next-line no-script-url
      url: 'javascript:void',
      icon: require('@/assets/wechat.svg')
    }
  ]
}
