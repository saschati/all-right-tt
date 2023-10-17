import { RouterAccess, route } from '../router'
import Path from '../path'

import AlmostDoneController from '@/controllers/Quiz/AlmostDoneController'
import ChildInterestedController from '@/controllers/Quiz/ChildInterestedController'
import PreparingPersonalPlanController from '@/controllers/Quiz/PreparingPersonalPlanController'

export default [
  route(Path.QUIZ_ALMOST_DONE, AlmostDoneController, RouterAccess.ALL),
  route(Path.QUIZ_CHILD_INTERESTED, ChildInterestedController, RouterAccess.ALL),
  route(Path.QUIZ_PREPARING_PERSONAL_PLAN, PreparingPersonalPlanController, RouterAccess.ALL),
]
