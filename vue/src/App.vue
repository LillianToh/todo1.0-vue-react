<template>
  <div class="container rounded">
    <div>
      <h3>To Do List</h3>

      <!-- v-model for two way data binding -->
      <input type="text" v-model="newItem" placeholder="insert to-do" />
      <button class="btn btn-primary" @click="add()">+</button>
      <p>Click + to add " {{ newItem }} " in the list.</p>

      <ul>
        <!-- assign key to input item of the array list -->
        <li v-for="(item, index) in list" :key="index">
          <input type="checkbox" v-model="item.isCompleted" />
          <span :class="{ completed: item.isCompleted }">
            {{ index + 1 }}: {{ item.text }}
          </span>
          <button class="btn btn-outline-dark" @click="del(index)">x</button>
        </li>
      </ul>

      <button id="emoji" class="btn btn-warning" @click="allComplete">
        All Done!
      </button>
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
      this.list.sort();
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
      var emoji = document.querySelector("#emoji");
      emoji.innerHTML = "WOOHOO! 🎉";
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}

.container {
  display: grid;
  width: 500px;
  padding: 100px;
  margin: 35px auto;
  border: 1px solid black;
  background-color: palevioletred;
}

body {
  background-color: palegoldenrod;
}

h3 {
  color: black;
}
</style>
