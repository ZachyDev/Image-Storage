<template>
  <div class="about">
      <div class="header">
          <h2>About Ima-Gy</h2>
      </div>
      <!-- image -->
      <div class="about-img">
          <img src="../images/home.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
    .about{
        overflow: hidden;
    }
    .header{
        background: #222;
        padding: 10px 5px;
        margin: 10px 100px;
    }
    div h2{
        color:#fff;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: normal;
    }
    @media(max-width:768px) {
        .about{
            display:block;
            width: 100%;

        }
        .about-img img{
            width: 100%;
            height:100%;
        }
    }
</style>