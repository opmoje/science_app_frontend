export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Мониторинг деятельности',
        to: '/',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Научные проекты',
        to: '/scientific-projects',
        icon: 'cil-spreadsheet',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Научные работы',
        to: '/scientific-jobs',
        icon: 'cil-spreadsheet',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Поиск исследователей',
        to: '/candidates/search',
        icon: 'cil-education',
      }
    ]
  }
]
