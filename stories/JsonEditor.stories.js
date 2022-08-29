import JsonEditor from './JsonEditor.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Advanced/JsonEditor',
  component: JsonEditor,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

const schema = {
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


const basicData = {
  "make": "Chevy",
  "model": "2000",
  "year": 2014,
  "safety": 4
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { JsonEditor: JsonEditor },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<json-editor v-bind="args" />',
});

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {
  primary: true,
  schema: schema,
  data : basicData
};

