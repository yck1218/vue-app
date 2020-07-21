const AAA =()=> import('@/components/layout/content/AAA')
// const Home =()=> import('@/components/Home')
const ContentMain =()=> import('@/components/layout/content/ContentMain')
const ContentTable =()=> import('@/components/layout/content/ContentTable')
const Char =()=> import('@/components/layout/content/Char')
const Txts =()=> import('@/components/layout/content/Txts')
const Goods =()=> import('@/components/layout/content/Goods')
export default [
    {
      id: 1,
      path: '/home/AAA',
      comm: AAA,
      title: '用户管理',
      icon: 'el-icon-user',
      children: [
        { id:11, path: '/home/contentMain', title: '活动管理', icon: 'el-icon-document', comm:ContentMain},
        { id:12, path: '/home/contentTable', title: '商品列表', icon: 'el-icon-setting', comm:ContentTable},
        { id:13, path: '/home/char', title: '聊天管理', icon: 'el-icon-chat-dot-round', comm:Char},
        { id:14, path: '/home/txts', title: '富文本框', icon: 'el-icon-reading', comm:Txts}
      ]
    },
    {
      id: 2,
      path:'/goods',
      comm: Goods,
      title: '商品管理',
      icon: 'el-icon-menu',
      children: [
        { id:21, path: '/goods', title:'新增商品', icon: 'el-icon-table-lamp', comm:Goods }
      ]
    }
  ]
  