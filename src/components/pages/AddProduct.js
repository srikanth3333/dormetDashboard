import React from 'react';
import Button from '@material-ui/core/Button';
import ProductTag from '../tags/ProductTag';
import ImageUpload from '../Basic/ImageUpload';

function AddProduct() {

  
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-extra-success">Add a Product / Service</h3>
                <div>
                <Button variant="outlined" color="secondary" className="mr-4">
                    Cancel
                </Button>
                <Button variant="contained" style={{background: '#0F956A',color: '#fff'}}>
                    Save Product
                </Button>
                </div>
            </div>
            <div className="row product">
                <div className="col-lg-6">
                    

                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Product Category</label>
                            <select name="" className="form-control" id="">
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Product Sub Category</label>
                            <select name="" className="form-control" id="">
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Product Name</label>
                            <input type="text" placeholder="Enter Product Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Product Description</label>
                            <textarea name="" id=""  className="form-control" placeholder="Enter product description" cols="10" style={{height: '5em'}} rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Product Long Description</label>
                            <textarea name="" id=""  className="form-control" placeholder="Enter product long description" cols="30" rows="10"></textarea>
                        </div>
                        <ProductTag />
                    </form>

                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label htmlFor="">Product Quantity</label>
                                <input type="text" placeholder="Product Quantity" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="">Value</label>
                            <input type="text" placeholder="Product Value" className="form-control" />
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="">Offer value</label>
                            <input type="text" placeholder="Offer value" className="form-control" />
                        </div>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="">Quantity Available</label>
                            <input type="text" placeholder="Available" className="form-control" />
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mt-3">
                            <ImageUpload /> 
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default AddProduct
