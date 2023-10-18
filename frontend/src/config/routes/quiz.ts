import { RouterAccess, route } from '../router'
import Path from '../path'

import HomeController from '@/controllers/Home/HomeController'
import AlmostDoneController from '@/controllers/Quiz/AlmostDoneController'
import ChildInterestedController from '@/controllers/Quiz/ChildInterestedController'
import PreparingPersonalPlanController from '@/controllers/Quiz/PreparingPersonalPlanController'
import EnterPhoneNumberController from '@/controllers/Quiz/EnterPhoneNumberController'
import ChooseDateAndTimeLessonController from '@/controllers/Quiz/ChooseDateAndTimeLessonController'

export default [
  route(Path.QUIZ_QUESTION, HomeController, RouterAccess.ALL),
  route(Path.QUIZ_ALMOST_DONE, AlmostDoneController, RouterAccess.ALL),
  route(Path.QUIZ_CHILD_INTERESTED, ChildInterestedController, RouterAccess.ALL),
  route(Path.QUIZ_PREPARING_PERSONAL_PLAN, PreparingPersonalPlanController, RouterAccess.ALL),
  route(Path.QUIZ_ENTER_PHONE_NUMBER, EnterPhoneNumberController, RouterAccess.ALL),
  route(Path.QUIZ_CHOOSE_DATE_AND_TIME_LESSON, ChooseDateAndTimeLessonController, RouterAccess.ALL),
]
