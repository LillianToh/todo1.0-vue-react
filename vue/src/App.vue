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
          <span @click="isCompleted = true" :class="{ completed: isCompleted }">
            {{ index + 1 }}: {{ item.text }}
          </span>
          <button @click="del(index)">x</button>
        </li>
      </ul>
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
        { id: 0, text: "Study", completed: false },
        { id: 1, text: "Shower", completed: false },
        { id: 2, text: "Tennis", completed: false }
      ],
      newItem: "",
      isCompleted: false
    };
  },
  methods: {
    add() {
      this.list.push({
        id: Math.random(),
        text: this.newItem,
        completed: this.isCompleted
      });
    },
    del(index) {
      // delete one item at that index
      this.list.splice(index, 1);
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
