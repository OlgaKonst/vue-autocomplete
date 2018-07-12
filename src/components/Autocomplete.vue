<template>
  <div class="autocomplete" @blur="clearAutocomplete" >
    <input type="text" @input="onInput($event)" v-model="inputval"
      @focus="onFocus" @keydown.tab="clearAutocomplete" ref="autocomplete">
    <div class="autocomplete_result" :style="displayDiv">
      <ul>
        <li :key="idx" v-for="(item, idx) in items" @click="onClick(item)">
          <slot name="item" :item="item"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
	name: 'Autocomplete',
	props: {
		input: String,
		getItems: Function,
	},
	data() {
		return {
			inputval: '',
			items: [],
			promiseArr: [],
			type: 'String',
		};
	},
	computed: {
		displayDiv() {
			if (this.items.length === 0) {
				return {
					display: 'none',
					padding: '0px',
				};
			}
			return {
				display: 'block',
				padding: '3px',
			};
		},
	},
	methods: {
		onClick(item) {
			if (typeof item === 'object') {
				this.inputval = item.currency;
			} else {
				this.inputval = item;
			}
			this.$emit('input', this.inputval);
			this.items.splice(0, this.items.length);
		},
		onInput() {
			const promise = this.getItems(this.inputval);
			if (this.promiseArr.length) {
				this.promiseArr[0].abort();
				this.promiseArr.splice(0, 1);
			}
			if (promise.abort) {
				this.promiseArr.push(promise);
			}
			promise
				.then(data => {
					this.items = [].concat(data);
					if (promise.abort) {
						this.promiseArr.splice(0, 1);
					}
				})
				.then(() => {
					this.$emit('input', this.inputval);
				});
		},
		clearAutocomplete() {
			this.items.splice(0, this.items.length);
		},
		onFocus() {
			this.getItems(this.inputval).then(data => {
				this.items = [].concat(data);
			});
		},
	},
	handler(e) {
		if (e.target !== this.$refs.autocomplete) {
			this.clearAutocomplete();
		}
	},
	mounted() {
		/* const handler = (e) => {
      if (e.target !== this.$refs.autocomplete) {
        this.clearAutocomplete();
      }
    };*/
		document.addEventListener('click', this.handler);
	},
	unmounted() {
		document.removeEventListener('click', this.handler);
	},
};
</script>

<style scoped>
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
.autocomplete {
	width: 300px;
	margin: 0 auto;
	text-align: left;
	outline: 1px solid red;
}
input {
	box-sizing: border-box;
	width: 100%;
	padding: 3px;
}
.autocomplete_result {
	border: 1px solid #696969;
	font-size: 13.3333px;
	font-weight: 400;
	cursor: default;
	display: none;
}
</style>
