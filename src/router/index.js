import { createRouter, createWebHistory } from 'vue-router'
import Register from '../pages/Register.vue'
import OrdersList from '../pages/OrdersList.vue'
import ImageUpload from '../pages/ImageUpload.vue'
import Product from '../pages/product.vue'
import Item from '../pages/item.vue'
import Help from '../pages/Help.vue'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue'
import ContactUs from '../pages/ContactUs.vue'
import Cart from '../pages/cart.vue'
import PayedProductOrder from '../pages/payedProductOrders.vue'
import Order from '../pages/order.vue'
import NewEvent from '../pages/newEvent.vue'
import Chat from '../pages/Chat.vue'
import Payment from '../pages/payment.vue'
import Payment1 from '../pages/payment1.vue'
import UserDashboard from '../pages/userDashboard.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import RegisterNotMemberOfMahiberat from '../pages/RegisterNotMemberOfMahiberat.vue'
import PDF from '../pages/pdf.vue'
import Deactivate from '../pages/deactivate.vue'
import FarmersProduct from '../pages/farmerProduct.vue'
import FarmerDashboard from '../farmer/pages/dashboard.vue'
import FarmerAddProduct from '../farmer/pages/addProduct.vue'
import FarmerProductList from '../farmer/pages/productList.vue'
import FarmerOrderList from '../farmer/pages/order.vue'
import FarmersAddNews from '../farmer/pages/AddNews.vue'
import FarmersPostedNews from '../farmer/pages/postedNews.vue'
import FarmerTransactionHistory from '../farmer/pages/Report.vue'
import FarmerReportChart from '../farmer/pages/reportChart.vue'
import CustomerCart from '../pages/customerCart.vue'
import PaymentSuccess from '../pages/paymentSuccess.vue'
import SendEmail from '../pages/sendEmail.vue'
import ForgotPassword from '../pages/forgotPassword.vue'
import EnterVerificationCode from '../components/enterVerificationCode.vue'

import MahiberatDashboard from '../mahiberat/pages/Dashboard.vue'
import MahiberatDepartment from '../mahiberat/pages/Department.vue'
import MahiberatActiveUsers from '../mahiberat/pages/activeUsers.vue'
import MahiberatOrderList from '../mahiberat/pages/orderedList.vue'

import MahiberatReport from '../mahiberat/pages/Report.vue'
import MahiberatSetting from '../mahiberat/pages/Settings.vue'
import MahiberatAddNews from '../mahiberat/pages/AddNews.vue'
import MahiberatPostedNews from '../mahiberat/pages/postedNews.vue'
import MahiberatAddProduct from '../mahiberat/pages/AddProduct.vue'
import MahiberatAddProductToStore from '../mahiberat/pages/AddProductToStore.vue'
import MahiberatProductsList from '../mahiberat/pages/ProductsList.vue'
import MahiberatChat from '../mahiberat/pages/Chat.vue'
import MahiberatOrderRestriction from '../mahiberat/pages/orderRestriction.vue'
import MahiberatOrderRestrictionList from '../mahiberat/pages/orderRestrictionList.vue'
import MahiberatUserControl from '../mahiberat/pages/users_control.vue'
import MahiberatProductDetail from '../mahiberat/pages/ProductDetail.vue'
import MahiberatStoreProductDetail from '../mahiberat/pages/storeProductDetail.vue'
import MahiberatProductEdit from '../mahiberat/pages/ProductEdit.vue'
import MahiberatTotalMembers from '../mahiberat/pages/totalMembers.vue'
import FilterMahiberatMember from '../mahiberat/pages/filterMahiberatMember.vue'
import AddNewMember from '../mahiberat/pages/addMembers.vue'
import MahiberatAdminProfile from "../mahiberat/pages/AdminProfilelogin.vue";
import AllAdminProfile from "../mahiberat/pages/AllAdminProfile.vue";
import StoreDashboard from '../mahiberat/pages/StoreDashboard.vue'
import MahiberatStoreProductsList from '../mahiberat/pages/storeProductList.vue'
import MahiberatStoreProductsListThatAreNotActvated from '../mahiberat/pages/StoreProductsListThatAreNotActivated.vue'
import MahiberatStoreProductListInTheMarket from '../mahiberat/pages/storeProductListInTheMarket.vue'
import MahiberatStoreProductListNotInTheMarket from '../mahiberat/pages/storeProductListNotInTheMarket.vue'

import WoredaDashboard from '../woreda/pages/Dashboard.vue'
import AddEmployer from '../woreda/pages/AddEmployer.vue'
import TotalEmployer from '../woreda/pages/TotalEmployer.vue'
import ActiveEmployer from '../woreda/pages/ActiveEmployer.vue'
import EditEmployerInformation from '../woreda/pages/EditEmployerInformation.vue'
import WoredaNews from '../woreda/pages/postAboutAgriService.vue'
import WoredaPostedNews from '../woreda/pages/postedEvents.vue'
import WoredaReport from '../woreda/pages/report.vue'
import ApproveFarmerProduct from '../woreda/pages/farmerProductApprove.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contact',
      component: ContactUs
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/reciet/pdf',
      name: 'repdf',
      component: PDF
    },
    {
      path: '/product/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product/payedProductOrder',
      name: 'payedProductOrder',
      component: PayedProductOrder
    },
    {
      path: '/product/order',
      name: 'order',
      component: Order
    },
    {
      path: '/product/:id',
      name: 'item',
      component: Item
    },
    {
      path: '/ordersList',
      name: 'ordersList',
      component: OrdersList
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/imageUpload',
      name: 'imageUpload',
      component: ImageUpload
    },
    {
      path: '/events',
      name: 'events',
      component: NewEvent
    },

    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/payment1',
      name: 'payment1',
      component: Payment1
    },
    {
      path: '/userDashboard',
      name: 'userDashboard',
      component: UserDashboard
    },
    {
      path: '/deActivated',
      name: 'deactivated',
      component: Deactivate
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    },

    {
      path: '/registerNotMemberOfMahiberat',
      name: 'registerNotMemberOfMahiberat',
      component: RegisterNotMemberOfMahiberat
    },
    {
      path: '/farmersProduct',
      name: 'farmersProduct',
      component: FarmersProduct
    },
    {
      path: '/product/customer/cart',
      name: 'customerCart',
      component: CustomerCart
    },
    {
      path: '/product/payment/success',
      name: 'paymentSuccess',
      component: PaymentSuccess
    },
    {
      path: '/sendEmail',
      name: 'sendEmail',
      component: SendEmail
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/enterVerificationCode',
      name: 'enterVerificationCode',
      component: EnterVerificationCode
    },
    {
      path: '/farmer/dashboard',
      name: 'farmerDashboard',
      component: FarmerDashboard
    },
    {
      path: '/farmer/addProduct',
      name: 'farmerAddProduct',
      component: FarmerAddProduct
    },
    {
      path: '/farmer/productList',
      name: 'farmerProduct',
      component: FarmerProductList
    },

    {
      path: '/farmer/orderList',
      name: 'farmerOrderList',
      component: FarmerOrderList
    },

    {
      path: '/farmer/addNews',
      name: 'farmersAddNews',
      component: FarmersAddNews
    },
    {
      path: '/farmer/postedNews',
      name: 'farmersPostedNews',
      component: FarmersPostedNews
    },
    {
      path: '/farmer/transactionHistory',
      name: 'farmerTransactionHistory',
      component: FarmerTransactionHistory
    },

    {
      path: '/farmer/reportChart',
      name: 'farmerReportChart',
      component: FarmerReportChart
    },

    {
      path: '/mahiberat/dashboard',
      name: 'mahiberatDashboard',
      component: MahiberatDashboard
    },
    
    {
      path: '/mahiberat/department',
      name: 'mahiberatDepartment',
      component: MahiberatDepartment
    },
    {
      path: '/mahiberat/chat',
      name: 'mahiberatChat',
      component: MahiberatChat
    },

    {
      path: '/mahiberat/addProduct',
      name: 'mahiberatAddProduct',
      component: MahiberatAddProduct
    },
    {
      path: '/mahiberat/addProductToStore',
      name: 'mahiberatAddProductToStore',
      component: MahiberatAddProductToStore
    },
    {
      path: '/mahiberat/productsList',
      name: 'mahiberatProductsList',
      component: MahiberatProductsList
    },
    {
      path: '/mahiberat/adminProfile',
      name: 'mahiberatAdminProfile',
      component: MahiberatAdminProfile
    },
    {
      path: '/mahiberat/allAdminProfile',
      name: 'allAdminProfile',
      component: AllAdminProfile
    },
    {
      path: '/mahiberat/storeProductsList',
      name: 'mahiberatStoresProductList',
      component: MahiberatStoreProductsList
    },
    {
      path: '/mahiberat/storeProductsListThatAreNotActivated',
      name: 'mahiberatStoreProductsList',
      component: MahiberatStoreProductsListThatAreNotActvated
    },
    {
      path: '/mahiberat/storeProductListInTheMarket',
      name: 'mahiberatStoreProductsListInTheMarket',
      component: MahiberatStoreProductListInTheMarket
    },
    {
      path: '/mahiberat/storeProductListNotInTheMarket',
      name: 'mahiberatStoreProductsListNotInTheMarket',
      component: MahiberatStoreProductListNotInTheMarket
    },
    {
      path: '/mahiberat/orderList',
      name: 'mahiberatOrderList',
      component: MahiberatOrderList
    },
    {
      path: '/mahiberat/activeUsers',
      name: 'mahiberatActiveUsers',

      component: MahiberatActiveUsers
    },

    {
      path: '/mahiberat/addNewMember',
      name: 'addNewMember',

      component: AddNewMember
    },
    {
      path: '/mahiberat/totalMembers',
      name: 'mahiberatTotalMembers',

      component: MahiberatTotalMembers
    },
    {
      path: '/mahiberat/totalMembers/:filter',
      name: 'filterMahiberatMember',

      component: FilterMahiberatMember
    },

    {
      path: '/mahiberat/report',
      name: 'mahiberatReport',
      component: MahiberatReport
    },

    {
      path: '/mahiberat/settings',
      name: 'mahiberatSetting',
      component: MahiberatSetting
    },

    {
      path: '/mahiberat/addNews',
      name: 'mahiberatAddNews',
      component: MahiberatAddNews
    },
    {
      path: '/mahiberat/postedNews',
      name: 'mahiberatPostedNews',
      component: MahiberatPostedNews
    },
    {
      path: '/mahiberat/orderRestriction',
      name: 'orderRestriction',
      component: MahiberatOrderRestriction
    },
    {
      path: '/mahiberat/orderRestrictionList',
      name: 'orderRestrictionList',
      component: MahiberatOrderRestrictionList
    },
    {
      path: '/mahiberat/users',
      name: 'mahiberatUsers',
      component: MahiberatUserControl
    },
    {
      path: '/mahiberat/product/:id',
      name: 'mahiberatProduct',
      component: MahiberatProductDetail
    },
    {
      path: '/mahiberat/storeProduct/:id',
      name: 'mahiberatStoreProductDetail',
      component: MahiberatStoreProductDetail
    },
    {
      path: '/mahiberat/product/edit/:id',
      name: 'mahiberatProductEdit',
      component: MahiberatProductEdit
    },
    {
      path: '/mahiberat/storeDashboard',
      name: 'storeDashboard',
      component: StoreDashboard
    },


    {
      path: '/woreda/dashboard',
      name: 'woredaDashboard',
      component: WoredaDashboard
    },

    {
      path: '/woreda/addEmployer',
      name: 'addEmployer',
      component: AddEmployer
    },

    {
      path: '/woreda/totalEmployer',
      name: 'totalEmployer',
      component: TotalEmployer
    },

    {
      path: '/woreda/activeEmployer',
      name: 'activeEmployer',
      component: ActiveEmployer
    },

    {
      path: '/woreda/totalEmployer/edit/:id',
      name: 'editEmployerInformation',
      component: EditEmployerInformation
    },
    {
      path: '/woreda/addNews',
      name: 'addNews',
      component: WoredaNews
    },
    {
      path: '/woreda/postedNews',
      name: 'postedNews',
      component: WoredaPostedNews
    } ,
    {
      path: '/woreda/report',
      name: 'woredaReport',
      component: WoredaReport
    },
    {
      path: '/woreda/product/approve',
      name: 'approveFarmerProduct',
      component: ApproveFarmerProduct
    }
  ],
// beforeEnter: ((to, from, next) => {
//   console.log(to.path);
//   if (['/addOrders'].includes(to.path) && localStorage.getItem('user_id'))
//     next()
})

export default router
