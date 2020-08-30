export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4bae8e281ab60b2c5f5f29',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h1q5ou56',
                  apiId: '2abc9d67-0332-4e89-b08b-f01de64c914d'
                },
                {
                  buildHookId: '5f4bae8f302549f4637488bb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gfpsm3m9',
                  apiId: '6b621925-529d-4f7a-9ffc-ca638df6d76e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/csellis/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gfpsm3m9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
