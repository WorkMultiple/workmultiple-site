import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    'video-embed': {
      render: component('./src/components/VideoEmbed.astro'),
      attributes: {
        src: { type: String, required: true },
        alt: { type: String, default: '' },
      },
    },
    'prompt-block': {
      render: component('./src/components/PromptBlock.astro'),
      attributes: {
        label: { type: String, default: 'Prompt' },
        prompt: { type: String, required: true },
      },
    },
  },
});
