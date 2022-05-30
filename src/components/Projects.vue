<template>
  <h2 style="margin-top: 0;">Projets</h2>
  <div class="card" style="cursor:pointer" v-for="project in projects" :key="project.id" @click="toggleModalActive(project)">
  <div>
    <h2>{{project.name}}</h2>
    <p>{{project.desc}}</p>
  </div>
  </div>

  <Modal @close="toggleModalOff" :modalActive="modalActive" :clickedProject="clickedProject">
  <template v-slot:project-content>
    <h1>{{ clickedProject.name }}</h1>
    <p>{{ clickedProject.desc }}</p>
    <p>{{ clickedProject.technosUsed }}</p>
    <p>GitHub repository : <a :href="clickedProject.repoLink" target="_blank">{{ clickedProject.repoLink }}</a></p>
    <div v-if="clickedProject.img" style="text-align:center"><img class="content-img" src="@/assets/img/3.png" /></div>
  </template>
  </Modal>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Modal from './Modal'
import { ref } from 'vue'

export default {
  name: 'Projects',
  components: {
    Modal
  },
  setup() {
    let clickedProject = ref([])
    const modalActive = ref(false)
    const projects = ref([
      {id: 1, name: 'MEVN stack app', desc: "Développement full stack d'une application d'autoanalyse en autonomie.", repoLink: "https://github.com/vincentpoirey/feelin", technosUsed: "Dépendences et packages utilisés : Vuejs, Mongodb, Express, Mongoose, Nodejs, Vuetify, nodemon, Vue Router, Postman.", img: true},
      {id: 2, name: 'Portfolio et curriculum vitae', desc: "Site personnel de test et d'affichage de faits personnels ci-présent, hébergé via Netlify.", repoLink: "https://github.com/vincentpoirey/portfolio", technosUsed: "Dépendences et packages utilisés : Vuejs, Netlify."}
    ]); 
    // console.log(this.key)

    const toggleModalActive = project => {
      clickedProject.value = project;
      modalActive.value = !modalActive.value;
    }

    const toggleModalOff = () => {
      modalActive.value = !modalActive.value;
    }

    return { modalActive, toggleModalActive, projects, clickedProject, toggleModalOff }
  }
}
</script>
