import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { getNonApprovedApplications } from '../../services/operations/InstituteOperations';
import { getStudentData } from '../../services/operations/StudentOperations';
import { approveCertificate } from '../../services/operations/InstituteOperations';
import CertificateSlider from './CertificateSlider';
import SidebarInstitute from './SidebarInstitude';
import CryptoJS from 'crypto-js';

function CertificateApplication() {
  const { 
    account, 
    result, 
    dashboardLoading, 
    setDashboardLoading,
    certificateData, 
    SetCertificateData,
    showSlider, 
    SetShowSlider,
    encryptedData, 
    SetEncryptedData,
    call, setCall,c1, setC1,c2, setC2} = useContext(AppContext);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      console.log(result.id);
      const response = await getNonApprovedApplications(result.id);
      const sample = response.data.CertificateRequest;
      console.log(sample);
      setData(sample);
      setDashboardLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setDashboardLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [result.id]);


  useEffect(() => {
    const fetchData2 = async () => {
      try {
        if (call === true) {
          console.log("Backend m approve hone aa gaya ...............");
          console.log(c1);
          console.log(c2);
          console.log("ab hogi call");
  
          // Assuming approveCertificate is an asynchronous function
          await approveCertificate(c1, c2);
          
          console.log("ho gai --------------");
          SetShowSlider(false);
          setCall(false);
          fetchData();
        }
      } catch (error) {
        console.error("Error in useEffect:", error);
        // Handle the error as needed
      }
    };
  
    // Call the asynchronous function
    fetchData2();
  
    // Dependencies array with only 'call'
  }, [call]);
  
  const handleApprove = async (data) => {
    try {
      const result = await getStudentData(data.StudentId);
      console.log(result);
  
      const newCertificateData = {
        instituteName: data.instituteName,
        StartDate: new Date(data.StartDate).toISOString().slice(2, 10),
        EndDate: new Date(data.EndDate).toISOString().slice(2, 10),
        AppliedAt: new Date(data.AppliedAt).toISOString().slice(2, 10),
        StudentName: data.StudentName,
        courseName: data.courseName,
        studentAccount: result.data.AccountNumber,
        instituteAccount: account
      };

      setC1(data.InstituteId);
      setC2(data._id);

      // Set the new certificate data
      SetCertificateData(newCertificateData);
      console.log(certificateData)
      // Call a function to handle side effects after state updates
      handleAfterApprove(newCertificateData);
    } catch (error) {
      console.error(error);
      setDashboardLoading(false);
    }
  };
  
  // Separate function to handle side effects after state updates
  const handleAfterApprove = (newCertificateData) => {
    console.log("ye h certificate ka data");
    console.log(newCertificateData);
  
    // Make sure the data is not undefined before encrypting
    if (newCertificateData) {
      const secretKey = 'secret';
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(newCertificateData), secretKey).toString();
  
      // Use the callback form of setEncryptedData to ensure the latest state
      SetEncryptedData(prevEncryptedData => {
        console.log("Previous encrypted data:", prevEncryptedData);
        console.log("New encrypted data:", encryptedData);
        SetShowSlider(true);
        return encryptedData;
      });
  
      console.log("data lelo");
    }
  };
  

  return (
    <div className="    pt-16   flex flex-col">
      <SidebarInstitute />
      {
      showSlider ? (<CertificateSlider/>) : 
      (<div className=" pl-80 pt-7">
        <h2>Applications for certificates</h2>
      <div>
        {dashboardLoading ? (
          <div>loading..</div>
        ) : (
          <div>
            {data.map((item) => (
              <div key={item._id}>
                <p>Application id: {item._id}</p>
                <p>AppliedAt: {item.AppliedAt}</p>
                <p>EndDate: {item.EndDate}</p>
                <p>InstituteId: {item.InstituteId}</p>
                <p>Institute Name: {item.instituteName}</p>
                <p>StartDate: {item.StartDate}</p>
                <p>StudentId: {item.StudentId}</p>
                <p>StudentName: {item.StudentName}</p>
                <p>courseName: {item.courseName}</p>
                <p>status: {item.status}</p>
                {item.status === 'NotApproved' && (
                  <button onClick={() => handleApprove(item)}>Approve</button>
                )}
              </div>
            ))
          }
        </div>)
        }
        </div>
      </div>)
    } 
    </div>
  );
}

export default CertificateApplication;
