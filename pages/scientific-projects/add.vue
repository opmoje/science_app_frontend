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
                label="Название проекта*:"
                description="Чем более развернутее будет название, тем легче мы сможем подобрать подходящих исполнителей для научного проекта."
                type="text"
                v-model="name"
                required
              />
              <CTextarea
                label="Описание проекта*:"
                description="Достаточно 4-5 предложений."
                rows="5"
                v-model="description"
                required
              />
              <div role="group" class="form-group">
                <label>Тип научного проекта*:</label>
                <v-select
                  :options="project.types"
                  v-model="projectType"
                  placeholder="Выберите из списка"
                >
                </v-select>
              </div>
              <div role="group" class="form-group">
                <label>Необходимые навыки, один или несколько</label>
                <v-select
                  :options="project.skills"
                  v-model="hardSkills"
                  multiple
                  placeholder="Выберите навык из списка или введите свой и нажмите Enter"
                >
                </v-select>
              </div>
              <CRow>
                <CCol lg="6">
                  <CInput
                    label="Дата начала проекта*:"
                    v-model="dateFrom"
                    type="date"
                    required="required"
                  />
                </CCol>
                <CCol lg="6">
                  <CInput
                    label="Дата окончания проекта*:"
                    v-model="dateTo"
                    type="date"
                    required="required"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="6">
                  <CInput
                    label="Объем бюджетных средств, в рублях"
                    v-model="budget"
                    append="Руб"
                    description="Укажите необходимый бюджет под научный проект"
                  />
                </CCol>
                <CCol lg="6">
                  <CInput
                    v-model="budgetSource"
                    label="Источник финансирования"
                    description="Укажите название источника финансирования"
                  />
                </CCol>
              </CRow>
              <div class="form-actions">
                <CAlert show color="danger" v-if="error">{{ error }}</CAlert>
                <CButton
                  @click="submitForm"
                  color="primary"
                  :disabled="sending"
                >
                  <template v-if="!sending">
                    Добавить
                  </template>
                  <template v-else>
                    Отправляем...
                  </template>
                </CButton>
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
        name: 'A look inside the black box: Using graph-theoretical descriptors to interpret a Continuous-Filter Convolutional Neural Network (CF-CNN) trained on the global and local minimum energy structures of neutral water clusters',
        description: 'We propose a Synthetic Coordinate Recommendation system using a user Training Error based Correction approach (SCoR-UTEC). Synthetic Euclidean coordinates are assigned by SCoR system to users and items, so that, when the system converges, the distance between a user and an item provides an accurate prediction of the user\'s preference for that item. In this paper, after the SCoR execution, we introduce a stage called UTEC to correct the SCoR recommendations taking into account the error on the training set between users and items and their proximity in the synthetic Euclidean space of SCoR. UTEC is also applicable on any model-based recommender system with positive training error like SCoR. The experimental results demonstrate the efficiency and high performance of the proposed second stage on real world datasets. © 2020 ACM.',
        projectType: null,
        hardSkills: [],
        dateFrom: null,
        dateTo: null,
        budget: 1000000,
        budgetSource: 'Государственный фонд',
        sending: false,
        error: '',
        project: {
          types: [
            {
              value: 'Article',
              label: 'Статья'
            },
            {
              value: 'Book',
              label: 'Книга'
            },
            {
              value: 'Conference',
              label: 'Конференция'
            },
            {
              value: 'Editorial',
              label: 'Редакционная статья'
            },
            {
              value: 'Letter',
              label: 'Рукопись'
            },
            {
              value: 'Note',
              label: 'Заметки'
            },
            {
              value: 'Review',
              label: 'Обзор'
            }
          ],
          public: [
            {
              value: "1",
              label: 'Проект виден всем'
            },
            {
              value: "0",
              label: 'Проект видите только Вы'
            }
          ],
          skills: [
            {
              value: '/api/skill_hards/1',
              label: 'Математика'
            },
            {
              value: '/api/skill_hards/2',
              label: 'Дискретная математика'
            },
            {
              value: '/api/skill_hards/3',
              label: 'Механика'
            },
            {
              value: '/api/skill_hards/4',
              label: 'Астрономия'
            },
            {
              value: '/api/skill_hards/5',
              label: 'Физика'
            },
            {
              value: '/api/skill_hards/6',
              label: 'Радиофизика'
            },
            {
              value: '/api/skill_hards/7',
              label: 'Оптика'
            },
            {
              value: '/api/skill_hards/8',
              label: 'Квантовая физика'
            },
            {
              value: '/api/skill_hards/9',
              label: 'Неорганическая химия'
            },
            {
              value: '/api/skill_hards/10',
              label: 'Электрохимия'
            },
            {
              value: '/api/skill_hards/11',
              label: 'Химия высоких энергий'
            }
          ]
        }
      }
    },
    methods: {
      async submitForm() {
        this.error = ''

        if (
          !this.name
          || !this.description
          || !this.projectType
          || !this.dateFrom
          || !this.dateTo
        ) {
          this.error = 'Заполните все поля со звездочкой*'
          return false;
        }

        let hardSkills = [];

        if (this.hardSkills.length) {
          for (var key in this.hardSkills) {
            if (this.hardSkills.hasOwnProperty(key)) {
              hardSkills.push(this.hardSkills[key].value)
            }
          }
        }

        const scientificProject = {
          name: this.name,
          description: this.description,
          type: this.projectType.value,
          neededHardSkills: hardSkills,
          dateFrom: this.dateFrom,
          dateTo: this.dateTo,
          public: true,
          budget: this.budget,
          budgetSource: this.budgetSource,
          //TODO: user from store
          user: '/api/users/10895'
        }

        this.sending = true

        this.$api.scientificProjects.create(scientificProject)
          .then((res) => {
            this.sending = false
            this.$router.push({name: 'scientific-projects-id', params: {id: res.id}})
          })
          .catch((err) => {
            this.sending = false

            if (err.response) {
              switch (err.response.status) {
                case 400:
                  alert("Ошибка отправки, в форме допущены ошибки")
                  break
              }
            }
          })
      }
    }
  }
</script>
