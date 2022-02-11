<script>
  let showHeader = false;
  function toggleHeader() {
    showHeader = !showHeader;
    console.log(showHeader);
  }
</script>

<nav class="shadow-md">
  <div class="container mx-auto px-6 py-2 flex justify-between items-center ">

    <div class="py-2 justify-between items-center flex-1 flex flex-wrap">

      <div class="text-2xl font-bold text-gray-800 md:text-3xl">
        <a href="/" class="flex flex-col">
          <span>Snow Cool India</span>
          <span class="text-xs">A complete solution for HVAC</span>
        </a>
      </div>

      <div class="block md:hidden">
        <button
          type="button"
          on:click={toggleHeader}
          class="block text-gray-800 hover:text-gray-700 focus:text-gray-700
          focus:outline-none">
          {#if !showHeader}
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0
                1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12
                10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0
                2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style=" fill:#000000;">
              <path
                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L
                3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L
                19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L
                20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L
                4.7070312 3.2929688 z" />
            </svg>
          {/if}
        </button>
      </div>
      <ul class="inline-flex text-sm hidden md:flex">
        <li>
          <a class="px-12 " href="/">Home</a>
        </li>
        <li>
          <a class="px-12 hover:text-gray-800" href="/about">About Us</a>
        </li>
        <li>
          <a class="px-12 hover:text-gray-800" href="#">Products</a>
        </li>
        <li>
          <a class="px-12 hover:text-gray-800" href="/contact">Contact</a>
        </li>
      </ul>
    </div>

  </div>
  {#if showHeader}
    <ul class="flex text-sm ">
      <li>
        <a class="px-5 " href="/">Home</a>
      </li>
      <li>
        <a class="px-5 hover:text-gray-800" href="/about">About Us</a>
      </li>
      <li>
        <a class="px-5 hover:text-gray-800" href="#">Products</a>
      </li>
      <li>
        <a class="px-5 hover:text-gray-800" href="/contact">Contact</a>
      </li>
    </ul>
  {/if}
</nav>
