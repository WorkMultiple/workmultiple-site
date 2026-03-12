import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'WorkMultiple' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: { label: 'Title', description: 'The post title and URL slug' },
        }),
        description: fields.text({
          label: 'Description',
          description: 'SEO meta description (150-160 characters)',
          multiline: true,
        }),
        date: fields.date({
          label: 'Publish Date',
          description: 'Publication date for the post',
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'WorkMultiple',
        }),
        status: fields.select({
          label: 'Status',
          description: 'Draft posts are only visible locally, not on the live site',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
        }),
        tags: fields.multiselect({
          label: 'Tags',
          description: 'Categorize this post',
          options: [
            { label: 'AI Automation', value: 'ai-automation' },
            { label: 'Tools & Reviews', value: 'tools-reviews' },
            { label: 'Workflows', value: 'workflows' },
            { label: 'Business Strategy', value: 'business-strategy' },
            { label: 'Behind the Build', value: 'behind-the-build' },
          ],
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/blog-images',
              publicPath: '/blog-images/',
              transformFilename: (originalFilename: string) => {
                const ext = originalFilename.match(/\.[^.]+$/)?.[0] || '.png';
                const base = originalFilename.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9-_]/g, '-');
                const id = Date.now().toString(36);
                return `${base}-${id}${ext}`;
              },
            },
          },
          components: {
            'video-embed': block({
              label: 'Video Embed',
              description: 'Embed a video that autoplays when scrolled into view',
              schema: {
                src: fields.text({
                  label: 'Video path',
                  description: 'Path to the video file (e.g. /blog-videos/my-post/recording.webm)',
                }),
                alt: fields.text({
                  label: 'Caption (optional)',
                  description: 'Descriptive caption shown below the video',
                }),
              },
            }),
            'prompt-block': block({
              label: 'Prompt Block',
              description: 'A copyable prompt block for sharing AI prompts with readers',
              schema: {
                label: fields.text({
                  label: 'Label',
                  defaultValue: 'Prompt',
                  description: 'Label shown above the prompt (e.g. "Prompt", "System Prompt", "Try this")',
                }),
                prompt: fields.text({
                  label: 'Prompt text',
                  multiline: true,
                  description: 'The full prompt text. Supports markdown formatting.',
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
