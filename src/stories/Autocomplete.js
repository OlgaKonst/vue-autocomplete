import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Autocomplete from '../components/Autocomplete';

storiesOf('Autocomplete', module)
  .add('display available data', () => ({
    components: { Autocomplete },
    template: `<Autocomplete v-model="value" :getItems="getItems" :clear="clear">
                <template slot="item" slot-scope="props">
                  <span v-if="typeof props.item ==='object'">
                  <b>{{props.item.currency}}</b> баланс: {{props.item.balance}}
                  </span>
                  <span v-else>{{props.item}}</span>
                </template>
              </Autocomplete>`,
  }));
