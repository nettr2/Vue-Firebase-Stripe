<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/lighter1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Dope Lighters</h5>
                            <p class="card-text">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis urna, a molestie justo. Quisque cursus libero et condimentum vulputate
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/alien-dog.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Alien Dawg</h5>
                            <p class="card-text">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis urna, a molestie justo. Quisque cursus libero et condimentum vulputate
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/Bong.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Bubble it up Bongs</h5>
                            <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis urna, a molestie justo. Quisque cursus libero et condimentum vulputate

                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }

</style>
