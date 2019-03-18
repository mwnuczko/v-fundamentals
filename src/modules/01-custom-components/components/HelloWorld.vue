<template>
<div class="hello my-hello-world">
  <h1>Hello, Vue!</h1>
	<p>Your name is {{ name }}.</p>
	<p>Your children:
		<ol>
			<li v-for	="child in children">{{ child.name }}</li>
		</ol>
	</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: `Bob ${this.random}`,
      children: [
          { name: `Kate ${this.random}` },
					{ name: `Bob Jr ${this.random}`}
      ],
			random: Math.floor(Math.random() * 100)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.my-hello-world {
		background-color: green;
	}
</style>

<!-- TODO this.$set(this.batman, 'id', 27) -->
