import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../BaseUrl';

export const getUsers =()=> {

  var token = localStorage.getItem("authToken");

  const config = {
      
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    
   
    const response = axios.get(`${BASE_URL}api/user/allusers`,config)
    
  return response
}

export const getEvents =()=> {

  var token = localStorage.getItem("authToken");

  const config = {
      
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    
   
    const response = axios.get(`${BASE_URL}eventapi/events`,config)
    
  return response
}

export const getReportedUsers =()=> {

  var token = localStorage.getItem("authToken");

  const config = {
      
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    
   
    const response = axios.get(`${BASE_URL}api/user/reportuser`,config)
    
  return response
}

export const getQueries = () => {
  var token = localStorage.getItem("authToken");


    const config={
        headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`,
        },
    };
    const response=axios.get(`${BASE_URL}discussionapi/discussion/`,config);
  return response
}
// eventapi/reportevent/


export const getReportedEvents =()=> {

  var token = localStorage.getItem("authToken");

  const config = {
      
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    
   
    const response = axios.get(`${BASE_URL}eventapi/reportevent/`,config)
    
  return response
}



export const getReportedDiscussion =()=> {

  var token = localStorage.getItem("authToken");

  const config = {
      
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    
   
    const response = axios.get(`${BASE_URL}discussionapi/reportdiscussion/`,config)
    
  return response
}


export const getReportedComments =()=> {

  var token = localStorage.getItem("authToken");

  const config = {
      
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    
   
    const response = axios.get(`${BASE_URL}discussionapi/reportcommentget/`,config)
    
  return response
}
