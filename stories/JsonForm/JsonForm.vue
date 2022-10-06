<template>
  <div ref="jsoneditor" id="jsoneditor">

  </div>
</template>

<script>
import './JsonForm.css';
import { JSONEditor } from '@json-editor/json-editor/dist/jsoneditor';
export default {
  name: 'json-form',
  components: {},

  props: {
    schema: {
      type: Object,
    },
    data: {
      type: Object,
    },
    enabled: {
      type: Boolean,
      default: true
    },
  },

  mounted() {
    debugger;
    // access our input using template refs, then focus
    console.warn(this.$refs)
    var editor = new JSONEditor(this.$refs.jsoneditor, {
      theme: 'bootstrap4',
      iconlib: 'fontawesome4',
      schema: this.schema,
      startval: this.data
    });
    console.warn(this.editor)

    editor.on('ready', () => {
      // Now the api methods will be available
      if (this.enabled === false) {
        editor.disable();
      }
    });

  },


  emits: ['onChange'],
};
</script>
