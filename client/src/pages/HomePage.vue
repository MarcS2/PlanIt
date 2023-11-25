<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-1 ">
        <section class="row ">
          <div class="fs-2 text-white p-0 mt-3" style="width: 10dvh;"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <p class="purple-bg text-center" role="button">P</p>

          </div>

        </section>
      </div>
      <div class="col-11">

      </div>
    </section>
  </div>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
  </div>
  <div class="offcanvas-footer">
    <div class="text-center">
      <button class="btn btn-outline-primary mb-3 ">create project</button>

    </div>
  </div>
</div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">

.purple-bg {
  background-color: #b129c3;
}


.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
