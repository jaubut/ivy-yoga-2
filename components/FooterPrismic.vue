<template>
  <div class="footer-grid">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">
      {{ $store.state.menu }}
    </p>
    <nav>
      <prismic-link v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id" :field="menuLink.link" :style="'color:' + menuLink.color +';'">
        {{ $prismic.asText(menuLink.label) }}
      </prismic-link>
    </nav>
    <form>
      <p>Hello Dan,<br> Mon <label for="firstName">nom</label> est <input id="firstName" type="text" placeholder="nom"> et mon <label for="firstName">courriel</label> est <input id="email" type="email" placeholder="courriel"> et j'aimerais ne rien manquer des offres exclusives IVY.</p>
      <a class="submit-button">
        S'abonner
      </a>
    </form>
    <div class="social-link">
      <a href="https://www.facebook.com/ivyyoga.ca" target="_blank">
        <i class="fab fa-facebook-square" />
      </a>
      <a href="https://www.instagram.com/ivyyoga.ca/" target="_blank">
        <i class="fab fa-instagram" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPrismic'
}
</script>

<style scoped>
.footer-grid {
  display: grid;
  grid-template: 10% 80% 10% / 10% 80% 10%;
  gap: 15px;
  padding: 50px 25px;
  background: #B2BA9E;
}
a {
  color: black;
  text-decoration: none;
}
nav {
  grid-area: 1/2/2/3;
  display: flex;
}
nav a {
  padding: 5px 15px;
}
a:hover {
  color: rgb(250, 200, 162);
  transition: 0.5s;
}
form {
  grid-area: 2/2/3/3;
  margin: 50px 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
}
form p {
  text-align: left;
  font-size: 1.75rem;
  font-weight: bold;
  max-width: 700px;
  margin: 0;
  color: rgb(250, 200, 162);
}
input {
  border: none;
  font-size: 1.75rem;
  text-align: center;
  background: none;
  width: 150px;
}
input::placeholder {
  color: white;
}
.submit-button {
  margin: 25px 0;
  padding: 0.25em 1.5em;
  font-size: 1.75rem;
  font-weight: bold;
  background: rgb(250, 200, 162);
  border-radius: 5px;
  cursor: pointer;
}
.submit-button:hover {
  color: #B2BA9E;
}
.social-link {
  grid-area: 1/2/2/3;
  display: flex;
  justify-content: flex-end;
}
.social-link i:hover {
  color: black;
}
.social-link i {
  font-size: 1.5rem;
  padding: 0 15px;
  color: rgb(250, 200, 162);
  transition: 0.5s;
}
@media (max-width: 1001px) {
  .footer-grid {
    grid-template: 10% 10% 80% / 5% 90% 5%;
    gap: 0;
    padding: 0;
  }
  nav {
    grid-area: 2/2/3/3;
    flex-flow: row wrap;
    margin-top: 25px;
  }
  form {
    grid-area: 3/2/4/3;
  }
  .social-link {
    grid-area: 1/2/2/3;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
  }
}
</style>
