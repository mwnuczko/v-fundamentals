import Vue from 'vue';
import Router from 'vue-router';

// fundamentals
import customComponentsRoutes from '../modules/01-custom-components/routes';
import propsEventsRoutes from '../modules/02-props-events/routes';
import customPropsEventsRoutes from '../modules/03-custom-props-events/routes';
import todosRoutes from '../modules/04-todos/routes';
import filtersRoutes from '../modules/05-filters/routes';
import heroesRoutes from '../modules/06-heroes/routes';
import citiesRoutes from '../modules/07-cities/routes';
import realEstatesRoutes from '../modules/08-real-estates/routes';
// vuex
import vuexBasicsRoutes from '../modules/11-vuex-basics/routes';
import todosAsyncBasicRoutes from '../modules/12-todos-async-basic/routes';
import todosAsyncNormalizedRoutes from '../modules/13-todos-async-normalized/routes';
import categorizedTodosRoutes from '../modules/14-categorized-todos/routes';
import infiniteListRoutes from '../modules/15-infinite-list/routes';
import PageNotFound from '../components/PageNotFound';


Vue.use(Router);

export default new Router({
  routes: [
    // fundamentals
    ...customComponentsRoutes,
    ...propsEventsRoutes,
    ...customPropsEventsRoutes,
    ...todosRoutes,
    ...filtersRoutes,
    ...heroesRoutes,
    ...citiesRoutes,
    ...realEstatesRoutes,
    // vuex
    ...vuexBasicsRoutes,
    ...todosAsyncBasicRoutes,
    ...todosAsyncNormalizedRoutes,
    ...categorizedTodosRoutes,
    ...infiniteListRoutes,
    { path: '*', component: PageNotFound },
  ],
});
