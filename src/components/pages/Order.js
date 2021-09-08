import React from 'react';
import OrdersTable from '../tables/OrdersTable';

function Order() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-3">
                <div className="card  shadow     ">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div  className="text-xl   mb-1 text-gray-800 font-weight-bold">
                                        All Orders
                                    </div>
                                    <div className="d-flex  align-items-center mt-3">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                        <div className="h5 mb-0 text-primary">40,000</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card  shadow     ">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div  className="text-xl   mb-1 text-gray-800 font-weight-bold">
                                        In Progress
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
                <div className="col-lg-3">
                    <div className="card  shadow     ">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div  className="text-xl   mb-1 text-gray-800 font-weight-bold">
                                        Out For Delivery
                                    </div>
                                    <div className="d-flex  align-items-center mt-3">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                        <div className="h5 mb-0 text-extra-red">40,000</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card  shadow     ">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div  className="text-xl   mb-1 text-gray-800 font-weight-bold">
                                         Picked Up / Delivered
                                    </div>
                                    <div className="d-flex  align-items-center mt-3">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                        <div className="h5 mb-0 text-extra-success">40,000</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card  shadow mt-4">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div  className="text-xl   mb-1 text-gray-800 font-weight-bold">
                                        Cancellation Request
                                    </div>
                                    <div className="d-flex  align-items-center mt-3">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                        <div className="h5 mb-0 text-danger">40,000</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row orders">
                <div className="col-lg-12 mt-4">
                    <OrdersTable />
                </div>
            </div>
        </div>
    )
}

export default Order
