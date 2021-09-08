import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function ProductsTable() {



    const classes = useStyles();
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [
        {id:'#323456789',product:'First product',category:'Main',quantity:'18',price:'$120',status:'443',price:'$120'}
    ]

    const columns = [
        {
            title: 'Product Id',field:'id'
        },
        {
            title: 'Product',field:'product'
        },
        {
            title: 'Category',field:'category'
        },
        {
            title: 'Quantity',field:'quantity'
        },
        
        {
            title: 'Price',field:'price'
        },
        {
            title: "Edit",
            field: "internal_action",
            editable: false,
            render: (rowData) =>
                rowData && (
                 <Button variant="contained" style={{background: '#0F956A',color: '#fff'}}>
                    Edit
                  </Button>
                )
        },
        {
            title: "Status",
            field: "internal_action",
            editable: false,
            render: (rowData) =>
                rowData && (
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Status"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Available</MenuItem>
                    <MenuItem value={20}>Un Available</MenuItem>
                    </Select>
                </FormControl>
                )
        },
    ]


    return (
            <div id="content">
                <MaterialTable 
                    title="Recent Orders" 
                    data={data}
                    columns={columns}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1
                    }}


                    actions={[
                    {
                        icon: 'visibility',
                        tooltip: 'View Order',
                        onClick: (event, rowData) => {
                            console.log(rowData.name);
                        }
                    }
                    ]}
                />

             </div>
    )
}

export default ProductsTable;
