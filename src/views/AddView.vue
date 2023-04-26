<template>
  <div id="add" class="newPigeon mb-5 mt-5">
    <div class="container">
      <div class="card">
        <div class="card-header text-center">
          <h2>Details Of Pigeon</h2>
        </div>

        <div class="body-card p-3">
          <form action="" class="row">
            <div class="input col-sm-8">
              <div class="color input-group flex-nowrap mb-4">
                <span for="colorInput" class="form-label input-group-text"
                  >Color:
                </span>
                <input
                  type="color"
                  class="form-control form-control-color"
                  v-model="dataPigeon.color"
                  id="colorInput"
                />
              </div>
              <div class="name input-group flex-nowrap mb-4">
                <span for="nameInput" class="form-label input-group-text"
                  >Name:
                </span>
                <input
                  id="nameInput"
                  type="text"
                  class="form-control"
                  placeholder="Type The Name"
                  v-model="dataPigeon.name"
                />
              </div>
              <div class="sex input-group flex-nowrap mb-4">
                <span for="sexInput" class="form-label input-group-text"
                  >Sex:
                </span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="dataPigeon.sex"
                >
                  Choose the Sex
                  <option value="Cock">Cock</option>
                  <option value="Hen">Hen</option>
                  <option value="Young Brid">Young Brid</option>
                  <option value="UnKnown">UnKnown</option>
                </select>
              </div>
              <div class="sire input-group flex-nowrap mb-4">
                <span class="form-label input-group-text">Sire: </span>
                <div class="btn-group d-flexalign-items-center flex-grow-1">
                  <input
                    id="sireInput"
                    type="text"
                    class="form-control"
                    placeholder="Type The Sire"
                    v-model="dataPigeon.sire"
                  />
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul id="list-sire" class="dropdown-menu">
                    <li
                      v-for="sirelist in sireLists"
                      :key="sirelist"
                      @click="chooseSire(sirelist)"
                    >
                      {{ sirelist }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dam input-group flex-nowrap mb-4">
                <span class="form-label input-group-text">Dam: </span>
                <div class="btn-group d-flexalign-items-center flex-grow-1">
                  <input
                    id="damInput"
                    type="text"
                    class="form-control"
                    placeholder="Type The Dam"
                    v-model="dataPigeon.dam"
                  />
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul id="list-dam" class="dropdown-menu">
                    <li
                      v-for="damList in damLists"
                      :key="damList"
                      @click="chooseDam(damList)"
                    >
                      {{ damList }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="extra form-floating input-group flex-nowrap">
                <span class="extra-label form-label input-group-text"
                  >Extra:
                </span>
                <textarea
                  class="extraInput"
                  placeholder="Leave a Extra here"
                  v-model="dataPigeon.extra"
                ></textarea>
              </div>
            </div>
            <div class="img text-center col-sm-4">
              <div class="img-box">
                <img
                  :src="require(`../assets/imgs/${dataPigeon.img}`)"
                  alt=""
                />
              </div>
              <div class="upload">
                <input type="file" id="upload" @change="onFileSelected" />
                <label for="upload">Upload</label>
              </div>
            </div>
            <div class="button p-3 m-auto">
              <button
                id="add-pigeon"
                type="button"
                class="btn btn-success"
                @click="addPigeon"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import "../scss/_addPage.scss";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      sireLists: [] as any,
      damLists: [] as any,
      extraLists: [] as any,
      dataPigeon: {
        id: new Date(),
        name: "",
        sex: "",
        sire: "",
        dam: "",
        img: "image.png",
        extra: "",
        color: "#ffffff",
      },
    };
  },

  methods: {
    async addPigeon() {
      if (this.dataPigeon.extra.length > 1) {
        this.splitExtra();
      }
      const result = await axios.post("http://localhost:3000/dataPigeon", {
        id: this.dataPigeon.id,
        name: this.dataPigeon.name,
        sex: this.dataPigeon.sex,
        sire: this.dataPigeon.sire,
        dam: this.dataPigeon.dam,
        image: this.dataPigeon.img,
        color: this.dataPigeon.color,
        extra: this.extraLists,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
    splitExtra() {
      let text = this.dataPigeon.extra.split("\n");
      this.extraLists = text;
    },
    onFileSelected(event: any) {
      this.dataPigeon.img = event.target.files[0].name;
    },
    chooseSire(sire: any) {
      this.dataPigeon.sire = sire;
    },
    chooseDam(dam: any) {
      this.dataPigeon.dam = dam;
    },
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/dataPigeon");

    let dataLists = result.data;
    dataLists.forEach((dataList: any) => {
      if (dataList.sex == "Cock") {
        this.sireLists.push(dataList.name);
      }
      if (dataList.sex == "Hen") {
        this.damLists.push(dataList.name);
      }
    });
    console.log(this.dataPigeon.extra);
  },
});
</script>
