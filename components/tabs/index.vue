<template>
  <ul class="c-tabs bgc11 fs28 u-tac">
    <li
      v-for="(item, itemIndex) in tabs"
      :key="itemIndex"
      class="c-tabs__item"
      :class="{ 'is-active': index === itemIndex }"
      @click="change(itemIndex)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script src="./script.js"></script>
