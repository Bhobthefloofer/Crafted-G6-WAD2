<template>
    <div>
      <!-- Navbar specific to the landing page -->
      <header class="bg-indigo-900 text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-3xl font-bold">Crafted</h1>
          <button class="md:hidden" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </button>
          <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="hidden md:block">
            <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><a class="hover:underline" href="#">What is Crafted?</a></li>
              <li><a class="hover:underline" href="#">Team</a></li>
              <li><a class="hover:underline" href="#">Get Started</a></li>
              <li><a class="hover:underline" href="#">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <!-- Landing page content -->
      <main class="container mx-auto py-8">
        <section class="text-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/UxGBzdb24lLCLF8SuW9wVcZfekNpwmH0ARL0Cadzic2NUOnTA.jpg"
            alt="Cloud icon"
            class="mx-auto mb-4"
            width="100"
            height="100"
          />
          <h2 class="text-2xl font-bold mb-2">Is marketing stressing you out?</h2>
          <p class="text-lg mb-6">We make marketing the least of your worries</p>
          <h3 class="text-xl font-bold mb-4">So why should you choose us?</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="bg-indigo-900 text-white p-4 rounded">
              <h4 class="text-lg font-bold mb-2">Reason 1</h4>
              <p>Explanation of reason 1. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="bg-indigo-900 text-white p-4 rounded">
              <h4 class="text-lg font-bold mb-2">Reason 2</h4>
              <p>Explanation of reason 2. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="bg-indigo-900 text-white p-4 rounded">
              <h4 class="text-lg font-bold mb-2">Reason 3</h4>
              <p>Explanation of reason 3. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <button class="bg-indigo-900 text-white py-2 px-4 rounded">Get started with Crafted</button>
        </section>
      </main>
  
      <!-- Import the Footer Component -->
      <Footer />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Footer from '../components/footer.vue'; // Importing Footer.vue
  
  export default {
    name: 'landingPage',
    components: {
      Footer, // Register the Footer component
    },
    setup() {
      const isMenuOpen = ref(false);
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      return {
        isMenuOpen,
        toggleMenu,
      };
    },
  };
  </script>
  
  <style scoped>
 
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>