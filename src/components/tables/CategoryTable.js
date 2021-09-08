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

function CategoryTable() {



    const classes = useStyles();
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [
        {id:'#323456789',category:'Main',sub_categories:'1',products:'120',sales:'443',sales_value:'$120'}
    ]

    const columns = [
        {
            title: 'Category ID',field:'id'
        },
        {
            title: 'Category Name',field:'category'
        },
        {
            title: 'Sub Categories',field:'sub_categories'
        },
        {
            title: 'Products',field:'products'
        },
        {
            title: 'Total Sales',field:'sales'
        },
        
        {
            title: 'Total Sales Value',field:'sales_value'
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
                        icon: 'delete',
                        tooltip: 'Delete Category',
                        onClick: (event, rowData) => {
                            console.log(rowData.name);
                        }
                    }
                    ]}
                />

             </div>
    )
}

export default CategoryTable;
