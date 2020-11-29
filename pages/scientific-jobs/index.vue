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
                    Научные труды
                    <span v-if="total">({{total}} шт)</span>
                  </strong>
                </CCol>
                <CCol col="2" class="text-right">
                  <CButtonGroup>
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
                  <div>Название</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Автор</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Тип работы</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Опубликован в</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Цитирований</div>
                </th>
                <th class="" style="vertical-align: middle; overflow: hidden;">
                  <div>Ссылка</div>
                </th>
              </tr>
              </thead>
              <tbody class="position-relative">
              <tr
                v-for="item in items"
                :key="item.id"
              >
                <td>
                  {{ item.name }}
                </td>
                <td>
                  <div>
                    <CIcon name="cif-ru" height="25"/>
                    {{ item.author.displayName }}
                  </div>
                  <div class="small text-muted">
                    Научный сотрудник в {{ item.author.university.name }}
                  </div>
                </td>
                <td>
                  <strong>
                    {{ item.type }}
                  </strong>
                </td>
                <td>
                  <div class="clearfix">
                    <div>
                      <strong>
                        {{ item.aggregationType }}
                      </strong>
                    </div>
                    <div>
                      <small class="text-muted">
                        {{ $formatDate(item.publicationDate) }}
                      </small>
                    </div>
                  </div>
                </td>
                <td>
                  {{ item.citedCount }}
                </td>
                <td>
                  <CLink
                    :href="item.link"
                    target="_blank"
                  >
                    Ссылка
                  </CLink>
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
      const {page, author} = query

      return await $api.scientificJobs.findAll(page, author)
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
      return {

      }
    },
    watchQuery: ['page', 'author'],
  }
</script>
