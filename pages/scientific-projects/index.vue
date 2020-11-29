<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CCard>
          <CCardHeader>
            <slot name="header">
              <CRow>
                <CCol col="10">
                  <CIcon name="cil-spreadsheet"/>
                  <strong>
                    Научные проекты
                    <span v-if="total">({{total}} шт)</span>
                  </strong>
                </CCol>
                <CCol col="2" class="text-right">
                  <CButtonGroup>
                    <router-link :to="{name: 'scientific-projects-add'}">
                      <CButton color="primary" size="sm">
                        + Добавить научный проект
                      </CButton>
                    </router-link>
                    <CButton color="secondary" size="sm" @click="$router.go(-1)">
                      Назад
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
            </slot>
          </CCardHeader>

          <CCardBody>

            <table class="table table-hover">
              <thead>
              <tr>
                <th>
                  <div>Проект</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Научный руководитель</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Тип работы</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Начало</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Окончание</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Необходимые навыки</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Бюджет</div>
                </th>
              </tr>
              </thead>
              <tbody class="position-relative">
              <tr
                v-for="item in items"
                :key="item.id"
              >
                <td>
                  <router-link :to="{name: 'scientific-projects-id', params: {id: item.id}}">
                    {{ item.name }}
                  </router-link>
                </td>
                <td>
                  <div>
                    <CIcon name="cif-ru" height="25"/>
                    {{ item.user.displayName }}
                  </div>
                  <div class="small text-muted">
                    Научный сотрудник в {{ item.user.university.name }}
                  </div>
                </td>
                <td>
                  <strong>
                    {{ item.type }}
                  </strong>
                </td>
                <td>
                  <div class="clearfix">
                      <span class="text-muted">
                        {{ $formatDate(item.dateFrom) }}
                      </span>
                  </div>
                </td>
                <td>
                  <div class="clearfix">
                      <span class="text-muted">
                        {{ $formatDate(item.dateTo) }}
                      </span>
                  </div>
                </td>
                <td>
                  <template v-if="item.neededHardSkills && item.neededHardSkills.length">
                    <span
                      v-for="(skill, index) in item.neededHardSkills"
                      :key="skill.id"
                    >
                      <span v-if="index > 0"> </span>
                      <CBadge color="info">{{ skill.name }}</CBadge>
                    </span>
                  </template>
                  <template v-else>
                    Не указаны
                  </template>
                </td>
                <td>
                  <template v-if="item.budget && item.budget > 0">
                    <div>
                      {{ item.budget }} Руб.
                    </div>
                    <div class="small text-muted">
                      <template v-if="item.budgetSource">
                        {{ item.budgetSource }}
                      </template>
                      <template v-else>
                        Источник неизвестен
                      </template>
                    </div>
                  </template>
                  <template v-else>
                    Без финансирования
                  </template>
                </td>
              </tr>
              </tbody>
            </table>
            <Pagination
              :hydra-total-items="this.total"
              :items-per-page="30"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import CTableWrapper from '@/components/base/Table.vue'
  import Pagination from '@/components/AppPagination'

  export default {
    components: {CTableWrapper, Pagination},
    async asyncData({$api, query}) {
      const {page} = query

      return await $api.scientificProjects.findAll(page)
        .then((response) => {
          return {
            items: response['hydra:member'],
            total: response['hydra:totalItems'],
            pagination: response['hydra:view'],
            perPage: 30,
          };
        })
        .catch(() => {
          // leave logic for global error handling for axios responses
        })
    },
    data: function () {
      return {}
    },
    watchQuery: ['page'],
  }
</script>
