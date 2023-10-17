import { RouterAccess, route } from '../router'
import Path from '../path'

import AlmostDoneController from '@/controllers/Quiz/AlmostDoneController'

export default [route(Path.QUIZ_ALMOST_DONE, AlmostDoneController, RouterAccess.ALL)]
