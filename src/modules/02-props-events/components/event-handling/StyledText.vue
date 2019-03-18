<template>
<div class="styled-text">
  <h3 class="headline mb-0">StyledText</h3>
  <p :class="classes">{{exampleText}}</p>
  <div>
    <div>
      <input type="checkbox" id="bold" v-model="isBold"/>
      <label :class="" for="bold">Bold</label>
    </div>
    <div>
      <input type="checkbox" id="italic" @change="isItalic = !isItalic"/>
      <label for="italic">Italic</label>
    </div>
    <div>
      <input type="checkbox" id="underline" @change="isUnderline = !isUnderline"/>
      <label for="underline">Underline</label>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'StyledText',
  data() {
    return {
      exampleText: 'Lorem ipsum dolorem...',
      isBold: false,
      isItalic: false,
      isUnderline: false,
    };
  },
  computed: {
    classes() {
      return {
        'make-bold': this.isBold,
        'add-underline': this.isUnderline,
        'my-italic': this.isItalic
      };
    }
  }
};
</script>

<style scoped>
.styled-text {
  border: 1px solid #000;
  padding: 18px;
}

.styled-text .my-groovy {
  background-color: #0f0;
  color: #000;
  border: 6px solid #c00;
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
