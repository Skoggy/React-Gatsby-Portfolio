

export default {
    name: 'project',
    title: 'Project',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Describe your project',
        },
        {
            title: 'URL',
            name: 'URL',
            type: 'url'
        }
    ]
}