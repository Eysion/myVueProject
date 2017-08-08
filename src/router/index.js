import index from '@/views'
import pdfResume from '@/views/pdfResume'
import skillTree from '@/views/skillTree'
import experience from '@/views/experience'
import contactMe from '@/views/contactMe'

export default {
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'homePage',
      component: index
    }, {
      path: '/pdf_resume',
      name: 'pdfResume',
      component: pdfResume
    }, {
      path: '/skill_tree',
      name: 'skillTree',
      component: skillTree
    }, {
      path: '/experience',
      name: 'experience',
      component: experience
    }, {
      path: '/contact_me',
      name: 'contactMe',
      component: contactMe
    }
  ]
}
