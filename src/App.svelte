<script>
  import Home from "./Home.svelte";
  import router from "page";
  import routes from "./routes.js";

  let page;
  let params;
  let user = true;

  // Iterate through the routes
  routes.forEach(route => {
    router(
      route.path,

      (ctx, next) => {
        params = ctx.params;
        next();
      },

      () => {
        page = route.component;
      }
    );
  });

  // Start the router
  router.start();
</script>

<!-- <Home /> -->
<svelte:component this={page} />
