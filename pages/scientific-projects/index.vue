<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CCard>
          <CCardHeader>
            <slot name="header">

              <CRow class="align-items-center">
                <CCol col="10">
                  <CIcon name="cil-grid"/>
                  Научные проекты
                </CCol>
                <CCol col="2">
                  <router-link :to="{name: 'scientific-projects-add'}">
                    <CButton block color="primary">
                      Добавить научный проект
                    </CButton>
                  </router-link>
                </CCol>
              </CRow>
            </slot>
          </CCardHeader>

          <CCardBody>
            <CDataTable
              :hover="table.hover"
              :striped="table.striped"
              :bordered="table.bordered"
              :small="table.small"
              :fixed="table.fixed"
              :items="table.items"
              :fields="table.fields"
              :items-per-page="table.small ? 10 : 5"
              :dark="table.dark"
              pagination
            >
              <template #status="{item}">
                <td>
                  <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import CTableWrapper from '@/components/base/Table.vue'

  export default {
    components: {CTableWrapper},
    data: function () {
      return {
        table: {
          items: [
            {username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
            {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
            {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
            {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
            {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
            {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
            {
              username: 'Avram Tarasios',
              registered: '2012/02/01',
              role: 'Staff',
              status: 'Banned',
              _classes: 'table-success'
            },
            {username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
            {username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
            {username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
            {
              username: 'Carwyn Fachtna',
              registered: '2012/01/01',
              role: 'Member',
              status: 'Active',
              _classes: 'table-success'
            },
            {username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
            {username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
            {username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
            {username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
            {username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
            {username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
            {username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
            {username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
            {username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
            {username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
            {username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
            {
              username: 'Einar Randall',
              registered: '2012/02/01',
              role: 'Admin',
              status: 'Inactive',
              _classes: 'table-danger'
            },
            {username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
            {username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
          ],
          fields: [
            'Название', 'Предмет', 'Руководитель', 'Институт, факультет и кафедра', 'Дата начала', 'Дата окончания', 'статус'
          ],
          hover: true,
          striped: true,
          bordered: false,
          small: true,
          fixed: false,
          dark: false
        },
      }
    },
    methods: {
      getBadge(status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      }
    }
  }
</script>
