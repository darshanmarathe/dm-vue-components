<template>
<div ref="jsoneditor" id="jsoneditor">

</div>
</template>

<script>
import './JsonEditor.css';
import { JSONEditor } from '@json-editor/json-editor/dist/jsoneditor';
export default {
  name: 'json-editor',

  components: {},

  props: {
    schema: {
      type: Object,
    },
    data: {
      type: Object,
    },
     enabled: {
      type: Object,
    },
  },

  mounted() {
    // access our input using template refs, then focus
     console.warn(this.$refs)
  var editor = new JSONEditor(this.$refs.jsoneditor,{
        theme:'bootstrap4',
        iconlib:'fontawesome4',
        schema: this.schema,
        startval : this.data
      });
  },


  emits: ['onChange'],
};
</script>
