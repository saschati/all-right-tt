import { RouterAccess, route } from '../router'
import Path from '../path'

import HomeController from '@/controllers/Home/HomeController'

export default [route(Path.HOME, HomeController, RouterAccess.ALL)]
