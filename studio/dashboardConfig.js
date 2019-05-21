export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ce3cfd0179ed356650f8cc5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ppqcznib',
                  apiId: '850a62cc-8e61-49d2-bb22-02b24fc6d838'
                },
                {
                  buildHookId: '5ce3cfd07a57ca7369684d1c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-efwt9wbh',
                  apiId: 'cc4bf446-14e9-48f6-9f08-a438679edff0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sudhirgelani45623/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-efwt9wbh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
