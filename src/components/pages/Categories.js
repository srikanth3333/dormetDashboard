import React from 'react';
import CategoryTable from '../tables/CategoryTable';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function Products() {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-lg-12 mt-3 d-flex">
                    <h5 className="text-extra-success mr-3">Categories</h5>
                    <Button variant="contained" data-toggle="modal" data-target="#categoryModalCenter" style={{background: '#2AA786',color: '#fff'}} startIcon={<Add />}>
                        Add a Category
                    </Button>
                </div>
            </div>

            <div className="row orders">
                <div className="col-lg-12 mt-4">
                    <CategoryTable />
                </div>
            </div>

            <div class="modal fade" id="categoryModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 style={{fontSize: '1.5em'}} class="modal-title" id="exampleModalLongTitle">Add a Category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Category Name</label>
                                <input type="text" placeholder="Category Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Sub Category Name</label>
                                <input type="text" placeholder="Sub Category Name" className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
