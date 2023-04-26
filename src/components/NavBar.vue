<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/imgs/logo.png" alt="" />
        <h1 class="title">InTheSky</h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main"
        aria-controls="main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>

      <div class="collapse navbar-collapse" id="main">
        <form
          class="d-flex align-items-center flex-grow-1 ms-5 me-5"
          role="search"
        >
          <input
            class="form-control"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            @keyup="searchData"
          />
          <div class="search-icon">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </div>
        </form>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link to="/">
            <li
              id="show-home"
              class="nav-item nav-link p-2 p-lg-3 fs-5 d-flex flex-column active"
            >
              <font-awesome-icon
                :icon="['fas', 'house']"
                style="color: #eab26d"
              />
              Home
            </li>
          </router-link>

          <router-link to="/add">
            <li
              id="show-add"
              class="nav-item nav-link p-2 p-lg-3 fs-5 d-flex flex-column"
            >
              <font-awesome-icon
                :icon="['fas', 'plus']"
                beat-fade
                style="color: #eab26d"
              />
              Add
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import "../scss/_navbar.scss";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    searchData() {
      console.log("done");
    },
  },
});
</script>
