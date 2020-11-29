export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavDropdown',
        name: 'Мониторинг деятельности',
        route: '/',
        icon: 'cil-speedometer',
        items: [
          {
            name: 'За текущий год',
            to: '/'
          },
          {
            name: 'За исторический период',
            to: '/historical'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Научные проекты',
        to: '/scientific-projects',
        icon: 'cil-spreadsheet',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Научные труды',
        to: '/scientific-jobs',
        icon: 'cil-book',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Поиск исследователей',
        to: '/candidates/search',
        icon: 'cil-education',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Актуальные конкурсы',
        route: '/actual-contests',
        icon: 'cil-gift',
        items: [
          {
            name: `Персонализированная подборка`,
            to: '/'
          },
          {
            name: 'Подборка под команду',
            to: '/'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Анализ графов',
        route: '/graph-analysis',
        icon: 'cil-fork',
        items: [
          {
            name: `Соавторы`,
            to: '/'
          },
          {
            name: 'Тематики',
            to: '/'
          },
          {
            name: 'Цитирования',
            to: '/'
          },
          {
            name: 'Временный контекст',
            to: '/'
          },
          {
            name: 'Графы внутри ВУЗа',
            to: '/'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Анализ команды',
        route: '/team-analysis',
        icon: 'cil-people',
        items: [
          {
            name: `По Белбину`,
            to: '/'
          },
          {
            name: 'По MMORPG',
            to: '/'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Ваш психологический профиль',
        route: '/your-psychological-profile',
        icon: 'cil-face',
        items: [
          {
            name: `Ролевая модель`,
            to: '/'
          },
          {
            name: 'По Белбину',
            to: '/'
          },
          {
            name: 'merlinface.com',
            to: '/'
          },
          {
            name: 'Компетентностный профиль',
            to: '/'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Профиль университета 20.35',
        to: '/todol',
        icon: 'cil-building',
      }
    ]
  }
]
