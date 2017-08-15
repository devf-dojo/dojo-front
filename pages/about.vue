<template>
	<div class="container">
	    <!-- Page Content goes here -->
		<div class="row">
			<div class="col l12">
				Hola Emmanuel
			</div>
		</div>
	</div>
</template>

<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>
