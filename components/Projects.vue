<template>
  <div class="projects-container">
    <h1 class="text-2xl mb-8 tracking-wider">Projects I've worked on</h1>
    <div class="project-lists grid grid-cols-2 gap-8">
      <div v-for="(proj, key) in projects" :key="key" class="card shadow-md justify-between inline-block rounded-md overflow-hidden bg-darkblue w-full project">
        <div class="header p-4">
          <p class="text-lightblue font-bold tracking-wider text-2xl mb-2">{{ proj.name }}</p>
          <p class="text-sm">{{ proj.description }}</p>
        </div>
        <div :class="`image-footer ${proj.bg} p-2 flex items-center`">
          <img :class="`img-${proj.img}`" :src="loadSvg(proj.img)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        projects: [
          { name: 'QSpace App', 
            description: 'Express JS • Vue JS • Vuex • PostgreSQL • Bootstrap', 
            link: 'https://www.qspaceapp.com', 
            img: 'qspace',
            bg: 'bg-white'
          },
          { name: 'QTime App', 
            description: 'Laravel • Vue JS • Vuex • PostgreSQL • Bootstrap', 
            link: 'https://www.qtimesoftware.com',
            img: 'qtime',
            bg: 'bg-white'
          },
          { name: 'Loft PH', 
            description: 'Express JS • Vue JS • MongoDB • Bootstrap', 
            link: 'https://www.loft.ph',
            img: 'loft', 
            bg: 'bg-skyblue'
          },
          { name: 'Real PH', 
            description: 'Laravel • MySQL • Bootstrap', 
            link: 'https://www.real.ph',
            img: 'realph',
            bg: 'bg-lightgreen'
          },
          { name: 'Eats.Ph', 
            description: 'NEST JS • NEXT JS • Redux Saga • Thunk • PostgreSQL • Bootstrap', 
            link: 'https://www.eats.ph',
            img: 'eatsph',
            bg: 'bg-lightgreen'
          },
          { name: 'CoworkerHQ', 
            description: 'NEST JS • NEXT JS • Redux Saga • Thunk • PostgreSQL • Bootstrap', 
            link: 'https://www.cowokerhq.com',
            img: 'coworkerhq',
            bg: 'bg-yellow'
          },
        ]
      }
    },
    methods: {
      loadSvg(icon: String) {
        return require(`~/assets/projects/${icon}.svg`)
      }
    }
  })
</script>

<style lang="scss" scoped>
.project {
  transition: transform 0.2s;
  height: 200px;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.1)
  }
  .image-footer {
    height: 50px;
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
</style>