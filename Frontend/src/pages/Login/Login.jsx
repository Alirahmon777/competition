import React, { useEffect, useState } from 'react';
import "../../assets/css/Login.css"
import { Link } from 'react-router-dom';
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setUsers(jsonData);
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

    if (users.length === 0) {
        return <div>No users available.</div>;
    }

    return (
        <div className='row'>
            {users.map((user) => (
                // <div key={user.id} className="user">
                //     <h2>{user.firstname}</h2>
                //     <p>Email: {user.email}</p>
                //     <p>Username: {user.username}</p>
                //     <p>Phone: {user.phone}</p>
                //     <hr />
                // </div>

                // <div key={user.id} className="card" style={{ width: '18rem' }}>
                //     <img src="data:image/png;base64,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" className="card-img-top" alt="img" />
                //     <div className="card-body">
                //         <h5 className="card-title">{user.firstname} {user.lastname}</h5>
                //         <p className="card-text">

                //         Email: {user.email}
                //         Username: {user.usename}
                //         Phone: {user.phone}
                //         </p>

                //     </div>
                // </div>


                <div className="  col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 CardRow">
                    <div className="card">
                        <div className="poster"><img src="https://avatars.mds.yandex.net/i?id=ad15e60c25a66c4071e1745b14e891508a4fef12-9100256-images-thumbs&n=13" alt="Location Unknown" /></div>
                        <div className="details">
                            <h2>{user.firstname} {user.lastname}</h2>
                            <h2>2021 • PG • 1hr 38min</h2>
                            <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                                <span>4.2/5</span>
                            </div>
                            <div className="tags">
                                <span className="tag">Herurg</span>
                                <span className="tag">Lor</span>
                                <span className="tag">Glava Vrach</span>
                            </div>
                            <a className="desc">
                                Email: <strong>{user.email}</strong>
                                <br />
                                Username: <strong>{user.username}</strong>
                                <br />
                                Phone: <strong>{user.phone}</strong>
                            </a>
                            <div className="cast">
                                <h3>Nurses</h3>
        <ul>
          <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
          <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
          <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg
" alt="Antonio Herrera" title="Antonio Herrera" /></li>
        </ul>
      </div>

      <div className="About">
                                <Link to="/info_doctor" className='desc'><strong>More About Doctor</strong></Link>
      </div>
                        </div>
                    </div>

                </div>

            ))}
        </div>
    );
}

export default UserList;
