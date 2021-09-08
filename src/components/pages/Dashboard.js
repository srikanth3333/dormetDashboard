import React from 'react';
import AnotherChart from '../charts/AnotherChart';
import MyChart from '../charts/MyChart';
import Recent from '../tables/Recent';


function Dashboard() {
    return (
        <div className="container-fluid">

                  <div className="row ">
                  <div className="col-xl-5 col-lg-5">
                          <div className="card shadow mb-4">
                              <div style={{border: '0px'}} className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                  <h6 className="m-0">Overall Sales</h6>
                              </div>
                              <div className="card-body">
                                  <div className="chart-area">
                                      <MyChart />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-2 col-md-6 mb-4">
                          <div className="d-flex flex-column justify-content-between">
                          <div className="card  shadow py-2">
                              <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                      <div className="col mr-2">
                                          <div className="text-xl text-center mb-1 text-gray-800 font-weight-bold">
                                              Total Sales
                                          </div>
                                          <div className="d-flex justify-content-center align-items-center mt-3">
                                              <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                              <div className="h5 mb-0 text-primary">40,000</div>
                                          </div>
                                      </div>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="card  shadow py-2 mt-5">
                              <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                      <div className="col mr-2">
                                          <div  className="text-xl text-center mb-1 text-gray-800 font-weight-bold">
                                              Total Users
                                          </div>
                                          <div className="d-flex  align-items-center mt-3">
                                              <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                              <div className="h5 mb-0 text-warning">40,000</div>
                                          </div>
                                      </div>
                                      
                                  </div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="col-xl-5 col-lg-5">
                          <div className="card shadow mb-4">
                              <div
                                  style={{border: '0px'}}
                                  className="card-header border-none py-3 d-flex flex-row align-items-center justify-content-between">
                                  <h6 className="m-0">Sales By Category</h6>
                              </div>
                              <div className="card-body">
                                  <div className="chart-area">
                                      <AnotherChart />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-lg-12">
                         <Recent />
                      </div>
                  </div>

              </div>
    )
}

export default Dashboard;
