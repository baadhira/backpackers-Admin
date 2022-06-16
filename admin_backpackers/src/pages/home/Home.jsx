import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import { getEvents, getQueries, getUsers } from "../../methods/MethodUsers";

const Home = () => {
  const [data, setData] = useState();
  const [event, setEvent] = useState();
  const [query, setQuery] = useState();

  
  useEffect(() =>{
    getUsers().then((res) => {
      setData(res.data)

    })

    getEvents().then((res) => {
      setEvent(res.data)

    })
    getQueries().then((res) => {
      setQuery(res.data)

    })
  },[setData,setEvent,setQuery])
  console.log("query length",query?.length)

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="user" />
          <Widget type="user" />

          <Widget type="user" /> */}

          {/* <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
   <div style={{display: 'flex', flexDirection: 'row'}}>
  <a class="card1" href="#">
    <h3>{event?.length}</h3>
    <p class="small">Events</p>
    <div class="go-corner" href="#">
      {/* <div class="go-arrow">
        →
      </div> */}
    </div>
  </a>
  <a class="card1" href="#">
    <h3 className="text-center">{data?.length}</h3>
    <p className="text-center" class="small">Users</p>
    <div class="go-corner" href="#">
      {/* <div class="go-arrow">
        →
      </div> */}
    </div>
  </a>
  <a class="card1" href="#">
    <h3>{query?.length}</h3>
    <p class="small">Queries</p>
    <div class="go-corner" href="#">
      {/* <div class="go-arrow">
        →
      </div> */}
    </div>
  </a>
  

  </div>
 


        <div className="listContainer">
          <div className="listTitle">Latest Joiners</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
