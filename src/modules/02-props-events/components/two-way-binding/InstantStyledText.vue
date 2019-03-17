<template>
<div class="styled-text">
  <h3 class="headline mb-0">InstantStyledText</h3>
  <p :class="textCssClasses">{{exampleText}}</p>
  <div>
    <div>
      <input v-model="isBold" type="checkbox" id="insta-bold"/>
      <label for="insta-bold">Bold</label>
    </div>
    <div>
      <input v-model="isItalic" type="checkbox" id="insta-italic"/>
      <label for="insta-italic">Italic</label>
    </div>
    <div>
      <input v-model="isUnderline" type="checkbox" id="insta-underline"/>
      <label for="insta-underline">Underline</label>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'InstantStyledText',
  data() {
    return {
      exampleText: 'Lorem ipsum dolorem...',
      isBold: false,
      isItalic: false,
      isUnderline: false,
    };
  },
  computed: {
    textCssClasses() {
      return {
        'make-bold': this.isBold,
        'add-underline': this.isUnderline,
        'my-italic': this.isItalic,
      };
    },
  },
};
</script>

<style scoped>
.styled-text {
  border: 1px solid #000;
  padding: 18px;
  background-color: #FCE1E5;
}

.styled-text .make-bold {
  font-weight: bold;
}

.styled-text .add-underline {
  text-decoration: underline;
}

.styled-text .my-italic {
  font-style: italic;
}
</style>
