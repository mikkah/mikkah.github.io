<template>
  <div class="experience-container">
    <h1 class="text-2xl mb-5 tracking-wider">Experience</h1>
    <div class="job-lists">
      <div v-for="(job, key) in jobs" :key="key" class="job p-5 rounded-md mb-8 bg-darkblue">
        <div class="title text-lg mb-1">{{ job.company }}</div>
        <div class="company text-2xl font-bold mb-1 text-lightblue">{{ job.title }}</div>

        <div class=" uppercase">{{ job.dateStart }} &mdash; {{ job.dateEnd }}</div>
        <div class="job-descriptions pt-6">
          <ul class="list-disc pl-4">
            <li v-for="(desc, i) in job.descriptions" :key="i" class="pb-3">
              {{ desc }}
            </li>
           
          </ul>
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
        jobs: [
          { title: 'Software Engineer',
            company: 'Oqulo, August 99 Inc.',
            dateStart: 'January 1, 2020',
            dateEnd: 'Present',
            descriptions: [
              'Work closely with Product Managers, QA Team and Design Team to developed different software products',
              'Participate/Lead scrum sessions',
              'Review product requirements, specifications and design documents to provide accurate feedback for the product development',
              'Performed code reviews, participated in refinements meetings'
            ]
          },
          { title: 'Web Application Developer',
            company: 'The Design People, August 99 Inc.',
            dateStart: 'November 2017',
            dateEnd: 'January 1, 2020',
            descriptions: [
              `Work for both frontend and backend on different software products for company's customers and clients.`,
              `Create and implement different API's`,
              `Structure different databases like MongoDB, MySql and Postgre`,
              `Collaborate with product managers, QA and other developers to enhance system processes and workflow`,
              `Turn design templates into a full working softwares, following the mobile first approach`
            ]
          },
          {
            title: 'PHP Developer',
            company: 'IT Department, Regan Industrial Sales Inc.',
            dateStart: 'June 2015',
            dateEnd: 'October 2017',
            descriptions: [
              `Create and develop Web based applications that will help employees for each division in the company to make their work much more easier.`,
              `Fix, enhance and update existing softwares being used by the company`,
              `Perform basic computer and network troubleshooting`
            ]
          }
        ]
      }
    }
    
  })
</script>

<style lang="scss" scoped>
  .job {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1)
    }
  }
</style>