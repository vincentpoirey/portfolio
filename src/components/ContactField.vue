<template>
  <form class="contact-form" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" method="post">
    <input type="hidden" name="form-name" value="contact" />
    <h2 style="margin-bottom: 20px; margin-top: 0px">Contactez-moi</h2>
    <div class="form">
      <div>
        <label class="label" for="firstname">Prénom</label>
        <input type="text" name="firstname" id="firstname" required v-model="firstname">
      </div>
      <div>
        <label class="label" for="lastname">Nom</label>
        <input type="text" name="lastname" id="lastname" required v-model="lastname">
      </div>
    </div>
    <div>
      <label class="label" for="email">E-mail</label>
      <input type="email" name="email" id="email" required v-model="email">
    </div>
    <div style="text-align: center">
      <label class="label" for="email">Message</label>
      <textarea style="resize: none;width: 90%;" maxlength="200" rows="5" name="message" id="message" required v-model="message" placeholder="message..."></textarea>
      <button type="submit" class="submit">Envoyer</button>
    </div>
  </form>
</template>

<style scoped>
/* .form {
  display: flex;
} */
</style>

<script>
export default {
  name: 'ContactField',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }
  }
}
</script>