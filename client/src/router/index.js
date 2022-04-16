import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard  from '../views/Dashboard/dashboardView.vue'
import student  from '../views/Students/studentView.vue'
import  addstudent  from '../views/Students/StudentsAdd.vue'
import courses  from '../views/Courses/courses.vue'
import library  from '../views/Library/library.vue'
import lectures  from '../views/Lectures/lectures.vue'

Vue.use(VueRouter)

const routes = [
  

  {
    path: '/student',
    name: 'student',
    component: student
  },
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/lectures',
    name: 'lectures',
    component: lectures
  },
  {
    path: '/library',
    name: 'library',
    component: library
  },
  {
    path: '/courses',
    name: 'courses',
    component: courses
  },
  {
    path: '/addstudent',
    name: 'addstudent',
    component: addstudent
  }


]

const router = new VueRouter({
  routes
})

export default router
