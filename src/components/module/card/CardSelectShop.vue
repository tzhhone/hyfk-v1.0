<template>
  <div>
    <el-row>
      <div
        style="margin: 5px 10px 5px 0px;"
        v-for="item in data"
        :key="item.id"
      >
        <div class="tz-card-select">
          <el-card
            class="box-card"
            :class="{ 'box-card-select-g': cardKeyOn == item.id }"
            @click="handleSelect(item.id)"
          >
            <div class="card-title">
              <p>{{ item.name }}</p>
              <span class="card-pirce" v-if="item.max">￥ {{ item.min }} - {{ item.max }}</span>
              <span class="card-pirce" v-else>￥ {{ item.min }}</span>
              <el-tag effect="dark" size="mini" style="margin-left: 5px;" v-for="item2 in item.tags" :key="item2" >{{
                item2
              }}</el-tag>

              <div class="card-num">
                  <div class="card-p">
                    <p></p>
                    
                  </div>
                  <span style="margin-left: 100px;font-size: 12px;">剩余 {{ item.num }} 件</span>
                
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
  name: "card-select-shop",
  data: () => ({
    cardKeyOn: 0,
  }),
  props: {
    data: {
      type: Array,
      default: function() {
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
    console.log(this.data[0].tags);
  },
  methods: {
    handleSelect(key) {
      this.cardKeyOn = key;
      this.$emit("card-click", key);
    },
  },
};
</script>

<style></style>
