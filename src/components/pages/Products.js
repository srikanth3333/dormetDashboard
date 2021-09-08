import React from 'react';
import ProductsTable from '../tables/ProductsTable';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {Link} from 'react-router-dom'

function Products() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-3">
                <div className="card  shadow     ">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div  className="text-xl   mb-1 text-gray-800 font-weight-bold">
                                        All Products
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
                                        In Stock
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
                                        Out Of Stock
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
                                         Return Req
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

            <div className="row">
                <div className="col-lg-12 mt-3">
                    <Button variant="contained" className="mr-3" style={{background: '#2AA786',color: '#fff'}} startIcon={<Add />}>
                        <Link to="/addproduct" style={{textDecoration: 'none',color: '#fff'}}>
                            Add Product
                        </Link>
                        
                    </Button>
                    <Button variant="contained" className="mr-3" data-toggle="modal" data-target="#exampleModalCenter" style={{background: '#2AA786',color: '#fff'}} startIcon={<NoteAddIcon />}>
                        Add Via Excel
                    </Button>
                    <Button variant="contained" style={{background: '#2AA786',color: '#fff'}} startIcon={<Add />}>
                        Add a Category
                    </Button>
                </div>
            </div>

            <div className="row orders">
                <div className="col-lg-12 mt-4">
                    <ProductsTable />
                </div>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 style={{fontSize: '1.5em'}} class="modal-title" id="exampleModalLongTitle">Upload Excel</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <Button variant="contained" className="mr-3" data-toggle="modal" data-target="#exampleModalCenter" style={{background: '#2AA786',color: '#fff'}} startIcon={<NoteAddIcon />}>
                            Choose a File
                        </Button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
