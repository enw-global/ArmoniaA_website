import {defineType} from 'sanity'

export default defineType({
  name: 'videoAsset',
  title: 'Video Asset',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videoFile',
      title: 'Video File',
      description: 'URL to the video file from S3',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    },
  ],
})
