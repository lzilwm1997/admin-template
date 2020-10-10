/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table1',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table1',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  alwaysShow: true, //  总是显示根路由
  children: [
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/table/dynamic-table/index'),
    //   name: 'DynamicTable',
    //   meta: { title: 'Dynamic Table' }
    // },
    // {
    //   path: 'drag-table',
    //   component: () => import('@/views/table/drag-table'),
    //   name: 'DragTable',
    //   meta: { title: 'Drag Table' }
    // },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/table/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'Inline Edit' }
    // },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '导出excle表格' }
    },
    {
      path: 'tinymce',
      component: () => import('@/views/table/tinymce'),
      name: 'Tinymce',
      meta: { title: '富文本编辑器' }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/table/dropzone'),
      name: 'Dropzone',
      meta: { title: '文件拖拽上传' }
    }
  ]
}
export default tableRouter
