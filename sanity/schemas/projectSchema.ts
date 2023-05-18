const project = {
  name: 'project',
  type: 'document',
  title: 'Projects',
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
        maxLength: 96,
      },
    },
    {
      name: 'url',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'repo',
      title: 'Repo',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type:'string',
        },
      ],
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    },
    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type:'string',
            },
          ],
        },
      ],
    },
    {
      name: 'clientInfo',
      title: 'Client Info',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'servicesProvided',
          title: 'Services Provided',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
      ],
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'techUsed',
      title: 'Tech Used',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'projectChallenges',
      title: 'Project Challenges',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

export default project