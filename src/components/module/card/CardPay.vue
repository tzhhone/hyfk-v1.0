<template>
  <div>
    <el-row>
      <div style="margin: 5px 10px 5px 0px" v-for="item in data" :key="item.id">
        <div class="tz-card-select">
          <el-card
            class="box-card"
            :class="{ 'box-card-select-g': cardKeyOn == item.id }"
            @click="handleSelect(item.id)"
          >
            <div class="card-pay">
              <div class="card-title">

                <i class="iconfont" :class="item.img"></i>

                <p>{{ item.name }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "card-pay",
  data: () => ({
    cardKeyOn: 0,
  }),
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
    cardKey: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.cardKeyOn = this.$props.cardKey;
  },
  methods: {
    handleSelect(key) {
      this.cardKeyOn = key;
      this.$emit("card-click", key);
    },
  },
};
</script>

<style>
</style>
