<template>
  <div class="app-pagination">
    <div class="btn-group" role="group" aria-label="...">
      <template v-for="page in this.pageLinks">
        <nuxt-link
          v-if="!page.active"
          :to="{ query: { ...$route.query, page: page.number }}"
          class="btn btn-default"
        >
          {{page.title}}
        </nuxt-link>
        <span v-else class="btn btn-primary">{{page.title}}</span>

      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      hydraTotalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true
      },
    },
    data () {
      return {
        totalPages: 0,
        pagesFrom: 0,
        pagesTo: 0,
        showPages: 0,
        hydraNextPageLink: null,
        nextPageIndex: null,
        hydraPrevPageLink: null,
        prevPageIndex: null,
      }
    },
    computed: {
      pageLinks: function () {
        return this.buildPagination()
      }
    },
    watchQuery: ['page'],
    methods: {
      buildPagination () {
        this.totalPages = Math.ceil(this.hydraTotalItems / this.itemsPerPage)
        if (this.totalPages <= 1) {
          return;
        }

        const currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1
        this.pagesFrom = currentPage > 5 ? currentPage - 5 : 1
        this.pagesTo = (currentPage + 5 <= this.totalPages) ? currentPage + 5 : this.totalPages
        this.showPages = this.pagesTo - this.pagesFrom - 1;

        let showFirstPage = true,
          showLastPage = true,
          pageLinks = []

        for (let i = this.pagesFrom; i <= this.pagesTo; i++) {
          if (i === 1) {
            showFirstPage = false
          }

          pageLinks.push({
            number: i,
            title: i,
            active: i === currentPage
          })

          if (i === this.totalPages) {
            showLastPage = false
          }
        }

        // ссылка на предыдущую страницу
        if (currentPage > 1) {
          pageLinks.unshift({
            number: currentPage - 1,
            title: '← Назад',
            active: false
          })
        }

        if (currentPage < this.totalPages) {
          pageLinks.push({
            number: currentPage + 1,
            title: 'Далее →',
            active: false
          })
        }

        return pageLinks
      },
    }
  }
</script>

<style lang="scss" scoped>
  .app-pagination {
    font-size: 15px;
    font-family: "Montserrat", serif;
    text-align: center;
    margin: 20px 0 10px 0;
    box-sizing: border-box;

    @media (width < 500px) {
      margin: 0;
    }
  }


  .btn-group, .btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .btn-group > .btn:first-child {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .btn-group > .btn:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
  }

  .btn-group > .btn:first-child:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group > .btn:first-child {
    margin-left: 0;
  }

  .btn-group > .btn {
    position: relative;
    float: left;
    margin-left: -1px;
  }

  @media (width < 500px) {
    .btn-group > .btn:not(:first-child):not(:last-child) {
      display: none;
    }
  }

  .btn {
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #dedede;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (width < 500px) {
      padding: 5px 6px;
    }
  }

  .btn-default {
    color: #321fdb;
    background-color: #fff;
  }
  .btn-primary {
    color: #fff;
    background-color: #321fdb;
  }

</style>
