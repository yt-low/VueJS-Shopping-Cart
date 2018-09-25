<template>
	<div class="accordion-wrapper">
		<ul>
			<li 
				v-for="(value, key, i) in accordions" 
				v-bind:key="`accordion-item-${i}`"
				v-bind:class="i === activeQuestionIndex ? 'active' : ''">
				<div class="title" 
					v-on:click="toggleAccordion(i)">
					<span class="indicator"></span>
					{{ key }}
				</div>
				<div class="content">
					{{ value }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'accordion',
	props: ['accordions'],

	data: function() {
		return {
			activeQuestionIndex: 0,
		}
	},

	methods: {
		toggleAccordion: function(itemIndex){
			this.activeQuestionIndex === itemIndex
			 ? this.activeQuestionIndex = null
             : this.activeQuestionIndex = itemIndex
		}
	}
}
</script>