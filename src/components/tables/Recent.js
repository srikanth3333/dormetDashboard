import React from 'react';
import MaterialTable from 'material-table';

function Recent() {


    const data = [
        {id:'#323456789',data:'12-01-12',items:'18 Items',status:'Delivered',total:'443'}
    ]

    const columns = [
        {
            title: 'Order Id',field:'id'
        },
        {
            title: 'Order Date',field:'data'
        },
        {
            title: 'Items',field:'items'
        },
        {
            title: 'Status',field:'status'
        },
        {
            title: 'Total',field:'total'
        }
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

export default Recent
