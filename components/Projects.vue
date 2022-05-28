<template>
  <div class="projects-container mt-9 mb-9">
    <h1  class="text-2xl mb-8 tracking-wider">Projects I've worked on</h1>
    <div class="flex justify-center">
      <div class="project-lists  mb-8">
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div v-for="(proj, key) in projects" :key="key" class="project">
            <div class="card shadow-md project-card">
              <div class="p-4">
                <p class="text-lightblue font-bold tracking-wider text-2xl mb-2">{{ proj.name }}</p>
                <p class="text-sm mt-2">{{ proj.description }}</p>
                <a class="text-sm mt-2 link" :href="proj.link" target="blank">{{ proj.link }}</a>
              </div>
              <div class="preview">
                <img :class="`img-${proj.img}`" :src="loadImg(proj.img)" />
              </div>
            </div>
          </div>

          <template #customPaging="page">
            <div :class="`custom-dot ${page}`"/>
          </template>
        </VueSlickCarousel>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import VueSlickCarousel from 'vue-slick-carousel'

  export default Vue.extend({
    components: {
      VueSlickCarousel
    },
    data() {
      return {
        settings: {
          dots: true,
          focusOnSelect: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          touchThreshold: 5,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        },
        projects: [
          { name: 'Access',
            description: 'Next JS  • Typescript • Prisma  • Graphql • PostgreSQL ',
            link: 'https://app.access.com',
            img: 'access-preview.png',
            bg: 'bg-white'
          },
          { name: 'QSpace App',
            description: 'Express JS • Vue JS • Vuex • PostgreSQL • Bootstrap',
            link: 'https://qspaceapp.com',
            img: 'qspace-preview.png',
            bg: 'bg-white'
          },
          { name: 'QTime App',
            description: 'Laravel • Vue JS • Vuex • PostgreSQL • Bootstrap',
            link: 'https://qtimesoftware.com',
            img: 'qtime-preview.png',
            bg: 'bg-white'
          },
          { name: 'Loft PH',
            description: 'Express JS • Vue JS • MongoDB • Bootstrap',
            link: 'https://loft.ph',
            img: 'loft-preview.png',
            bg: 'bg-skyblue'
          },
          { name: 'Real PH',
            description: 'Laravel • MySQL • Bootstrap',
            link: 'https://real.ph',
            img: 'real-preview.png',
            bg: 'bg-lightgreen'
          },
          { name: 'Eats.Ph',
            description: 'NEST JS • NEXT JS • Redux Saga • Thunk • PostgreSQL • Bootstrap',
            link: 'https://eats.ph',
            img: 'eats-preview.png',
            bg: 'bg-lightgreen'
          },
          { name: 'CoworkerHQ',
            description: 'NEST JS • NEXT JS • Redux Saga • Thunk • PostgreSQL • Bootstrap',
            link: 'https://coworkerhq.com/',
            img: 'coworkerhq-preview.png',
            bg: 'bg-yellow'
          },
          { name: 'iOrthotics PTY LTD',
            description: 'Laravel • MySql • Bootstrap',
            link: 'https://www.iorthotics.com',
            img: 'iorthotics-preview.png',
            bg: 'bg-yellow'
          },
        ]
      }
    },
    methods: {
      loadImg(img: String) {
        return require(`~/assets/projects/${img}`)
      },
      redirect(link: String) {
        window.open(
        link as string,
        '_blank' // <- This is what makes it open in a new window.
      );
      }
    }
  })
</script>

<style lang="scss" scoped>
.project-lists {
    width: 100%;
    position: relative;
  .project {
    justify-content: center;

    .project-card {
      position: relative;
      background:rgba(50, 50, 86, 1);
      height: 400px;
      border-radius: 10px;
      overflow: hidden;
      margin: 0 10px 0 10px;
      .image-footer {
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        cursor: pointer;
        img {
          height: 50px;

        &.img-coworkerhq {
          height: 20px;
        }
        &.img-realph {
          height: 20px;
        }
        &.img-loft {
          height: 20px;
        }
        &.img-eatsph {
          height: 30px;
        }
      }
      }
    }
  }
  .slick-active {
    .custom-dot {
      background: white;
    }
  }
  .custom-dot {
    margin-top: 20px;
    background: #a3a3a3;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

}
</style>
