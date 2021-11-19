<template>
  <div class="auth-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    rgb(138, 138, 145),
    rgb(144, 144, 151),
    rgb(151, 149, 156),
    rgb(157, 155, 162),
    rgb(164, 161, 167),
    rgb(170, 167, 173),
    rgb(177, 172, 178),
    rgb(183, 178, 184),
    rgb(190, 184, 189),
    rgb(196, 190, 195),
    rgb(203, 195, 200),
    rgb(209, 201, 206)
  );
}
</style>
