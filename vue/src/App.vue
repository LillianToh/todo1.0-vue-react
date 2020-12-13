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
          <input type="checkbox" v-model="item.isCompleted" />
          <span :class="{ completed: item.isCompleted }">
            {{ index + 1 }}: {{ item.text }}
          </span>
          <button @click="del(index)">x</button>
        </li>
      </ul>

      <button @click="allComplete">WOOHOO!</button>
    </div>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "app",
  data() {
    return {
      list: [
        { id: 0, text: "Study", isCompleted: false },
        { id: 1, text: "Shower", isCompleted: false },
        { id: 2, text: "Tennis", isCompleted: false }
      ],
      newItem: ""
    };
  },
  methods: {
    add() {
      this.list.push({
        id: Math.random(),
        text: this.newItem,
        isCompleted: false
      });
      this.newItem = "";
    },
    del(index) {
      // delete one item at that index
      this.list.splice(index, 1);
    },
    allComplete() {
      this.list.forEach(item => {
        item.isCompleted = true;
      });
    }
  }
};
</script>

<style>
h3 {
  color: red;
}

.completed {
  text-decoration: line-through;
}
</style>
