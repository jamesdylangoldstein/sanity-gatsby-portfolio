export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6136d59cbe95aaf107e9a75a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jiwrfc1d',
                  apiId: 'd7b2169c-0d0c-4d19-a35f-9d916beaa4db'
                },
                {
                  buildHookId: '6136d59cfb79c3e1da46810c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bnxd55ki',
                  apiId: 'bc348a7e-3af0-4aab-b1f6-5b46175e5561'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesdylangoldstein/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bnxd55ki.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
