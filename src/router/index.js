import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

import Shops from "../views/Shops/Index";
import ViewShop from "../views/Shops/View";
import CreateShop from "../views/Shops/Create";
import EditShop from "../views/Shops/Edit";

import Assistants from "../views/Assistants/Index";
import ViewAssistant from "../views/Assistants/View";
import CreateAssistant from "../views/Assistants/Create";
import EditAssistant from "../views/Assistants/Edit";

import Services from "../views/Services/Index";
import ViewService from "../views/Services/View";
import CreateService from "../views/Services/Create";
import EditService from "../views/Services/Edit";

import Products from "../views/Products/Index";
import ViewProduct from "../views/Products/View";
import CreateProduct from "../views/Products/Create";
import EditProduct from "../views/Products/Edit";

import Customers from "../views/Customers/Index";
import ViewCustomer from "../views/Customers/View";
import CreateCustomer from "../views/Customers/Create";
import EditCustomer from "../views/Customers/Edit";

import Orders from "../views/Orders/Index";
import CreateOrder from "../views/Orders/Create";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/shops",
    name: "Shops",
    component: Shops
  },
  {
    path: "/shops/:id/show",
    name: "Shop Informations",
    component: ViewShop
  },
  {
    path: "/shops/create",
    name: "Create Shop",
    component: CreateShop
  },
  {
    path: "/shops/:id/edit",
    name: "Edit Shop",
    component: EditShop
  },
  {
    path: "/assistants",
    name: "Assistants",
    component: Assistants
  },
  {
    path: "/assistants/:id/show",
    name: "Assistant Informations",
    component: ViewAssistant
  },
  {
    path: "/assistants/create",
    name: "Create Assistant",
    component: CreateAssistant
  },
  {
    path: "/assistants/:id/edit",
    name: "Edit Assistant",
    component: EditAssistant
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/services/:id/show",
    name: "Service Informations",
    component: ViewService
  },
  {
    path: "/services/create",
    name: "Create Service",
    component: CreateService
  },
  {
    path: "/services/:id/edit",
    name: "Edit Service",
    component: EditService
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/products/:id/show",
    name: "Product Informations",
    component: ViewProduct
  },
  {
    path: "/products/create",
    name: "Create Product",
    component: CreateProduct
  },
  {
    path: "/products/:id/edit",
    name: "Edit Product",
    component: EditProduct
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers
  },
  {
    path: "/customers/:id/show",
    name: "Customer Informations",
    component: ViewCustomer
  },
  {
    path: "/customers/create",
    name: "Create Customer",
    component: CreateCustomer
  },
  {
    path: "/customers/:id/edit",
    name: "Edit Customer",
    component: EditCustomer
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders
  },
  {
    path: "/orders/create",
    name: "Create Order",
    component: CreateOrder
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
