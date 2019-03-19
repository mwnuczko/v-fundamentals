<template>
<div class="list">
  <table class="data-table">
    <tr class="list-header">
      <th v-for="meta in metaData">
        <a>{{ meta.text }}</a>
      </th>
    </tr>
    <tr class="list-item" v-for="item in items" :key="item.id"
        @click="handleTrClick(item)" :class="{highlighted: selectedItem === item }">
      <td v-for="meta in metaData" :key="meta.value">
        {{item[meta.value]}}
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    items: Array,
    metaData: Array,
    selectedItem: Object
  },
  methods: {
    handleTrClick(item){
      this.$emit('item-click', item);
    }
  }
};
</script>

<style scoped>
.list {
  margin: 0 10px 10px;
  padding: 10px 0;
}

.list table {
  width: 100%;
  border: 1px solid #777;
}

.list .list-item:nth-child(even) {
  background-color: #ececec;
}

.list .list-item:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}

.list .list-item:hover:nth-child(odd) {
  background-color: #b7b7b7;
}

.list .list-item.highlighted,
.list .list-item.highlighted:hover:nth-child(odd) {
  background-color: paleturquoise;
}

.list .list-header a {
  color: #3388ff;
  cursor: pointer;
}

.list .list-header .selected {
  font-weight: bold;
}
</style>
