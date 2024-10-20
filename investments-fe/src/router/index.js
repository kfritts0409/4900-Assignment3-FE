import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register'
import CustomerList from '@/components/CustomerList'
import CustomerCreate from '@/components/CustomerCreate'
import MyCustomerList from '@/components/MyCustomerList'
import InvestmentList from '@/components/InvestmentList'
import InvestmentCreate from '@/components/InvestmentCreate'
import StocksList from '@/components/StocksList'      // Import the StocksList component
import StockCreate from '@/components/StockCreate'    // Import the StockCreate component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer-list',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/mycustomer-list',
    name: 'MyCustomerList',
    component: MyCustomerList
  },
  {
    path: '/customer-list/:msg',
    name: 'CustomerUpdatedList',
    component: CustomerList
  },
  {
    path: '/customer-create',
    name: 'CustomerCreate',
    component: CustomerCreate
  },
  {
    path: '/customer-create/:pk',
    name: 'CustomerUpdate',
    component: CustomerCreate
  },
  {
    path: '/investment-list',
    name: 'InvestmentList',
    component: InvestmentList
  },
  {
    path: '/investment-list/:msg',
    name: 'InvestmentUpdatedList',
    component: InvestmentList
  },
  {
    path: '/investment-create',
    name: 'InvestmentCreate',
    component: InvestmentCreate
  },
  {
    path: '/investment-create/:pk',
    name: 'InvestmentUpdate',
    component: InvestmentCreate
  },
  {
    path: '/stocks-list',  // New route for StocksList
    name: 'StocksList',
    component: StocksList
  },
  {
    path: '/stocks-list/:msg',  // New route for updated StocksList
    name: 'StocksUpdatedList',
    component: StocksList
  },
  {
    path: '/stock-create',  // New route for StockCreate
    name: 'StockCreate',
    component: StockCreate
  },
  {
    path: '/stock-create/:pk',  // New route for updating stock
    name: 'StockUpdate',
    component: StockCreate
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
