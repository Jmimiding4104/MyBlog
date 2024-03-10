<template>
  <div class="about d-flex align-items-center justify-content-center position-relative">
    <div class="card mb-3 d-flex" style="max-width: 960px">
      <div class="row g-0">
        <div class="col-md-4 d-flex flex-column p-3">
          <div class="d-flex justify-content-center">
            <img
              src="../assets/images/5415.jpg"
              class="img-fluid rounded-circle title-img"
              alt="大頭照"
            />
          </div>
          <ul class="d-flex justify-content-around list-unstyled mt-3 mb-0">
            <li>
              <a href="#"><i class="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-github"></i></a>
            </li>
          </ul>
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
          <button type="button" class="btn btn-secondary">Left</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  min-height: 100vh;
  background-image: url('@/assets/images/kateryna-hliznitsova-gur97TCS0aQ-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: 50% 100%;
}

.about::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 0;
}

.title-img {
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1 / 1;
}

</style>
