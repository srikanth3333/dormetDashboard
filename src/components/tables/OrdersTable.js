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

function OrdersTable() {



    const classes = useStyles();
    const [age, setAge] = React.useState(20);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [
        {id:'#323456789',date:'12-01-12',items:'18 Items',status:'Delivered',total:'443'}
    ]

    const columns = [
        {
            title: 'Order Id',field:'id'
        },
        {
            title: 'Created Date',field:'date'
        },
        {
            title: 'Items',field:'items'
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
                    label="In Progress"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10} selected>In Progress</MenuItem>
                    <MenuItem value={20}>Out For Delivery</MenuItem>
                    <MenuItem value={30}>Delivered</MenuItem>
                    <MenuItem value={40}>Cancelled</MenuItem>
                    </Select>
                </FormControl>
                )
        },
        {
            title: 'Total',field:'total'
        },
        {
            title: "Custom Add",
            field: "internal_action",
            editable: false,
            render: (rowData) =>
                rowData && (
                 <Button variant="contained" style={{background: '#0F956A',color: '#fff'}}>
                    Track Order
                  </Button>
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

export default OrdersTable;
