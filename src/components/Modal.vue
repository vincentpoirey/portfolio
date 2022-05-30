<template>
<transition name="fade">
  <div v-if="modalActive" class="backdrop" @click.self="close">
    <div class="modal">
      <slot name="project-content"></slot>
    </div>
  </div>
</transition>
</template>

<style>
.modal {
  max-width: 400px;
  width: 80%;
  padding: 20px;
  /* margin: 100px auto; */
  background: white;
  border-radius: 10px;
  background-color: #333333;
  color: white;
  cursor: default;
  border: solid 2px;
  border-color: #42b883;
  border-radius: 1em;
}
.backdrop {
  left: 0;
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: flex; */
}
.modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
}
.modal h1 {
    color: white;
}
</style>

<script>
export default {
  name: 'Modal',
  props: ['project', 'modalActive', 'clickedProject'],
  setup(props, {emit}) {
    const close = () => {
      emit('close');
    };


    // onMounted(() => console.log(this.clickedProject.value))

    return { close }
  }
}
</script>
