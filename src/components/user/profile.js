// // // import React from 'react'
// // // import { useState } from 'react';
// // // import { useAuth } from "../context/auth";
// // // import Layout from '../layout/layout';
// // // // import {Form}
// // // import {Form,Col,Row} from "react-bootstrap"
// // // import { Button } from '@mui/material';
// // // // import auth
// // // function Profile() {
// // //   const [auth,setAuth] = useAuth();
// // //   const [formData, setFormData] = useState({
// // //     education: "",
// // //     sex: "",
// // //     aadhaarNumber: "",
// // //     passportNumber: "",
// // //     passportIssueDate: "",
// // //     passportExpiry: "",
// // //     district: "",
// // //     state: "",
// // //     pinCode: "",
// // //     country: "",
// // //     address: ""
// // //   });
// // //   const [submittedData, setSubmittedData] = useState(null);

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setSubmittedData(formData);
// // //   };

// // //   return (
// // //     // <div>
// // //       <Layout title={"profile page"}>
// // //       <div className="container-fluid m-3 p-3">
// // //         <div className="row">
// // //           <div className="col-md-5">
// // //             {/* <Us /> */}
// // //             <div className="card w-75 p-3">
// // //               <h1>User all deatils </h1>
// // //               <h3>Name:{auth?.user?.name}</h3>
// // //               <h3>Email:{auth?.user?.email}</h3>
// // //               <h3>{auth?.user?.password}</h3>
// // //             </div>
// // //           </div>
// // //           <div className="col-md-7">
// // //           <h2>Profile Form</h2>
// // //       <Form onSubmit={handleSubmit}>
// // //         <Row className="mb-3">
// // //           <Form.Group as={Col}>
// // //             <Form.Label>Education</Form.Label>
// // //             <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
// // //           </Form.Group>
// // //           <br></br>
// // //           <Form.Group as={Col}>
// // //             <Form.Label>Sex</Form.Label>
// // //             <Form.Control type="text" name="sex" value={formData.sex} onChange={handleChange} />
// // //           </Form.Group>
// // //         </Row>
// // //         <Row className="mb-3">
// // //           <Form.Group as={Col}>
// // //             <Form.Label>Aadhaar Number</Form.Label>
// // //             <Form.Control type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} />
// // //           </Form.Group>
// // //         </Row>
// // //         {/* Add more input fields for other details */}
// // //         <Button variant="primary" type="submit">Submit</Button>
// // //       </Form>
// // //       {submittedData && (
// // //         <div>
// // //           <h2>Submitted Data</h2>
// // //           <p>Education: {submittedData.education}</p>
// // //           <p>Sex: {submittedData.sex}</p>
// // //           <p>Aadhaar Number: {submittedData.aadhaarNumber}</p>
// // //           {/* Display other submitted details */}
// // //         </div>
// // //       )}
            

// // //           </div>
// // //         </div>
// // //       </div>
// // //     </Layout>
// // //     // </div>
// // //   )
// // // }

// // // export default Profile


// // import React from 'react'
// // import { useState } from 'react';
// // import { useAuth } from "../context/auth";
// // import Layout from '../layout/layout';
// // import { Form, Col, Row } from "react-bootstrap"
// // import { Button } from '@mui/material';

// // function Profile() {
// //   const {auth} = useAuth();
// //   const [formData, setFormData] = useState({
// //     education: "",
// //     Gender: "",
// //     aadhaarNumber: "",
// //     passportNumber: "",
// //     passportIssueDate: "",
// //     passportExpiry: "",
// //     district: "",
// //     state: "",
// //     pinCode: "",
// //     country: "",
// //     address: ""
// //   });
// //   const [submittedData, setSubmittedData] = useState(null);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmittedData(formData);
// //   };

// //   return (
// //     <Layout title={"Profile Page"}>
// //       <div className="container-fluid m-3 p-3">
// //         <div className="row">
// //           <div className="col-md-5">
// //             <div className="card w-75 p-3">
// //               <h1>User all details</h1>
// //               <h3>Name: {auth.user?.name}</h3>
// //               <h3>Email: {auth.user?.email}</h3>
// //             </div>
// //           </div>
// //           <div className="col-md-7">
// //             <h2>Profile Form</h2>
// //             <Form onSubmit={handleSubmit}>
// //               <Row className="mb-3">
// //                 <Form.Group as={Col}>
// //                   <Form.Label>Education</Form.Label>
// //                   <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
// //                 </Form.Group>
// //                 <Form.Group as={Col}>
// //                   <Form.Label>Gender</Form.Label>
// //                   <Form.Control type="text" name="sex" value={formData.sex} onChange={handleChange} />
// //                 </Form.Group>
// //               </Row>
// //               <Row className="mb-3">
// //                 <Form.Group as={Col}>
// //                   <Form.Label>Aadhaar Number</Form.Label>
// //                   <Form.Control type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} />
// //                 </Form.Group>
// //               </Row>
// //               <Button variant="primary" type="submit">Submit</Button>
// //             </Form>
// //             {submittedData && (
// //               <div>
// //                 <h2>Submitted Data</h2>
// //                 <p>Education: {submittedData.education}</p>
// //                 <p>Sex: {submittedData.sex}</p>
// //                 <p>Aadhaar Number: {submittedData.aadhaarNumber}</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   )
// // }

// // export default Profile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button,Dropdown } from 'react-bootstrap';
// import toast from 'react-hot-toast';

// const Profile = ({ profileId }) => {
//   const [submitted, setSubmitted] = useState(false);
//   const initialFormData = {
//     Education: '',
//     Gender: '',
//     AadhaarNo: '',
//     State: '',
//     country: '',
//     passportnumber: '',
//     phonenumber: '',
//     Age: 0
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   useEffect(() => {
//     if (profileId) {
//       // Fetch profile details if editing an existing profile
//       axios.get(`http://localhost:3002/api/route/profile/getprofiles/${profileId}`)
//         .then(response => {
//           setFormData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching profile details:', error);
//         });
//     }
//   }, [profileId]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (profileId) {
//       // Update existing profile
//       axios.put(`http://localhost:3002/api/route/profile/profiles/${profileId}`, formData)
//         .then(response => {
//           console.log('Profile updated successfully:', response.data);
//           setSubmitted(true);
//           setTimeout(() => {
//             setSubmitted(false);
//             setFormData(initialFormData); // Reset form data
//           }, 2000);
//         })
//         .catch(error => {
//           console.error('Error updating profile:', error);
//           toast.error('Error updating profile')
//         });
//     } else {
//       // Add new profile
//       axios.post('http://localhost:3002/api/route/profile/addprofile', formData)
//         .then(response => {
          
//           console.log('Profile added successfully:', response.data);
//           toast.success('Profile added  successfully:')
//           setSubmitted(true);
//           setTimeout(() => {
//             setSubmitted(false);
//             setFormData(initialFormData); // Reset form data
//           }, 2000);
//         })
//         .catch(error => {
//           console.error('Error adding profile:', error);
//           toast.error('Error in adding profile')
//         });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} >
//       <Form.Group controlId="education">
//         <Form.Label>Education:</Form.Label>
//         <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="gender">
//         <Form.Label>Gender:</Form.Label>
//         <Dropdown>
//           <Dropdown.Toggle variant="primary" id="dropdown-gender">
//             {formData.Gender || 'Select Gender'}
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
//             <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
//             <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Form.Group>
//       <Form.Group controlId="aadhaarNo">
//         <Form.Label>Aadhaar Number:</Form.Label>
//         <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="state">
//         <Form.Label>State:</Form.Label>
//         <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="country">
//         <Form.Label>Country:</Form.Label>
//         <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="passportNumber">
//         <Form.Label>Passport Number:</Form.Label>
//         <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
//       </Form.Group>

//       {/* <Form.Group controlId="birthday">
//         <Form.Label>Birthday:</Form.Label>
//         <Form.Control type="text" name="birthday" value={formData.birthday} onChange={handleChange} />
//       </Form.Group> */}

//       <Form.Group controlId="phoneNumber">
//         <Form.Label>Phone Number:</Form.Label>
//         <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="age">
//         <Form.Label>Age:</Form.Label>
//         <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
//       </Form.Group>

//       <Button variant="primary" type="submit">Submit</Button>
//       {submitted && <p>Form submitted successfully! Refreshing...</p>}
//     </Form>
//   );
// };

// export default Profile;


// // import React from 'react'
// // import { useState } from 'react';
// // import { useAuth } from "../context/auth";
// // import Layout from '../layout/layout';
// // // import {Form}
// // import {Form,Col,Row} from "react-bootstrap"
// // import { Button } from '@mui/material';
// // // import auth
// // function Profile() {
// //   const [auth,setAuth] = useAuth();
// //   const [formData, setFormData] = useState({
// //     education: "",
// //     sex: "",
// //     aadhaarNumber: "",
// //     passportNumber: "",
// //     passportIssueDate: "",
// //     passportExpiry: "",
// //     district: "",
// //     state: "",
// //     pinCode: "",
// //     country: "",
// //     address: ""
// //   });
// //   const [submittedData, setSubmittedData] = useState(null);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmittedData(formData);
// //   };

// //   return (
// //     // <div>
// //       <Layout title={"profile page"}>
// //       <div className="container-fluid m-3 p-3">
// //         <div className="row">
// //           <div className="col-md-5">
// //             {/* <Us /> */}
// //             <div className="card w-75 p-3">
// //               <h1>User all deatils </h1>
// //               <h3>Name:{auth?.user?.name}</h3>
// //               <h3>Email:{auth?.user?.email}</h3>
// //               <h3>{auth?.user?.password}</h3>
// //             </div>
// //           </div>
// //           <div className="col-md-7">
// //           <h2>Profile Form</h2>
// //       <Form onSubmit={handleSubmit}>
// //         <Row className="mb-3">
// //           <Form.Group as={Col}>
// //             <Form.Label>Education</Form.Label>
// //             <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
// //           </Form.Group>
// //           <br></br>
// //           <Form.Group as={Col}>
// //             <Form.Label>Sex</Form.Label>
// //             <Form.Control type="text" name="sex" value={formData.sex} onChange={handleChange} />
// //           </Form.Group>
// //         </Row>
// //         <Row className="mb-3">
// //           <Form.Group as={Col}>
// //             <Form.Label>Aadhaar Number</Form.Label>
// //             <Form.Control type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} />
// //           </Form.Group>
// //         </Row>
// //         {/* Add more input fields for other details */}
// //         <Button variant="primary" type="submit">Submit</Button>
// //       </Form>
// //       {submittedData && (
// //         <div>
// //           <h2>Submitted Data</h2>
// //           <p>Education: {submittedData.education}</p>
// //           <p>Sex: {submittedData.sex}</p>
// //           <p>Aadhaar Number: {submittedData.aadhaarNumber}</p>
// //           {/* Display other submitted details */}
// //         </div>
// //       )}
            

// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //     // </div>
// //   )
// // }

// // export default Profile


// import React from 'react'
// import { useState } from 'react';
// import { useAuth } from "../context/auth";
// import Layout from '../layout/layout';
// import { Form, Col, Row } from "react-bootstrap"
// import { Button } from '@mui/material';

// function Profile() {
//   const {auth} = useAuth();
//   const [formData, setFormData] = useState({
//     education: "",
//     Gender: "",
//     aadhaarNumber: "",
//     passportNumber: "",
//     passportIssueDate: "",
//     passportExpiry: "",
//     district: "",
//     state: "",
//     pinCode: "",
//     country: "",
//     address: ""
//   });
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <Layout title={"Profile Page"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-5">
//             <div className="card w-75 p-3">
//               <h1>User all details</h1>
//               <h3>Name: {auth.user?.name}</h3>
//               <h3>Email: {auth.user?.email}</h3>
//             </div>
//           </div>
//           <div className="col-md-7">
//             <h2>Profile Form</h2>
//             <Form onSubmit={handleSubmit}>
//               <Row className="mb-3">
//                 <Form.Group as={Col}>
//                   <Form.Label>Education</Form.Label>
//                   <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group as={Col}>
//                   <Form.Label>Gender</Form.Label>
//                   <Form.Control type="text" name="sex" value={formData.sex} onChange={handleChange} />
//                 </Form.Group>
//               </Row>
//               <Row className="mb-3">
//                 <Form.Group as={Col}>
//                   <Form.Label>Aadhaar Number</Form.Label>
//                   <Form.Control type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} />
//                 </Form.Group>
//               </Row>
//               <Button variant="primary" type="submit">Submit</Button>
//             </Form>
//             {submittedData && (
//               <div>
//                 <h2>Submitted Data</h2>
//                 <p>Education: {submittedData.education}</p>
//                 <p>Sex: {submittedData.sex}</p>
//                 <p>Aadhaar Number: {submittedData.aadhaarNumber}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button,Dropdown } from 'react-bootstrap';
// import toast from 'react-hot-toast';

// const Profile = ({ profileId }) => {
//   const [submitted, setSubmitted] = useState(false);
//   const initialFormData = {
//     Education: '',
//     Gender: '',
//     AadhaarNo: '',
//     State: '',
//     country: '',
//     passportnumber: '',
//     phonenumber: '',
//     Age: 0
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   useEffect(() => {
//     if (profileId) {
//       // Fetch profile details if editing an existing profile
//       axios.get(`http://localhost:3002/api/route/profile/getprofiles/${profileId}`)
//         .then(response => {
//           setFormData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching profile details:', error);
//         });
//     }
//   }, [profileId]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (profileId) {
//       // Update existing profile
//       axios.put(`http://localhost:3002/api/route/profile/profiles/${profileId}`, formData)
//         .then(response => {
//           console.log('Profile updated successfully:', response.data);
//           setSubmitted(true);
//           setTimeout(() => {
//             setSubmitted(false);
//             setFormData(initialFormData); // Reset form data
//           }, 2000);
//         })
//         .catch(error => {
//           console.error('Error updating profile:', error);
//           toast.error('Error updating profile')
//         });
//     } else {
//       // Add new profile
//       axios.post('http://localhost:3002/api/route/profile/addprofile', formData)
//         .then(response => {
          
//           console.log('Profile added successfully:', response.data);
//           toast.success('Profile added  successfully:')
//           setSubmitted(true);
//           setTimeout(() => {
//             setSubmitted(false);
//             setFormData(initialFormData); // Reset form data
//           }, 2000);
//         })
//         .catch(error => {
//           console.error('Error adding profile:', error);
//           toast.error('Error in adding profile')
//         });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} >
//       <Form.Group controlId="education">
//         <Form.Label>Education:</Form.Label>
//         <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="gender">
//         <Form.Label>Gender:</Form.Label>
//         <Dropdown>
//           <Dropdown.Toggle variant="primary" id="dropdown-gender">
//             {formData.Gender || 'Select Gender'}
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
//             <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
//             <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Form.Group>
//       <Form.Group controlId="aadhaarNo">
//         <Form.Label>Aadhaar Number:</Form.Label>
//         <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="state">
//         <Form.Label>State:</Form.Label>
//         <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="country">
//         <Form.Label>Country:</Form.Label>
//         <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="passportNumber">
//         <Form.Label>Passport Number:</Form.Label>
//         <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
//       </Form.Group>

//       {/* <Form.Group controlId="birthday">
//         <Form.Label>Birthday:</Form.Label>
//         <Form.Control type="text" name="birthday" value={formData.birthday} onChange={handleChange} />
//       </Form.Group> */}

//       <Form.Group controlId="phoneNumber">
//         <Form.Label>Phone Number:</Form.Label>
//         <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
//       </Form.Group>

//       <Form.Group controlId="age">
//         <Form.Label>Age:</Form.Label>
//         <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
//       </Form.Group>

//       <Button variant="primary" type="submit">Submit</Button>
//       {submitted && <p>Form submitted successfully! Refreshing...</p>}
//     </Form>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button, Dropdown } from 'react-bootstrap';
// import toast from 'react-hot-toast';

// const Profile = ({ profileId }) => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const initialFormData = {
//     Education: '',
//     Gender: '',
//     AadhaarNo: '',
//     State: '',
//     country: '',
//     passportnumber: '',
//     phonenumber: '',
//     Age: 0
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   useEffect(() => {
//     if (profileId) {
//       // Fetch profile details if editing an existing profile
//       axios.get(`http://localhost:3002/api/route/profile/getprofiles/${profileId}`)
//         .then(response => {
//           setFormData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching profile details:', error);
//         });
//     }
//   }, [profileId]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUpdate = () => {
//     setIsUpdating(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (profileId) {
//       // Update existing profile
//       axios.put(`http://localhost:3002/api/route/profile/profiles/${profileId}`, formData)
//         .then(response => {
//           console.log('Profile updated successfully:', response.data);
//           setSubmitted(true);
//           setIsUpdating(false);
//           setTimeout(() => {
//             setSubmitted(false);
//           }, 2000);
//         })
//         .catch(error => {
//           console.error('Error updating profile:', error);
//           toast.error('Error updating profile');
//         });
//     } else {
//       // Add new profile
//       axios.post('http://localhost:3002/api/route/profile/addprofile', formData)
//         .then(response => {
//           console.log('Profile added successfully:', response.data);
//           toast.success('Profile added successfully');
//           setSubmitted(true);
//           setIsUpdating(false);
//           // setTimeout(() => {
//           //   setSubmitted(false);
//           //   setFormData(initialFormData);
//           // }, 2000);
//         })
//         .catch(error => {
//           console.error('Error adding profile:', error);
//           toast.error('Error adding profile');
//         });
//     }
//   };

//   return (
//     <>
//       {!isUpdating ? (
//         <>
//           <div>
//             <h1>Profile Details</h1>
//             <p><strong>Education:</strong> {formData.Education}</p>
//             <p><strong>Gender:</strong> {formData.Gender}</p>
//             <p><strong>Aadhaar Number:</strong> {formData.AadhaarNo}</p>
//             <p><strong>State:</strong> {formData.State}</p>
//             <p><strong>Country:</strong> {formData.country}</p>
//             <p><strong>Passport Number:</strong> {formData.passportnumber}</p>
//             <p><strong>Phone Number:</strong> {formData.phonenumber}</p>
//             <p><strong>Age:</strong> {formData.Age}</p>
//             <Button variant="primary" onClick={handleUpdate}>Update</Button>
//           </div>
//         </>
//       ) : (
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="education">
//             <Form.Label>Education:</Form.Label>
//             <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="gender">
//             <Form.Label>Gender:</Form.Label>
//             <Dropdown>
//               <Dropdown.Toggle variant="primary" id="dropdown-gender">
//                 {formData.Gender || 'Select Gender'}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
//                 <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
//                 <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Form.Group>
//           <Form.Group controlId="aadhaarNo">
//             <Form.Label>Aadhaar Number:</Form.Label>
//             <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="state">
//             <Form.Label>State:</Form.Label>
//             <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="country">
//             <Form.Label>Country:</Form.Label>
//             <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="passportNumber">
//             <Form.Label>Passport Number:</Form.Label>
//             <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="phoneNumber">
//             <Form.Label>Phone Number:</Form.Label>
//             <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="age">
//             <Form.Label>Age:</Form.Label>
//             <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
//           </Form.Group>
//           <Button variant="primary" type="submit">Submit</Button>
//         </Form>
//       )}
//       {/* {submitted && <p>Form submitted successfully! Refreshing...</p>} */}
//     </>
//   );
// };

// export default Profile;
// // Profile;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button, Dropdown } from 'react-bootstrap';
// import toast from 'react-hot-toast';

// const Profile = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [profileData, setProfileData] = useState(null);
//   const initialFormData = {
//     Education: '',
//     Gender: '',
//     AadhaarNo: '',
//     State: '',
//     country: '',
//     passportnumber: '',
//     phonenumber: '',
//     Age: 0
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   useEffect(() => {
//     // Fetch profile details on component mount
//     axios.get(`http://localhost:3002/api/route/profile/getprofile`)
//       .then(response => {
//         if (response.data) {
//           setProfileData(response.data);
//           setFormData(response.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching profile details:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUpdate = () => {
//     setIsUpdating(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Update profile
//     axios.put(`http://localhost:3002/api/route/profile/profiles/${profileId}`, formData)
//       .then(response => {
//         console.log('Profile updated successfully:', response.data);
//         toast.success('Profile updated successfully');
//         setSubmitted(true);
//         setIsUpdating(false);
//         setProfileData(formData);
//         setTimeout(() => {
//           setSubmitted(false);
//         }, 2000);
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//         toast.error('Error updating profile');
//       });
//   };

//   return (
//     <>
//       {profileData && !isUpdating ? (
//         <>
//           <div>
//             <h1>Profile Details</h1>
//             <p><strong>Education:</strong> {profileData.Education}</p>
//             <p><strong>Gender:</strong> {profileData.Gender}</p>
//             <p><strong>Aadhaar Number:</strong> {profileData.AadhaarNo}</p>
//             <p><strong>State:</strong> {profileData.State}</p>
//             <p><strong>Country:</strong> {profileData.country}</p>
//             <p><strong>Passport Number:</strong> {profileData.passportnumber}</p>
//             <p><strong>Phone Number:</strong> {profileData.phonenumber}</p>
//             <p><strong>Age:</strong> {profileData.Age}</p>
//             <Button variant="primary" onClick={handleUpdate}>Update</Button>
//           </div>
//         </>
//       ) : (
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="education">
//             <Form.Label>Education:</Form.Label>
//             <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="gender">
//             <Form.Label>Gender:</Form.Label>
//             <Dropdown>
//               <Dropdown.Toggle variant="primary" id="dropdown-gender">
//                 {formData.Gender || 'Select Gender'}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
//                 <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
//                 <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Form.Group>
//           <Form.Group controlId="aadhaarNo">
//             <Form.Label>Aadhaar Number:</Form.Label>
//             <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="state">
//             <Form.Label>State:</Form.Label>
//             <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="country">
//             <Form.Label>Country:</Form.Label>
//             <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="passportNumber">
//             <Form.Label>Passport Number:</Form.Label>
//             <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="phoneNumber">
//             <Form.Label>Phone Number:</Form.Label>
//             <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="age">
//             <Form.Label>Age:</Form.Label>
//             <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
//           </Form.Group>
//           <Button variant="primary" type="submit">Submit</Button>
//         </Form>
//       )}
//       {submitted && <p>Form submitted successfully! Refreshing...</p>}
//     </>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button, Dropdown } from 'react-bootstrap';
// import toast from 'react-hot-toast';
// import { useAuth } from '../context/auth';
// const Profile = () => {
//   const { userId } = useAuth();
//   const [submitted, setSubmitted] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [profileData, setProfileData] = useState(null);

//   const [profileId, setProfileId] = useState(null); // State to store profile ID
//   const [formData, setFormData] = useState({
//     Education: '',
//     Gender: '',
//     AadhaarNo: '',
//     State: '',
//     country: '',
//     passportnumber: '',
//     phonenumber: '',
//     Age: 0
//   });

//   useEffect(() => {
//     // Fetch profile details on component mount
//     axios.get(`http://localhost:3002/api/route/profile/getprofiles`)
//     .then(response => {
//       if (response.data && response.data.userId === userId) {
//         setProfileData(response.data);
//         setFormData(response.data);
//         setProfileId(response.data._id);
//       } else {
//         console.error('Profile not found for user:', userId);
//       }
//     })
//       .catch(error => {
//         console.error('Error fetching profile details:', error);
//       });
//   }, []);

//   // const handleChange = (e) => {
//   //   setProfileData({
//   //     ...profileData,
//   //     [e.target.name]: e.target.value
//   //   });
//   // };
//   const handleChange = (e) => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value
//         });
//       };
//   const handleUpdate = () => {
//     setIsUpdating(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Update profile
//     axios.put(`http://localhost:3002/api/route/profile/profiles/${profileId}`, profileData)
//       .then(response => {
//         console.log('Profile updated successfully:', response.data);
//         toast.success('Profile updated successfully');
//         setSubmitted(true);
//         setIsUpdating(false);
//         setTimeout(() => {
//           setSubmitted(false);
//         }, 2000);
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//         toast.error('Error updating profile');
//       });
//   };

//   return (
//     <>
//       {profileData && !isUpdating ? (
//         <>
//           <div>
//             <h1>Profile Details</h1>
//             <p><strong>Education:</strong> {profileData.Education}</p>
//             <p><strong>Gender:</strong> {profileData.Gender}</p>
//             <p><strong>Aadhaar Number:</strong> {profileData.AadhaarNo}</p>
//             <p><strong>State:</strong> {profileData.State}</p>
//             <p><strong>Country:</strong> {profileData.country}</p>
//             <p><strong>Passport Number:</strong> {profileData.passportnumber}</p>
//             <p><strong>Phone Number:</strong> {profileData.phonenumber}</p>
//             <p><strong>Age:</strong> {profileData.Age}</p>
//             <Button variant="primary" onClick={handleUpdate}>Update</Button>
//           </div>
//         </>
//       ) : (
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="education">
//              <Form.Label>Education:</Form.Label>
//              <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
//            </Form.Group>
//            <Form.Group controlId="gender">
//              <Form.Label>Gender:</Form.Label>
//              <Dropdown>
//                <Dropdown.Toggle variant="primary" id="dropdown-gender">
//                  {formData.Gender || 'Select Gender'}
//                </Dropdown.Toggle>
//                <Dropdown.Menu>
//                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
//                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
//                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
//                </Dropdown.Menu>
//              </Dropdown>
//            </Form.Group>
//            <Form.Group controlId="aadhaarNo">
//              <Form.Label>Aadhaar Number:</Form.Label>
//              <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
//            </Form.Group>
//            <Form.Group controlId="state">
//              <Form.Label>State:</Form.Label>
//              <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
//            </Form.Group>
//            <Form.Group controlId="country">
//              <Form.Label>Country:</Form.Label>
//              <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
//            </Form.Group>
//            <Form.Group controlId="passportNumber">
//              <Form.Label>Passport Number:</Form.Label>
//              <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
//            </Form.Group>
//            <Form.Group controlId="phoneNumber">
//              <Form.Label>Phone Number:</Form.Label>
//              <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
//            </Form.Group>
//            <Form.Group controlId="age">
//              <Form.Label>Age:</Form.Label>
//              <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
//            </Form.Group>
//           <Button variant="primary" type="submit">Submit</Button>
//         </Form>
//       )}
//       {/* {userId} */}
//       {submitted && <p>Form submitted successfully! Refreshing...</p>}
//     </>
//   );
// };

// export default Profile;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button, Dropdown ,Card} from 'react-bootstrap';
// // import { Button } from '@mui/material';
// import toast from 'react-hot-toast';
// import { useAuth } from '../context/auth';
// import Layout from '../layout/layout';

// const Profile = () => {
//   const { userId,auth } = useAuth();
//   const [submitted, setSubmitted] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [profileData, setProfileData] = useState(null);

//   const [profileId, setProfileId] = useState(null); // State to store profile ID
//   const [formData, setFormData] = useState({
//     Education: '',
//     Gender: '',
//     AadhaarNo: '',
//     State: '',
//     country: '',
//     passportnumber: '',
//     phonenumber: '',
//     Age: 0
//   });

//   useEffect(() => {
//     // Fetch profile details on component mount
//     axios.get(`http://localhost:3002/api/route/profile/getprofiles/${userId}`)
//     .then(response => {
//       if (response.data.profiles && response.data.profiles.length > 0) {
//         // Extract the first profile from the array
//         const userProfile = response.data.profiles[0];
//         setProfileData(userProfile);
//         setFormData({
//           Education: userProfile.Education,
//           Gender: userProfile.Gender,
//           AadhaarNo: userProfile.AadhaarNo,
//           State: userProfile.State,
//           country: userProfile.country,
//           passportnumber: userProfile.passportnumber,
//           phonenumber: userProfile.phonenumber,
//           Age: userProfile.Age
//         });
//         setProfileId(userProfile._id);
//       } else {
//         console.error('Profile not found for user:', userId);
//         console.log(response.data)
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching profile details:', error);
//     });
// }, [userId]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUpdate = () => {
//     setIsUpdating(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Update profile
//     axios.put(`http://localhost:3002/api/route/profile/profiles/${profileId}`, formData)
//       .then(response => {
//         console.log('Profile updated successfully:', response.data);
//         toast.success('Profile updated successfully');
//         setSubmitted(true);
//         setIsUpdating(false);
//         setProfileData(response.data.profile);
//         setTimeout(() => {
//           setSubmitted(false);
//         }, 2000);
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//         toast.error('Error updating profile');
//       });
//   };

//   return (
//     <Layout>
//     <Card>
//       <Card.Body>
//         <div className="row">
//           <div className="col-md-6">
//             <Card className='text-center p-2'>
//             <h3>User Details</h3>
//             <p><strong>Name:</strong> {auth.user.name}</p>
//             <p><strong>Email:</strong> {auth.user.email}</p>
//             <p><strong>userId:</strong> {userId}</p>
//             </Card>
//           </div>
//           <div className="col-md-6">
//             {profileData && !isUpdating ? (
//               <div>
//                 <h3>Profile Details</h3>
//                 <p><strong>Education:</strong> {profileData.Education}</p>
//                 <p><strong>Gender:</strong> {profileData.Gender}</p>
//                 <p><strong>Aadhaar Number:</strong> {profileData.AadhaarNo}</p>
//                 <p><strong>State:</strong> {profileData.State}</p>
//                 <p><strong>Country:</strong> {profileData.country}</p>
//                 <p><strong>Passport Number:</strong> {profileData.passportnumber}</p>
//                 <p><strong>Phone Number:</strong> {profileData.phonenumber}</p>
//                 <p><strong>Age:</strong> {profileData.Age}</p>
//                 <Button variant="primary" onClick={handleUpdate}>Update</Button>
//               </div>
//             ) : (
//               <Form onSubmit={handleSubmit}>
//                  <Form.Group controlId="education">
//               <Form.Label>Education:</Form.Label>
//               <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="gender">
//               <Form.Label>Gender:</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant="primary" id="dropdown-gender">
//                   {formData.Gender || 'Select Gender'}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
//                   <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
//                   <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>
//             <Form.Group controlId="aadhaarNo">
//               <Form.Label>Aadhaar Number:</Form.Label>
//               <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="state">
//               <Form.Label>State:</Form.Label>
//               <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="country">
//               <Form.Label>Country:</Form.Label>
//               <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="passportNumber">
//               <Form.Label>Passport Number:</Form.Label>
//               <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="phoneNumber">
//               <Form.Label>Phone Number:</Form.Label>
//               <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="age">
//               <Form.Label>Age:</Form.Label>
//               <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
//             </Form.Group>
               
//                 <Button variant="primary" type="submit">Submit</Button>
//               </Form>
//             )}
//           </div>
//         </div>
//       </Card.Body>
//     </Card>
//     {submitted && <p>Form submitted successfully! Refreshing...</p>}
//   </Layout>
// );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Card,Dropdown, CardBody } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';
import Layout from '../layout/layout';

const Profile = () => {
  const { userId, auth } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const [formData, setFormData] = useState({
    Education: '',
    Gender: '',
    AadhaarNo: '',
    State: '',
    country: '',
    passportnumber: '',
    phonenumber: '',
    Age: 0
  });

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3002/api/route/profile/getprofiles/${userId}`)
        .then(response => {
          const userProfile = response.data.profile;
          if (userProfile) {
            setProfileData(userProfile);
            setFormData({
              Education: userProfile.Education,
              Gender: userProfile.Gender,
              AadhaarNo: userProfile.AadhaarNo,
              State: userProfile.State,
              country: userProfile.country,
              passportnumber: userProfile.passportnumber,
              phonenumber: userProfile.phonenumber,
              Age: userProfile.Age
            });
          } else {
            console.error('Profile not found for user:', userId);
          }
        })
        .catch(error => {
          console.error('Error fetching profile details:', error);
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile
    axios.put(`http://localhost:3002/api/route/profile/profiles/${profileData._id}`, formData)
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        toast.success('Profile updated successfully');
        setSubmitted(true);
        setIsUpdating(false);
        setProfileData(response.data.profile);
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        toast.error('Error updating profile');
      });
  };

  return (
    <Layout>
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <Card className='text-center p-2'>
                <h3>User Details</h3>
                <p><strong>Name:</strong> {auth.user.name}</p>
                <p><strong>Email:</strong> {auth.user.email}</p>
                <p><strong>userId:</strong> {userId}</p>
              </Card>
            </div>
            <div className="col-md-6">
              {profileData && !isUpdating ? (
                <div>
                  <Card style={{width:"65%"}}>
                    <CardBody >
                  <h3>Profile Details</h3>
                 <p><strong>Education:</strong> {profileData.Education}</p>
                 <p><strong>Gender:</strong> {profileData.Gender}</p>
                 <p><strong>Aadhaar Number:</strong> {profileData.AadhaarNo}</p>
                 <p><strong>State:</strong> {profileData.State}</p>
                 <p><strong>Country:</strong> {profileData.country}</p>
                 <p><strong>Passport Number:</strong> {profileData.passportnumber}</p>
                 <p><strong>Phone Number:</strong> {profileData.phonenumber}</p>
                 <p><strong>Age:</strong> {profileData.Age}</p>
                 {/* <Button variant="primary" onClick={handleUpdate}>Update</Button> */}
                  {/* Display profile details */}
                  <Button variant="success" onClick={handleUpdate}>Update</Button>
                  </CardBody>
                  </Card>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>

                  {/* Form fields */}
                  <Form.Group controlId="education">
              <Form.Label>Education:</Form.Label>
              <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-gender">
                  {formData.Gender || 'Select Gender'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group controlId="aadhaarNo">
              <Form.Label>Aadhaar Number:</Form.Label>
              <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="state">
               <Form.Label>State:</Form.Label>
               <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="country">
               <Form.Label>Country:</Form.Label>
               <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="passportNumber">
               <Form.Label>Passport Number:</Form.Label>
               <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="phoneNumber">
               <Form.Label>Phone Number:</Form.Label>
               <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="age">
               <Form.Label>Age:</Form.Label>
               <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
             </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
      {submitted && <p>Form submitted successfully! Refreshing...</p>}
    </Layout>
  );
};

export default Profile;
