import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'; // Fix: Import useParams
import axios from 'axios';
import '../../assets/css/About_Doctor.css';

function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/users');
                setDoctors(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="doctor-list">
            {doctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                    <img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Doctor" />
                    <h2>
                        {doctor.firstname} {doctor.lastname}
                    </h2>
                    <p>Email: {doctor.email}</p>
                    <p>Username: {doctor.username}</p>
                    <p>Phone: {doctor.phone}</p>
                    <Link to={`/doctors/${doctor.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

function DoctorDetail() {
    const { userId } = useParams(); // Fix: Use userId instead of id
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/users/${userId}`); // Fix: Use userId instead of id
                setDoctor(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, [userId]); // Fix: Use userId instead of id

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!doctor) {
        return <div>Doctor not found.</div>;
    }

    return (
        <div className="doctor-detail">
            <img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Doctor" />
            <h2>
                {doctor.firstname} {doctor.lastname}
            </h2>
            <p>Email: {doctor.email}</p>
            <p>Username: {doctor.username}</p>
            <p>Phone: {doctor.phone}</p>
        </div>
    );
}

// function InfoDoctor() {
//     return (
//         <Router>
//             <div className="App">
//                 <header>
//                     <h1>Doctor Information Page</h1>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </header>
//                 <main>
//                     <Route exact path="/" component={DoctorList} />
//                     <Route path="/doctors/:userId" component={DoctorDetail} /> {/* Fix: Use userId instead of id */}
//                 </main>
//             </div>
//         </Router>
//     );
// }

// export default InfoDoctor;
