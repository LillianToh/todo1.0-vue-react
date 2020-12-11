<template>
  <div>
    <div>
      <h3>To Do List</h3>

      <!-- v-model for two way data binding -->
      <input type="text" v-model="newItem" placeholder="insert to-do" />
      <p>Click ADD to add " {{ newItem }} " in the list</p>
      <button @click="add()">ADD</button>

      <ul>
        <!-- assign key to input item of the array list -->
        <li v-for="(item, index) in list" :key="index">
          <span> {{ index + 1 }}: {{ item.text }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      list: [
        { id: 0, text: "Study" },
        { id: 1, text: "Shower" },
        { id: 2, text: "Tennis" }
      ],
      newItem: ""
    };
    console.log(this.list);
  },
  methods: {
    add() {
      this.list.push({
        id: Math.random(),
        text: this.newItem
      });
    }
  }
};
</script>

<style>
h3 {
  color: red;
}
</style>
