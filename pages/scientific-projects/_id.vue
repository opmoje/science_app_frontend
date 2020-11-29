<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol col="10">
                <CIcon name="cil-spreadsheet"/>
                <strong>
                  Научный проект
                </strong>
              </CCol>
              <CCol col="2">
                <CButton block color="primary" size="sm" @click="$router.go(-1)">
                  Назад
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody v-if="item">
            <CRow>
              <CCol lg="6">
                <p>
                <span class="h2">
                  {{ item.name }}
                </span>
                </p>
                <p>
                  {{ item.description }}
                </p>
              </CCol>
              <CCol lg="6">
                <table class="table">
                  <tbody>
                  <tr>
                    <td style="width: 200px;border-top:0">
                      <p>
                        Научный руководитель
                      </p>
                    </td>
                    <td style="border-top:0">
                      {{ item.user.displayName }}
                      <div class="small text-muted">
                        Научный сотрудник в {{ item.user.university.name }}
                      </div>
                    </td>
                    <td style="width: 200px;border-top:0">
                      <p>
                        Тип научной работы
                      </p>
                    </td>
                    <td style="border-top:0">
                      <strong>
                        {{ item.type }}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Необходимые навыки
                      </p>
                    </td>
                    <td colspan="3">
                      <template v-if="item.neededHardSkills && item.neededHardSkills.length">
                    <span
                      v-for="(skill, index) in item.neededHardSkills"
                      :key="skill.id"
                    >
                      <span v-if="index > 0"> </span>
                      <CBadge color="primary">{{ skill.name }}</CBadge>
                    </span>
                      </template>
                      <template v-else>
                        Не указаны
                      </template>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Дата начала проекта
                      </p>
                    </td>
                    <td>
                      {{ $formatDate(item.dateFrom) }}
                    </td>
                    <td>
                      <p>
                        Дата окончания проекта
                      </p>
                    </td>
                    <td>
                      {{ $formatDate(item.dateTo) }}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>
                        Бюджет Руб.
                      </p>
                    </td>
                    <td>
                      {{ item.budget }}
                    </td>
                    <td>
                      <p>
                        Финансирование
                      </p>
                    </td>
                    <td>
                      <template v-if="item.budgetSource">
                        {{ item.budgetSource }}
                      </template>
                      <template v-else>
                        Источник неизвестен
                      </template>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <div class="h2" style="margin-bottom: 20px">
      Рекомендованные исполнители:
    </div>
    <CRow>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-education"/>
            <strong>Владислав</strong>
            <CSwitch
              class="float-right"
              size="sm"
              shape="pill"
              color="info"
              data-on="On"
              data-off="Off"
              :checked="false"
            />
            <strong class="float-right">
              Пригласить &nbsp;
            </strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >

                Научный сотрудник в
                <CIcon name="cif-ru" height="25"/>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Трудов опубликовано:
                <CBadge color="primary" shape="pill">7</CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Email:
                <CBadge color="secondary" shape="pill">raytracer@yandex.ru</CBadge>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import 'vue-select/dist/vue-select.css';

  export default {
    async asyncData({$api, params}) {
      return await $api.scientificProjects.find(params.id)
        .then((res) => {
          return {item: res};
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            alert('Запись не найдена')

          }
        })
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>
