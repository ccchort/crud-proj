<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const users = ref([]);
let timer = null;

const data = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    users.value = await response.json();
  } catch (error) {
    console.error('Error:', error);
  };
}
onMounted(() => {
  data();
  timer = setInterval(data, 3000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div id="app">
    <h1>таблица пользователей</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Email</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: x-large;
  font-variant: small-caps;
}
.table {
	width: 100%;
	border: none;
	margin-bottom: 20px;
	border-collapse: separate;
}
.table thead th {
	font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: #EDEDED;
	font-size: 14px;
	border-top: 1px solid #ddd;
}
.table tr th:first-child, .table tr td:first-child {
	border-left: 1px solid #ddd;
}
.table tr th:last-child, .table tr td:last-child {
	border-right: 1px solid #ddd;
}
.table thead tr th:first-child {
	border-radius: 20px 0 0 0;
}
.table thead tr th:last-child {
	border-radius: 0 20px 0 0;
}
.table tbody td {
	text-align: left;
	border: none;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;
}
.table tbody tr:nth-child(even) {
	background: #F8F8F8;
}
.table tbody tr:last-child td{
	border-bottom: 1px solid #ddd;
}
.table tbody tr:last-child td:first-child {
	border-radius: 0 0 0 20px;
}
.table tbody tr:last-child td:last-child {
	border-radius: 0 0 20px 0;
}
</style>
