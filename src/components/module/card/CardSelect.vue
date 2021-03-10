<template>
  <el-row :gutter="10">
    <el-col
      :xs="12"
      :sm="8"
      :md="6"
      :lg="4"
      :xl="4"
      v-for="item in data"
      :key="item.id"
      
    >
      <div class="tz-card-select">
        <el-card
          class="box-card gray"
          :class="{ 'box-card-select': cardKeyOn == item.id }"
          @click="handleSelect(item.id)"
        >
          <div class="card-title">
            <p>{{ item.name }}</p>
            <span class="card-span">{{ des }}: {{ item.count }}</span>

          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CardSelect",
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
    des: {
      type: String,
      default: "商品数量",
    },
    cardKey: {
      type: Number,
      default: 1,
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