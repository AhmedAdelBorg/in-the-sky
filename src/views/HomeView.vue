<template>
  <div class="album py-5">
    <div class="container">
      <div
        id="album-row"
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
      >
        <div class="col" v-for="dataPigeon in dataPigeons" :key="dataPigeon.id">
          <div class="card shadow-sm">
            <div class="card text-center shadow-sm">
              <img
                :src="require(`../assets/imgs/${dataPigeon.image}`)"
                alt=""
              />
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h3>
                  {{ dataPigeon.name }}
                </h3>
                <span>{{ dataPigeon.sex }}</span>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-around align-items-center">
                  <router-link :to="'/pedigree/' + dataPigeon.id"
                    ><button type="button" class="btn me-2">
                      View
                    </button></router-link
                  >
                  <router-link :to="'/update/' + dataPigeon.id"
                    ><button type="button" class="btn me-2">
                      Edit
                    </button></router-link
                  >

                  <button
                    type="button"
                    class="btn"
                    @click="deleteData(dataPigeon.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import "../scss/_homePage.scss";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      dataPigeons: [] as any,
    };
  },

  methods: {
    async deleteData(id: any) {
      await axios.delete("http://localhost:3000/dataPigeon/" + id);
      this.loadData();
    },
    async loadData() {
      const result = await axios.get("http://localhost:3000/dataPigeon");
      this.dataPigeons = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
});
</script>
