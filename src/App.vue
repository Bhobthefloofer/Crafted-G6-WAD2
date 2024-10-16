<template>
  <div id="app">
    <router-view /> <!-- This renders the current route's component -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles can go here */
body {
  font-family: 'Roboto', sans-serif;
}
</style>
