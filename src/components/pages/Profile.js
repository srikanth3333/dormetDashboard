import React from 'react';
import Button from '@material-ui/core/Button';


function Profile() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-extra-success">Shop Profile</h3>
                <div>
                <Button variant="contained" style={{background: '#0F956A',color: '#fff'}}>
                    Save Profile
                </Button>
                </div>
            </div>
            <div className="row product">
                <div className="col-lg-6">
                    <h3 className="text-extra-success" style={{fontSize:'1.2em',marginTop: '0.7em',color: '#2AA786'}}>Basic Information</h3>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Shop Name</label>
                            <input type="text" placeholder="Shop Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Owner Name</label>
                            <input type="text" placeholder="Owner Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">GST Number</label>
                            <input type="text" placeholder="GST Number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Shop Category</label>
                            <select name="" className="form-control" id="">
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>

                        <h3 className="text-extra-success" style={{fontSize:'1.2em',marginTop: '0.7em',color: '#2AA786'}}>Contact Information</h3>

                        <div className="form-group">
                            <label htmlFor="">Shop Mobile Number</label>
                            <input type="text" placeholder="Mobile Number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Shop Email Address</label>
                            <input type="text" placeholder="Email Address" className="form-control" />
                        </div>

                    </form>

                </div>
                <div className="col-lg-6">
                 <h3 className="text-extra-success" style={{fontSize:'1.2em',marginTop: '0.7em',color: '#2AA786'}}>Address</h3>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="">Community</label>
                            <select name="" className="form-control" id="">
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                            <div className="form-group">
                                <label htmlFor="">ShopAddress Line 1</label>
                                <input type="text" placeholder="ShopAddress 1" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">ShopAddress Line 2 / Landmark</label>
                                <input type="text" placeholder="ShopAddress 2" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Pincode</label>
                                <input type="text" placeholder="Pincode" className="form-control" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="">City</label>
                            <select name="" className="form-control" id="">
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">State</label>
                            <select name="" className="form-control" id="">
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Profile;
