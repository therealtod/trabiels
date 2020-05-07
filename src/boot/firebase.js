import firebaseService from '../services/firebase';
import firebaseConfig from '../../firebase.config.secrets';

export default ({ router, store, Vue }) => {
  firebaseService.firebaseInit(firebaseConfig);

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged((user) => {
    firebaseService.handleOnAuthStateChanged(store, user);
  }, (error) => {
    console.error(error);
  });

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  firebaseService.routerBeforeEach(router, store);

  Vue.prototype.$fb = firebaseService;
  store.$fb = firebaseService;
};
