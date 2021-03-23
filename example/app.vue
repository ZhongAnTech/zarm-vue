<template lang="html">
<div :class="{ 'theme-dark': isDark }">
    <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      isDark: window.location.pathname.includes('dark.html') ? true : false,
    };
  },
};
</script>
