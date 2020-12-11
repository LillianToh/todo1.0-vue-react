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
          <button @click="del(index)">x</button>
          <!-- <button v-if="isCompleted" @click="isCompleted=false" :class="{completed: isCompleted}"> strike </button> -->
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
        { id: 0, text: "Study" },
        { id: 1, text: "Shower" },
        { id: 2, text: "Tennis" }
      ],
      newItem: "",
      isCompleted: false
    };
  },
  methods: {
    add() {
      this.list.push({
        id: Math.random(),
        text: this.newItem
      });
    },
    del(index) {
      // delete one item at that index
      this.list.splice(index, 1);
    },
    cross(index) {
      this.isCompleted = true;
      // param index not being used, currently a boolean...
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
