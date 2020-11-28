<template>
  <div>
    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard>
            <CCardHeader>
              <CIcon name="cil-pencil"/>
              Добавить научный проект
            </CCardHeader>

            <CCardBody>
              <CInput
                label="Название проекта"
                description="Чем более развернутее будет название, тем легче мы сможем подобрать подходящих исполнителей для научного проекта."
                type="text"
              />
              <CSelect
                label="Тип научного проекта"
                :options="project.types"
                placeholder="Выберите из списка"
              />
              <div role="group" class="form-group">
                <label>Необходимые навыки, один или несколько</label>
                <v-select
                  :options="project.types"
                  taggable
                  multiple
                  placeholder="Выберите навык из списка или введите свой и нажмите Enter"
                >
                </v-select>
              </div>
              <CRow>
                <CCol lg="6">
                  <CInput
                    label="Дата начала проекта"
                    type="date"

                  />
                </CCol>
                <CCol lg="6">
                  <CInput
                    label="Дата окончания проекта"
                    type="date"
                  />
                </CCol>
              </CRow>
              <CInput
                label="Объем бюджетных средств, в рублях"
                append="Руб"
                description="Укажите необходимый бюджет под научный проект"
              />
              <CRow form class="form-group">
                  <CInputRadioGroup
                    :options="project.public"
                    :checked="1"
                    :inline="true"
                  />
              </CRow>
              <div class="form-actions">
                <CButton type="submit" color="primary">Добавить</CButton>
                <CButton
                  @click="$router.go(-1)"
                  color="secondary"
                >
                  Отмена
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </transition>
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
          types: [
            {
              value: 'RESEARCH',
              label: 'Исследование'
            },
            {
              value: 'HYPOTHESIS_TEST',
              label: 'Проверка гипотезы'
            },
            {
              value: 'DISSERTATION',
              label: 'Диссертация'
            },
            {
              value: 'GRANT_MONETIZED',
              label: 'Грантовая работа'
            },
            {
              value: 'GRANT_MONETIZED_PERSPECTIVE',
              label: 'Проект, под который хотим подать заявку под грант'
            }
          ],
          sciences: [
            {
              value: 1,
              label: 'Математика'
            },
            {
              value: 2,
              label: 'Физика'
            },
            {
              value: 3,
              label: 'Информатика'
            }
          ],
          public: [
            {
              value: 1,
              label: 'Проект виден всем'
            },
            {
              value: 0,
              label: 'Проект видите только Вы'
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>
