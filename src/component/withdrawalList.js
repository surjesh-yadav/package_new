import React, { useState, useEffect } from 'react';
import { useAddress } from "@thirdweb-dev/react";
import Loader from "../assert/images/loder.svg";
import { BASE_URL } from '../constants';

const WithdrawalList = () => { // Rename function to start with uppercase
    const walletAddress = useAddress();
    const [userData, setUserData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/user/withdrawalDataList`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        walletAddress: walletAddress
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const responseData = await response.json();
                const userDataFromResponse = responseData.data.userData;
                console.log("userDataFromResponse", userDataFromResponse);
                setUserData(userDataFromResponse);

                // Set loading to false after 2000 milliseconds (2 seconds)
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching user info:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [walletAddress]);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = userData && userData.slice(indexOfFirstRecord, indexOfLastRecord);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const truncateAddress = (address) => {
        if (address.length > 10) {
            return address.slice(0, 6) + '...' + address.slice(-4);
        }
        return address;
    };

    // if (loading) {
    //     return <div style={{
    //         position: "fixed",
    //         top: "30%",
    //         left: "45%",
    //         transform: "translate(-50%, -50%)",
    //         background: "rgb(255 255 255)",
    //         zIndex: 999999,
    //         width: "100%",
    //         height:"1000px"
    //     }}> <img src={Loader} alt="Loader" className="loderIMGE" />;
    //     </div>
    // }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="content">
            <div className='table_title'>
                <div className="dashbord_connect_btn">
                    <div className="dashbord_connect_btn_left">
                        <h3>Withdrawal List</h3>
                        <p>see your account information in here!</p>
                    </div>

                    <div className="dashbord_connect_btn_right">
                        {/* <ConnectWallet /> */}
                    </div>
                </div>
            </div>
            <div className='table_section'>
                {userData && userData.length > 0 ? (
                    <React.Fragment>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Wallet address</th>
                                    <th>Amount</th>
                                    <th>Date & time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords.map((user, index) => (
                                    <tr key={index}>
                                        <td>{indexOfFirstRecord + index + 1}</td>
                                        <td>{truncateAddress(user.walletAddress)}</td>
                                        <td>${user.amount}</td>
                                        <td>{new Date(user.createdAt).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='pagination_section_table'>
                            {/* Pagination */}
                            <ul className="pagination">
                                {Array.from({ length: Math.ceil(userData.length / recordsPerPage) }, (_, i) => (
                                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                        <button onClick={() => paginate(i + 1)} className="page-link">{i + 1}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </React.Fragment>
                ) : (

                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}

export default WithdrawalList; // Export component with uppercase name
