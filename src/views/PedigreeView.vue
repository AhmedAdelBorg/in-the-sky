<template>
  <div id="pedigree" class="pedigree pt-5 p-3">
    <div class="card">
      <div class="card-header text-center">
        <h2 class="name-pigon">{{ dataPigeon.name }}</h2>
      </div>
      <div class="card-body">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-sm-3">
            <div class="image">
              <img
                class="img-fluid"
                :src="require(`../assets/imgs/${dataPigeon.image}`)"
                alt=""
              />
            </div>
            <div
              class="card pigon-son color"
              :style="{ backgroundColor: dataPigeon.color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ dataPigeon.name }}</h5>
                <span>c</span>
              </div>
              <div class="card-body">
                <div v-for="item in dataPigeon.extra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>

            <div class="info text-white-50">
              <h5>Ahmed Adel Borg</h5>
              <p>Tanta- ElGarbia</p>
              <p>tel: 01062882815</p>
              <p>ahmedadel2282@gmail.com</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div
              class="parents color mb-4"
              :style="{ backgroundColor: sireColor }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ dataPigeon.sire }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in sireExtra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>
            <div class="parents color" :style="{ backgroundColor: damColor }">
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ dataPigeon.dam }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in damExtra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>
          </div>
          <div class="col-sm-3">
            <div
              class="grands color mb-3"
              :style="{ backgroundColor: fatherFatherColor }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ fatherFather }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in fatherFatherExtra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>
            <div
              class="grands color mb-3"
              :style="{ backgroundColor: motherFatherColor }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ motherFather }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in motherFatherExtra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>
            <div
              class="grands color mb-3"
              :style="{ backgroundColor: fatherMotherColor }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ fatherMother }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in fatherMotherExtra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>
            <div
              class="grands color mb-3"
              :style="{ backgroundColor: motherMotherColor }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ motherMother }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in motherMotherExtra" :key="item">
                  {{ item }}
                </div>
              </div>
              <div class="line"></div>
              <div class="after"></div>
            </div>
          </div>
          <div class="col-sm-3">
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: fatherGrandfather1Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ fatherGrandfather1 }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in fatherGrandfather1Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: fathergrandmother1Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ fathergrandmother1 }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in fathergrandmother1Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: fatherGrandfather2Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ fatherGrandfather2 }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in fatherGrandfather2Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: fathergrandmother2Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ fathergrandmother2 }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in fathergrandmother2Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: motherGrandfather1Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ motherGrandfather1 }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in motherGrandfather1Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: mothergrandmother1Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ mothergrandmother1 }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in mothergrandmother1Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: motherGrandfather2Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ motherGrandfather2 }}</h5>
                <span>C</span>
              </div>
              <div class="card-body">
                <div v-for="item in motherGrandfather2Extra" :key="item">
                  {{ item }}
                </div>
              </div>
            </div>
            <div
              class="parents-grands color mb-2"
              :style="{ backgroundColor: mothergrandmother2Color }"
            >
              <div class="card-header fs-5 d-flex justify-content-between">
                <h5>{{ mothergrandmother2 }}</h5>
                <span>H</span>
              </div>
              <div class="card-body">
                <div v-for="item in mothergrandmother2Extra" :key="item">
                  {{ item }}
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
import { defineComponent } from "vue";
import "../scss/_PedigreePage.scss";
export default defineComponent({
  name: "PedigreeView",
  data() {
    return {
      Pedigrees: [] as any,
      fatherGrandfather1: "",
      fatherGrandfather2: "",
      fathergrandmother1: "",
      fathergrandmother2: "",
      motherGrandfather1: "",
      motherGrandfather2: "",
      mothergrandmother1: "",
      mothergrandmother2: "",
      fatherFather: "",
      motherFather: "",
      fatherMother: "",
      motherMother: "",
      fatherGrandfather1Color: "",
      fatherGrandfather2Color: "",
      fathergrandmother1Color: "",
      fathergrandmother2Color: "",
      motherGrandfather1Color: "",
      motherGrandfather2Color: "",
      mothergrandmother1Color: "",
      mothergrandmother2Color: "",
      fatherFatherColor: "",
      motherFatherColor: "",
      fatherMotherColor: "",
      motherMotherColor: "",
      sireColor: "",
      damColor: "",
      fatherGrandfather1Extra: [] as any,
      fatherGrandfather2Extra: [] as any,
      fathergrandmother1Extra: [] as any,
      fathergrandmother2Extra: [] as any,
      motherGrandfather1Extra: [] as any,
      motherGrandfather2Extra: [] as any,
      mothergrandmother1Extra: [] as any,
      mothergrandmother2Extra: [] as any,
      fatherFatherExtra: [] as any,
      motherFatherExtra: [] as any,
      fatherMotherExtra: [] as any,
      motherMotherExtra: [] as any,
      sireExtra: [] as any,
      damExtra: [] as any,
      dataPigeon: {
        name: "",
        sex: "",
        sire: "",
        dam: "",
        image: "image.png",
        color: "#ffffff",
        extra: [] as any,
      },
    };
  },
  methods: {
    async loadData() {
      const result = await axios.get(
        "http://localhost:3000/dataPigeon/" + this.$route.params.id
      );
      this.dataPigeon = result.data;
    },
    async getPedigrees() {
      const result = await axios.get("http://localhost:3000/dataPigeon/");

      for (let i = 0; i < result.data.length; i++) {
        this.Pedigrees = result.data;
        // get the Father Name (parents)
        if (
          this.dataPigeon.sire &&
          this.dataPigeon.sire == result.data[i].name
        ) {
          this.fatherFather = result.data[i].sire;
          this.motherFather = result.data[i].dam;
          this.sireExtra = result.data[i].extra;
          this.sireColor = result.data[i].color;
          for (let i = 0; i < result.data.length; i++) {
            // get the fatherFather Name (grands)
            if (this.fatherFather && this.fatherFather == result.data[i].name) {
              this.fatherFatherExtra = result.data[i].extra;
              this.fatherFatherColor = result.data[i].color;
              for (let i = 0; i < result.data.length; i++) {
                // get the fatherGrandfather Name and fathergrandmother (parents-grands)
                if (this.fatherFather == result.data[i].name) {
                  this.fatherGrandfather1 = result.data[i].sire;
                  this.fathergrandmother1 = result.data[i].dam;
                  // get the fatherGrandfather Name and fathergrandmother Extra
                  for (let i = 0; i < result.data.length; i++) {
                    if (
                      this.fatherGrandfather1 &&
                      this.fatherGrandfather1 == result.data[i].name
                    ) {
                      this.fatherGrandfather1Extra = result.data[i].extra;
                      this.fatherGrandfather1Color = result.data[i].color;
                    }
                    if (
                      this.fathergrandmother1 &&
                      this.fathergrandmother1 == result.data[i].name
                    ) {
                      this.fathergrandmother1Extra = result.data[i].extra;
                      this.fathergrandmother1Color = result.data[i].color;
                    }
                  }
                }
              }
            }
            // get the motherFather Name and mother (grands)
            if (this.motherFather && this.motherFather == result.data[i].name) {
              this.motherFatherExtra = result.data[i].extra;
              this.motherFatherColor = result.data[i].color;
              for (let i = 0; i < result.data.length; i++) {
                // get the fatherGrandfather Name and fathergrandmother (parents-grands)
                if (this.motherFather == result.data[i].name) {
                  this.fatherGrandfather2 = result.data[i].sire;
                  this.fathergrandmother2 = result.data[i].dam;
                  // get the fatherGrandfather Name and fathergrandmother Extra
                  for (let i = 0; i < result.data.length; i++) {
                    if (
                      this.fatherGrandfather2 &&
                      this.fatherGrandfather2 == result.data[i].name
                    ) {
                      this.fatherGrandfather2Extra = result.data[i].extra;
                      this.fatherGrandfather2Color = result.data[i].color;
                    }
                    if (
                      this.fathergrandmother2 &&
                      this.fathergrandmother2 == result.data[i].name
                    ) {
                      this.fathergrandmother2Extra = result.data[i].extra;
                      this.fathergrandmother2Color = result.data[i].color;
                    }
                  }
                }
              }
            }
          }
        }
        // get the Father Name (parents)
        if (this.dataPigeon.dam && this.dataPigeon.dam == result.data[i].name) {
          this.fatherMother = result.data[i].sire;
          this.motherMother = result.data[i].dam;
          this.damExtra = result.data[i].extra;
          this.damColor = result.data[i].color;
          for (let i = 0; i < result.data.length; i++) {
            // get the fatherMother Name (grands)
            if (this.fatherMother && this.fatherMother == result.data[i].name) {
              this.fatherMotherExtra = result.data[i].extra;
              this.fatherMotherColor = result.data[i].color;
              for (let i = 0; i < result.data.length; i++) {
                // get the motherGrandfather Name and mothergrandmother (parents-grands)
                if (this.fatherMother == result.data[i].name) {
                  this.motherGrandfather1 = result.data[i].sire;
                  this.mothergrandmother1 = result.data[i].dam;
                  // get the motherGrandfather Name and mothergrandmother Extra
                  for (let i = 0; i < result.data.length; i++) {
                    if (
                      this.motherGrandfather1 &&
                      this.motherGrandfather1 == result.data[i].name
                    ) {
                      this.motherGrandfather1Extra = result.data[i].extra;
                      this.motherGrandfather1Color = result.data[i].color;
                    }
                    if (
                      this.mothergrandmother1 &&
                      this.mothergrandmother1 == result.data[i].name
                    ) {
                      this.mothergrandmother1Extra = result.data[i].extra;
                      this.mothergrandmother1Color = result.data[i].color;
                    }
                  }
                }
              }
            }
            // get the motherMother Name (grands)
            if (this.motherMother == result.data[i].name) {
              this.motherMotherExtra = result.data[i].extra;
              this.motherMotherColor = result.data[i].color;
              for (let i = 0; i < result.data.length; i++) {
                // get the motherGrandfather Name and mothergrandmother (parents-grands)
                if (this.motherMother == result.data[i].name) {
                  this.motherGrandfather2 = result.data[i].sire;
                  this.mothergrandmother2 = result.data[i].dam;
                  // get the motherGrandfather Name and mothergrandmother Extra
                  for (let i = 0; i < result.data.length; i++) {
                    if (
                      this.motherGrandfather2 &&
                      this.motherGrandfather2 == result.data[i].name
                    ) {
                      this.motherGrandfather2Extra = result.data[i].extra;
                      this.motherGrandfather2Color = result.data[i].color;
                    }
                    if (
                      this.mothergrandmother2 &&
                      this.mothergrandmother2 == result.data[i].name
                    ) {
                      this.mothergrandmother2Extra = result.data[i].extra;
                      this.mothergrandmother2Color = result.data[i].color;
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
  },
  mounted() {
    this.loadData();
    this.getPedigrees();
  },
});
</script>
