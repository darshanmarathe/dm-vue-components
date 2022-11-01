<template>
  <div ref="jsoneditor" id="jsoneditor">
    <h2>{{title}}</h2>

  </div>
</template>

<script>
import './JsonForm.css';
import { JSONEditor } from '@json-editor/json-editor/dist/jsoneditor';
export default {
  name: 'dm-json-form',
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
    title: {
      type: String,
      default: ""
    },
  },

  mounted() {
    debugger;
    // access our input using template refs, then focus

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

    editor.on('change' , () => {
      this.$emit('change' , editor.getValue())
    })

  },


  emits: ['onChange'],
};
</script>
