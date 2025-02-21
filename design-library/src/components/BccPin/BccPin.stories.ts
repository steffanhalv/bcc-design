import { CheckCircleIcon } from "@bcc-code/icons-vue";
import BccPin from "./BccPin.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

/**
 * A companion to the badge component, to render just an icon or a number like "42" or a counter like "4/10". See the `BccBadge` component for a larger, differently styled version to be used with text.
 */
export default {
  title: "Components/BccPin",
  component: BccPin,
  argTypes: {
    context: {
      description: "Which context color to use for the styling of the pin",
      options: ["neutral", "danger", "warning", "success", "info"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof BccPin>;

const Template: StoryFn<typeof BccPin> = (args) => ({
  components: { BccPin },
  setup() {
    return { args, CheckCircleIcon };
  },
  template: `
    <BccPin v-bind="args" :icon="CheckCircleIcon" />
  `,
});

/**
 * Set the `context` prop to control how the pin looks
 */
export const Example = Template.bind({});
Example.args = {
  context: "success",
  text: "",
};
Example.parameters = {
  docs: {
    source: {
      language: "html",
      code: `
<BccPin context="success" :icon="CheckCircleIcon" />      
`,
    },
  },
};

/**
 * Set the `icon` prop to render an icon in the pin
 */
export const WithIcon: StoryFn<typeof BccPin> = () => ({
  components: { BccPin },
  setup() {
    return { CheckCircleIcon };
  },
  template: `
    <div class="flex items-start space-x-2">
      <BccPin context="neutral" :icon="CheckCircleIcon" />
      <BccPin context="danger" :icon="CheckCircleIcon" />
      <BccPin context="warning" :icon="CheckCircleIcon" />
      <BccPin context="success" :icon="CheckCircleIcon" />
      <BccPin context="info" :icon="CheckCircleIcon" />
    </div>
  `,
});

/**
 * Set the `text` prop to render a text in the pin. If both `icon` and `text` are given only the `icon` is rendered
 */
export const WithText: StoryFn<typeof BccPin> = () => ({
  components: { BccPin },
  template: `
    <div class="flex items-start space-x-2">
      <BccPin context="neutral" text="1" />
      <BccPin context="danger" text="2" />
      <BccPin context="warning" text="10" />
      <BccPin context="success" text="43" />
      <BccPin context="info" text="4 / 10" />
    </div>
  `,
});
