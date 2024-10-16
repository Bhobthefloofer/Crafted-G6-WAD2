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

    
  

        <main class="container mx-auto py-8">
          <section class="flex flex-col md:flex-row justify-between items-start text-center md:text-left">
          
             <!-- Center Image Block -->
            <div class="md:w-1/3 mb-4 md:mb-0">
              <img src="../assets/dummy-image.jpg" alt="Dummy image" class="w-full h-auto mx-auto md:max-w-sm" />
            </div>

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
  