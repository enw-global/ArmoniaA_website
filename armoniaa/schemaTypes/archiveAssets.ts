import {defineType} from 'sanity'

export default defineType({
  name: 'archiveAssets',
  title: 'Archive Assets',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'peopleInvolved',
      title: 'People Involved',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'archiveDate',
      title: 'Archive Date',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(2100),
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    },
    {
      name: 'assetFiles',
      title: 'Asset Files',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            accept: 'image/tiff, image/svg+xml, image/png, image/jpeg, image/gif',
          },
        },
      ],
    },
  ],
})
