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
    <form
      id="mc-embedded-subscribe-form"
      action="https://ivy-yoga.us5.list-manage.com/subscribe/post?u=969c1f8068212429343512f19&amp;id=112d464ab7"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <p>
        Hello Ivy,<br> Mon <label for="mce-FNAME">nom</label> est <input
          id="mce-FNAME"
          type="text"
          value=""
          name="FNAME"
          class=""
          placeholder="nom"
        > et mon <label for="mce-EMAIL">courriel</label> est <input id="mce-EMAIL" placeholder="courriel" type="email" value="" name="EMAIL"> et j'aimerais ne rien manquer des offres exclusives Ivy.
      </p>
      <input id="mc-embedded-subscribe" type="submit" value="M'ajouter" name="subscribe" class="submit-button">
    </form>
    <div class="social-link">
      <a href="https://www.facebook.com/espaceivy.ca" target="_blank">
        <i class="fab fa-facebook-square" />
      </a>
      <a href="https://www.instagram.com/espaceivy.ca" target="_blank">
        <i class="fab fa-instagram" />
      </a>
    </div>
    <div class="bottom">
      <p>© Espace Ivy</p>
      <a href="mailto:info@espaceivy.ca">info@espaceivy.ca</a>
      <a href="telto:5149149859">514-914-9859</a>
      <p>Fait avec <i class="fas fa-heart" /> au Québec par Jérémie Aubut</p>
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
  background: rgb(250, 200, 162);
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
  color: #252525;
}
a:hover {
  color: rgb(119, 100, 85);
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
  color: #252525;
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
input:focus {
  outline: 0px;
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
  color: #BE845F;
  transition: 0.5s;
}
.submit-button {
  display: block;
  text-align: center;
  border: none;
  border-radius: 4px;
  padding: 1em 3em;
  text-decoration: none;
  font: inherit;
  line-height: 1.3;
  font-weight: 500;
  transition: all 0.1s linear;
  margin-top: 2rem;
  margin-top: var(--v-margin);
  background: #BE845F;
  width: fit-content;
}
.submit-button:hover {
  color: #252525;
  background: #815f49;
}
.footer-grid .bottom {
  grid-area: 3/2/4/3;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  font-size: calc(0.5rem * var(--text-min-xl));
}
.footer-grid .bottom a {
  font-weight: normal;
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
    padding-bottom: 50px;
  }
  .social-link {
    grid-area: 1/2/2/3;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
  }
  .footer-grid .bottom {
    padding: 25px;
    grid-area: 3/2/4/3;
    align-self: end;
    flex-flow: wrap;
  }
}
</style>
