<template>
  <div class="skills-container mt-9">
    <h1 class="text-2xl mb-5 tracking-wider">Skills</h1>
    <div class="skills-list content-center flex flex-wrap justify-center">
      <div v-for="(skill,i) in skills" :key="i" class="skill mb-14 mx-3 bg-darkblue p-5 rounded-lg flex flex-col  text-center zoom">
        <img class="h-16" :src="loadSvg(skill.icon)" />
        <p class="mt-2 text-sm">{{ skill.text }}</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button class="text-3xl animate-bounce" @click="scrollTo('projects-container')">
       <i class="fas fa-arrow-circle-down"></i>
      </button>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        skills: [
          {icon: 'html5', text: 'HTML5'},
          {icon: 'css', text: 'CSS'},
          {icon: 'tailwind', text: 'Tailwind Css'},
          {icon: 'sass', text: 'Sass'},
          {icon: 'bootstrap', text: 'Bootstrap'},
          {icon: 'javascript', text: 'Javascript'},
          {icon: 'typescript', text: 'Typescript'},
          {icon: 'react', text: 'React Js'},
          {icon: 'vue', text: 'Vue Js'},
          {icon: 'docker', text: 'Docker'},
          {icon: 'next', text: 'Next Js'},
          {icon: 'nuxt', text: 'Nuxt Js'},
          {icon: 'express', text: 'Express Js'},
          {icon: 'git', text: 'Git'},
          {icon: 'graphql', text: 'GraphQL'},
          {icon: 'laravel', text: 'Laravel'},
          {icon: 'mongodb', text: 'Mongo DB'},
          {icon: 'mysql', text: 'MySQL'},
          {icon: 'postgre', text: 'PostgreSQL'},
          {icon: 'php', text: 'PHP'},
          {icon: 'postman', text: 'Postman'},
          {icon: 'prisma', text: 'Prisma'},
          {icon: 'redux', text: 'Redux'},
        ]
      }
    },
    methods: {
      loadSvg(icon: String) {
        return require(`~/assets/icons/${icon}.svg`)
      }
    },

  })
</script>

<style lang="scss" scoped>
.skills-container {
  height: auto;
}
.skill {
  width: 150px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3)
  }
}

@media only screen and (max-width: 767px) {
  .skills-container {
    height: auto;
    .skill {
      height: 90px;
      width: 90px;
      margin: 10px;
      img{
        height: 40px;
      }
    }
  }
}
</style>
