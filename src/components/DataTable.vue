<template>
<div class="list">
  <table class="data-table">
    <tr class="list-header">
      <th v-for="th in metaData">
        <a>{{ th.text }}</a>
      </th>
    </tr>
    <tr class="list-item" :class="{highlighted: selectedItem === item }" v-for="item in items" @click="handleTrClick(item)">
      <td v-for="meta in metaData">
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
    selectedItem: Object,
    metaData: Array
  },
  methods: {
    handleTrClick(item){
      this.$emit('item-click', item);
    },
    isSelected(item){
      return this.selectedItem.id === item.id;
    }
  },
  computed: {
    ths() {
      return ( this.items & this.items[0] && Object.keys(this.items[0]));
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
