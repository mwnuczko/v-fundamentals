import CategorizedTodosModule from './index';
import ListCategory from './ListCategory';
import ShowCategory from './ShowCategory';

export default [
  {
    path: '/categorized-todos',
    name: 'categorized-todos',
    component: CategorizedTodosModule,
    children: [
      {
        path: 'categories',
        name: 'list-category',
        component: ListCategory,
      },
      {
        path: 'categories/:id',
        name: 'show-category',
        component: ShowCategory,
        props: true,
      },
    ],
  },
];
