import commentRoute from '../routes/comment.route'
import userRoute from '../routes/user.route'

const routes = [
  ...commentRoute,
  ...userRoute
];

export default routes;
