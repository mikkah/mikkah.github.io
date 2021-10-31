<template>
  <div class="intro">
    <div class="get-touch">
    <a :href="`mailto:${email}`"> Get in touch ✋</a>
  </div>
    <div class="intro-md hidden md:block pt-16 mt-6 mb-6 ">
      <div class="title pr-4 text-center">

        <div class="flex name justify-center">
          <h1 class="fname tracking-widest mr-5">Mikhael</h1>
          <h1 class="lname tracking-widest">
            <span>Oriel</span>
          </h1>
        </div>
        <h3 class="tracking-widest mt-2">{{ jobTitle }}</h3>
        <p class="mt-16 cursor-default learn-more text-gray" @click="scrollTo('skills-container')">Learn More</p>
        <div class="particles-container">
          <vue-particles color="#dedede"></vue-particles>
        </div>
      </div>
    </div>
    <div class="intro-sm md:hidden pl-4 text-left mt-3 mb-3 ">
      <p class="text-xl font-bold tracking-wider">Mikhael Oriel</p>
      <p class="text-xs tracking-widest">{{ jobTitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      activeSection: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        jobTitle: 'Software Engineer',
        email: `mikhael1102@gmail.com`,
        activeNav: 'skills',
        navs: [
          'About',
          'Skills',
          'Experience',
          'Projects'
        ]
      }
    },

  })
</script>


<style lang="scss" scoped>
.intro {
  height: 100%;
  .name {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 60px;
    margin-top:140px;
    display:inline-flexbox;
    overflow:hidden;
    .fname {
      animation: showup 7s ease-in;
      display: inline-block;
      letter-spacing: 7px;
    }
    .lname {
      display: inline-block;
      border-radius:10px;
      margin-left: 5px;
      letter-spacing: 7px;
      width:200px;
      animation: reveal 7s ease-in;
      animation-iteration-count: 1;
      span {
        animation: slidein 7s ease-in;
      }
    }
    @keyframes showup {
        0% {opacity:0;}
        20% {opacity:1;}
        80% {opacity:1;}
    }
    @keyframes slidein {
        0% { margin-left:-800px; }
        20% { margin-left:-800px; }
        35% { margin-left:0; }
        100% { margin-left:0; }
    }
    @keyframes reveal {
        0% {opacity:0}
        1% {width:0}
        20% {opacity:0}
        21% {width:0}
        30% {width:200px;}
        31% {opacity: 1;}
        80% {opacity:1;}
        100% { width:200px;}
    }
  }
  h1 {
    font-size: 65px;
    display:inline-flexbox;
  }
  .learn-more {
     animation: showup 7s ease-in;
      padding-bottom: 8px;


    &:hover {
      display: inline-block;
      padding-bottom: 8px;
      border-bottom: 1px solid white;
    }
  }

  .title {
    margin-top: 140px;
  }
  h3 {
    font-size: 24px;
    letter-spacing: 3px;
    background: linear-gradient(0deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    opacity: 1;
    animation: animate 7s ease-in;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    @keyframes animate {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.3;
      }
      75% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .navs {
    li {
      &.active {
        border-right: 3px solid white;
      }
      &.inactive {
        border-right: 3px solid transparent;
      }
    }
  }
}

.get-touch {
  z-index: 99;
  display: inline-block;
  position: fixed;
  bottom: 30px;
  right: 20px;
  &:hover {
    background: rgb(73, 101, 199);;
  }
  a {
    background: #007bff;
    padding: 9px 11px;
    border-radius: 4px;
    color: white;
    text-decoration: none;
    margin: 0;
  }
}
.particles-container {
  height: 400px;
  overflow: hidden;
}

@media only screen and (max-width: 767px) {
  .intro {
    height: auto;
  }
}
</style>
