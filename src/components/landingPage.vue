<template>
  <div>
    <!-- Navbar specific to the landing page -->
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Crafted</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link custom-link" href="#">WHAT IS CRAFTED</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom-link" href="#">OUR TEAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom-link" href="#">LOGIN</a>
            </li>
            <li class="nav-item">
              <!-- Apply the custom button class -->
              <a class="custom-btn" href="#">GET STARTED HERE!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
  
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
      <AppFooter />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import AppFooter from './Appfooter.vue'; 
  
  export default {
    name: 'landingPage',
    components: {
      AppFooter, // Register the Footer component
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
  /* Custom styling for the "Get Started Here!" button */
  .custom-btn {
    background-color: #383a68;
    color: #e6e0d6;
    border-radius: 50px;
    padding: 10px 20px;
    font-weight: bold;
    text-decoration: none; /* Remove underline */
    margin-left: 15px; /* Space it out from other items */
  }
  
  .custom-btn:hover {
    background-color: #31337b; /* Slightly lighter shade on hover */
    color: #ffffff;
  }
  
  /* Custom styling for navbar */
  .custom-navbar {
    background-color: #4b4f7b;
  }
  
  .custom-link {
    color: #e6e0d6;
    font-weight: bold;
  }
  
  .custom-link:hover {
    color: #ffffff;
  }
  
  /* Global background color to avoid white */
  body {
    background-color: #f3f3f6;
  }
  </style>
  