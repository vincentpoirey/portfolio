<template>
  <div class=svg-flex><img class="svg" src="@/assets/cat.svg" alt="portfolio's logo" /></div>
  <div class="flex-container"><div><AboutMe /></div></div>
  <div class="flex-container"><div><Skills /></div></div>
  <div class="flex-container"><div class="flex-skills"><Projects /></div></div>
  <div class="flex-container"><div><ContactField /></div></div>
  <!-- <div class="flex-container"><div>test</div></div> -->
</template>

<style>
a {
  color: #42b883;
}
label {
  display: block;
  margin-bottom: 10px;
}
textarea, input {
  border: none;
  border-bottom: 2px solid white;
  background-color: #333333;
  color: white; 
  font-size: 90%;
  margin-left: 10px;
  margin-bottom: 15px;
  outline: none;
  border-radius: 0;
}
button {
  background: #42b883;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 5px;
}
.svg-flex {
  display: flex;
  justify-content: center;
}
.svg {
  width: 100%;
  height: auto;
  max-width: 100px;
  margin: 25px 0 10px 0;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.flex-container > div {
  width: 500px;
  margin: 10px;
  font-size: 20px;
  padding: 20px;
  border: solid 2px;
  border-color: #42b883;
  border-radius: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card {
  width: 100%; /* 100% works */
  margin: 0 0 10px 0;
  padding: 15px;
  border: solid 2px;
  border-color: #42b883;
  border-radius: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.submit {
  text-align: center;
}
.flex-skills {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content-img {
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin: 25px 0 10px 0;
}
</style>

<script>
import ContactField from '@/components/ContactField.vue'
import Skills from '@/components/Skills.vue'
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'


export default {
  name: 'HomePage',
  components: {
    ContactField,
    Skills,
    AboutMe,
    Projects
  },
  data() {
    return {

    }
  },
  /*mounted() {
    document.title = "ok"
  }*/

}
</script>
