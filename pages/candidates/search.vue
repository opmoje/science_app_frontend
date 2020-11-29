<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-education"/>
            Поиск исследователей
          </CCardHeader>

          <CCardBody>
            <div role="group" class="form-group">
              <label>Ключевые слова исследовательской деятельности для поиска сотрудников</label>
              <v-select
                :options="project.list2"
                taggable
                multiple
              >
              </v-select>
            </div>

            <div class="form-actions">
              <CButton type="submit" color="primary">Начать поиск</CButton>
              <CButton
                @click="$router.go(-1)"
                color="secondary"
              >
                Отмена
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import 'vue-select/dist/vue-select.css';

  export default {
    data: function () {
      return {
        project: {
          list1: [
            {
              value: 1,
              label: 'Экономика смысла'
            },
            {
              value: 2,
              label: 'Анализ сигналов'
            }
          ],
          list2: [
            {
              value: 1,
              label: 'Машинное обучение'
            },
            {
              value: 2,
              label: 'Big Data'
            },
            {
              value: 3,
              label: 'Python'
            },
            {
              value: 4,
              label: 'MATLAB'
            },
            {
              value: 5,
              label: 'Java'
            },
            {
              value: 6,
              label: 'HTML'
            },
            {
              value: 7,
              label: 'Java Script'
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>
