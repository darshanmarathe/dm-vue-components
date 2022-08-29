<template>
<div ref="jsoneditor" id="jsoneditor">
  Hello World
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
        schema: {
          type: "object",
          title: "Car",
          properties: {
            make: {
              type: "string",
              enum: [
                "Toyota",
                "BMW",
                "Honda",
                "Ford",
                "Chevy",
                "VW"
              ]
            },
            model: {
              type: "string"
            },
            year: {
              type: "integer",
              enum: [
                1995,1996,1997,1998,1999,
                2000,2001,2002,2003,2004,
                2005,2006,2007,2008,2009,
                2010,2011,2012,2013,2014
              ],
              default: 2008
            },
            safety: {
              type: "integer",
              format: "rating",
              maximum: "5",
              exclusiveMaximum: false,
              readonly: false
            }
          }
        }
      });
  },
  setup(props) {
    

  },

  emits: ['onChange'],
};
</script>
