import { config, fields, collection } from '@keystatic/core';

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
            },
          },
        }),
      },
    }),
  },
});
