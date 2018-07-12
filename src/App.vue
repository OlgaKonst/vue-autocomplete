<template>
  <div id="app">
    <p>Try typing <em>draw</em> or <em>fill</em></p>
    <Autocomplete v-model="value" :getItems="getItems" :clear="clear">
      <template slot="item" slot-scope="props">
        <span v-if="typeof props.item ==='object'">
         <b>{{props.item.currency}}</b> баланс: {{props.item.balance}}
        </span>
        <span v-else>{{props.item}}</span>
      </template>
    </Autocomplete>
  </div>
</template>

<script>
/* eslint-disable */

import Autocomplete from './components/Autocomplete';
import getItems from './api';

export default {
	name: 'App',
	components: {
		Autocomplete,
	},
	data() {
		return {
			value: '',
			a: [],
			getItems,
			clear: false,
		};
	},
	methods: {
		getInputValue(e) {
			this.value = e.target.value;
		},
		clearAutocomplete() {
			this.clear = true;
		},
		getFocus() {
			this.clear = false;
		},
		getValue() {},
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
