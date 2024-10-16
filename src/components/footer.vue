<template>
    <!-- this is a footer component that can be reused for our pages -->
     <!-- this is a tentative design, it will be improvised later -->
    <footer class="bg-indigo-900 text-white py-4">
      <div class="container mx-auto text-center">
        <p class="mb-4">Crafted</p>
        <div class="flex justify-center space-x-4">
          <a class="hover:underline" href="#"><i class="fab fa-facebook-f"></i></a>
          <a class="hover:underline" href="#"><i class="fab fa-twitter"></i></a>
          <a class="hover:underline" href="#"><i class="fab fa-instagram"></i></a>
          <a class="hover:underline" href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'footer',
  };
  </script>
  
  <style scoped>
  
  </style>
  