<!-- skeleton.vue -->
<template>
   <div id="Menu">
      <div class="skeleton">loading 骨架屏</div>
    </div>
    <div id="header">
      <h3 class="skeleton">loading 骨架屏</h3>
    </div>
    <div id="wrapper">
      <h3 class="skeleton">loading 骨架屏</h3>
    </div>
    <div id="footer">
      <h3 class="skeleton">loading 骨架屏</h3>
    </div>
</template>

<style lang="scss" scoped>
  @keyframes skeleton {
    0% {
      background-position: 100% 50%;
    }

    50% {
      background-position: 50% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }

  #Menu {
    width: 200px;
    height: 100%;
    position: fixed;
   
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #dedede;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8)  10%, rgba(255, 255, 255, 0) 80%);
      background-size: 230% 100%;
      background-position: 30% 0%;
      animation: skeleton 1s infinite;
 
  }
  
  #header {
    background-color: #dedede;
    height: 50px;
    line-height: 50px;
    display: flex;
    margin-right: 20px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 80%);
    background-size: 230% 100%;
    background-position: 30% 0%;
    animation: skeleton 1s infinite;
  }
  
  #wrapper {
    background-color: #dedede;
    margin: 20px;
    display: flex;
    height: 320px;

    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 80%);
    background-size: 230% 100%;
    background-position: 30% 0%;
    animation: skeleton 1s infinite;
  }
  
  #footer {
    background-color: #dedede;
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 80%);
    background-size: 230% 100%;
    background-position: 30% 0%;
    animation: skeleton 1s infinite;
  }
  
     
</style>