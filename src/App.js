import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation} from "react-router-dom";
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Order from './components/pages/Order';
import Products from './components/pages/Products';
import AddProduct from './components/pages/AddProduct';
import Categories from './components/pages/Categories';
import Profile from './components/pages/Profile';

function App() {


  const page_name = window.location.pathname
  


  return (
    <div className="App">
      <Router>

      <div id="wrapper" className="px-4 py-4">
            
            <ul className="navbar-nav bg-success sidebar sidebar-dark accordion py-2 mt-4" id="accordionSidebar">

               <li  className={page_name === '/' ? `nav-item active` : `nav-item`}>
                   <Link className="nav-link" activeClassName="active" to="/">
                   <i className="fas fa-fw fa-folder"></i>
                   <span>Dashboard</span></Link>
               </li>


               <li  className={page_name == '/orders' ? `nav-item active` : `nav-item`}>
                   <Link className="nav-link" to="/orders">
                   <i className="fas fa-fw fa-folder"></i>
                   <span>Orders</span></Link>
               </li>

               <li  className={page_name === '/products' ? `nav-item active` : `nav-item`}>
                   <Link className="nav-link" to="/products">
                   <i className="fas fa-fw fa-folder"></i>
                   <span>Products</span></Link>
               </li>

               <li  className={page_name === '/categories' ? `nav-item active` : `nav-item`}>
                   <Link className="nav-link" to="/categories">
                   <i className="fas fa-fw fa-folder"></i>
                   <span>Categories</span></Link>
               </li>

               <li  className={page_name === '/profile' ? `nav-item active` : `nav-item`}>
                   <Link className="nav-link" to="/profile">
                   <i className="fas fa-fw fa-folder"></i>
                   <span>Profile Settings</span></Link>
               </li>

               <li className="nav-item ">
                   <Link className="nav-link" to="/">
                   <i className="fas fa-fw fa-folder"></i>
                   <span>Payment / Money</span></Link>
               </li>


         </ul>

           <div id="content-wrapper" className="d-flex flex-column">

           <div id="content">

              <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top">

                  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                      <i className="fa fa-bars"></i>
                  </button>

                  <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                      <div className="input-group">
                          <input type="text" className="form-control shadow-lg bg-light border-0 small" placeholder="Search for..."
                              aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                              <button className="btn btn-light" type="button">
                                  <i className="fas fa-search fa-sm text-success" style={{backgroundColor: '#fff !important'}}></i>
                              </button>
                          </div>
                      </div>
                  </form>

                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown no-arrow d-sm-none">
                          <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-search fa-fw"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                              aria-labelledby="searchDropdown">
                              <form className="form-inline mr-auto w-100 navbar-search">
                                  <div className="input-group">
                                      <input type="text" className="form-control bg-light border-0 small"
                                          placeholder="Search for..." aria-label="Search"
                                          aria-describedby="basic-addon2" />
                                      <div className="input-group-append">
                                          <button className="btn btn-primary" type="button">
                                              <i className="fas fa-search fa-sm"></i>
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </li>

                      <li className="nav-item dropdown no-arrow mx-1">
                          <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-bell fa-fw"></i>
                              <span className="badge badge-danger badge-counter">3+</span>
                          </a>
                          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="alertsDropdown">
                              <h6 className="dropdown-header">
                                  Alerts Center
                              </h6>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <div className="mr-3">
                                      <div className="icon-circle bg-primary">
                                          <i className="fas fa-file-alt text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="small text-gray-500">December 12, 2019</div>
                                      <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <div className="mr-3">
                                      <div className="icon-circle bg-success">
                                          <i className="fas fa-donate text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="small text-gray-500">December 7, 2019</div>
                                      $290.29 has been deposited into your account!
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <div className="mr-3">
                                      <div className="icon-circle bg-warning">
                                          <i className="fas fa-exclamation-triangle text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="small text-gray-500">December 2, 2019</div>
                                      Spending Alert: We've noticed unusually high spending for your account.
                                  </div>
                              </a>
                              <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                          </div>
                      </li>

                      <div className="topbar-divider d-none d-sm-block"></div>

                      <li className="nav-item dropdown no-arrow">
                          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Test User</span>
                              <img className="img-profile rounded-circle"
                                  src="img/undraw_profile.svg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="userDropdown">
                              <a className="dropdown-item" href="#">
                                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Profile
                              </a>
                              <a className="dropdown-item" href="#">
                                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Settings
                              </a>
                              <a className="dropdown-item" href="#">
                                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Activity Log
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Logout
                              </a>
                          </div>
                      </li>

                  </ul>

              </nav>


              <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/orders">
                    <Order />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/addproduct">
                    <AddProduct />
                </Route>
                <Route exact path="/categories">
                    <Categories />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                
              </Switch>

              

              </div>
               
               <footer className="sticky-footer bg-white">
                   <div className="container my-auto">
                       <div className="copyright text-center my-auto">
                           <span>Copyright &copy; <span>Dormet</span> 2021</span>
                       </div>
                   </div>
               </footer>

           </div>
       </div>
      
      </Router>
    </div>
  );
}

export default App;

