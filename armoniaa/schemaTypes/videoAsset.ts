import { defineType } from "sanity";

export default defineType({
    name: 'videoAsset',
    title: 'Video Asset',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            options: {
                accept: 'video/mp4, video/quicktime'
            }
        },
    ]
})