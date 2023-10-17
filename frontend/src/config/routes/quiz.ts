import { RouterAccess, route } from '../router'
import Path from '../path'

import AlmostDoneController from '@/controllers/Quiz/AlmostDoneController'
import ChildInterestedController from '@/controllers/Quiz/ChildInterestedController'

export default [
  route(Path.QUIZ_ALMOST_DONE, AlmostDoneController, RouterAccess.ALL),
  route(Path.QUIZ_CHILD_INTERESTED, ChildInterestedController, RouterAccess.ALL),
]
