// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns,  } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getUsers } from "../../methods/MethodUsers";
// const userRows = [
//   {
//     id: 1,
//     username: "asdfgh",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     phone_number: 35,
//   },
// ]
// const Datatable = () => {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
//   useEffect(() =>{
//     getUsers().then((res) => {
//       setData(res.data)
//       console.log("user data",res.data)
//     })
//   },[setData])
//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
          
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//             >
//               {data?.is_active ? "Active" : "Not Active"}
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New User
//         <Link to="/users/new" className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Datatable;

import "./datatable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import jwt_decode from "jwt-decode";

import React, { useEffect, useState } from "react";
import {getUsers} from '../../methods/MethodUsers'
import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../BaseUrl";
const List = () => {
  const [data, setData] = useState();
  var token = localStorage.getItem("authToken");
  var decoded = jwt_decode(token);

 
  useEffect(() =>{
    getUsers().then((res) => {
      setData(res.data)
      console.log("user data",res.data)

    })
  },[setData])
  console.log("user data couont",data?.length)

  

   const blockUser = (userid) => {
     const config = {
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
     };
   
     axios
       .patch(
         `${BASE_URL}api/user/blockuserget/${userid}/`,
         {
           is_active:"false" 
         },
         config
       )
       .then(() => {
         window.location.reload();
       });
   };

   const unblockUser = (userid) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    axios
      .patch(
        `${BASE_URL}api/user/blockuserget/${userid}/`,
        {
          is_active:"true" 
        },
        config
      )
      .then(() => {
        window.location.reload();
      });
  };


  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Username</TableCell>
            <TableCell className="tableCell" style={{width:"200px"}}>Email</TableCell>
            <TableCell className="tableCell">Joined Date</TableCell>
            <TableCell className="tableCell">Phone No</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="tableCell">{data.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={data.img} alt="" className="image" /> */}
                  {data.username}
                </div>
              </TableCell>

              {/* onClick={(joined_id) =>leaveJoiner(joined_id=data.id)} */}
              {console.log("data id",data.id)}
              <TableCell className="tableCell">{data.email}</TableCell>
              <TableCell className="tableCell">{data.created_at}</TableCell>
              <TableCell className="tableCell">{data.phone_number}</TableCell>
              <TableCell className="tableCell">{data.is_active ? "Active" : "Not Active"}</TableCell>
              <TableCell className="tableCell">
                {
                  data.is_active? <button  onClick={(userid)=>blockUser((userid=data.id))} style={{width:"70px",backgroundColor:"red",color:"white",border:"none",borderRadius:"10px",height:"30px"}} className="actionbutton" >Block</button>
                  :<button  onClick={(userid)=>unblockUser((userid=data.id))} style={{width:"70px",backgroundColor:"green",color:"white",border:"none",borderRadius:"10px",height:"30px"}} className="actionbutton" >UnBlock</button>
              }
                
               </TableCell>
 
            
            </TableRow>
          ))}

{/* created_at: "2022-05-03T06:40:47.116250Z"
email: "admin@gmail.com"
id: 1
is_active: true
is_admin: true
phone_number: "6282432820"
username: "admin" */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
