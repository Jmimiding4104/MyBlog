<template>
  <div class="about d-flex align-items-center justify-content-center position-relative">
    <div class="card mb-3 d-flex" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  background-image: url('@/assets/images/kateryna-hliznitsova-gur97TCS0aQ-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: 50% 100%;
  z-index: -1;
}

.about::before{
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 0;
}
</style>