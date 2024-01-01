import { useEffect, useState } from 'react';
import firebase from './../firebase/config';
import { useParams } from 'react-router-dom';

const Rosary = () => {
    const { token } = useParams();
    const [rosaries, setRosaries] = useState(null);

    useEffect(() => {
        const fetchRosaryData = async () => {
            try {
                if (token) {
                    const snapshot = await firebase.firestore().collection('rosary').doc(token).get();
                    const allDocs = snapshot.data();

                    setRosaries(allDocs);
                    console.log(allDocs);
                } else {
                    console.log("Token is undefined");
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchRosaryData();
    }, [token]);
    return (
        <>
            <div className="form">
                <h1>Save Data to Firebase Firestore</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" />
                    <button type="submit">Save</button>
                </form>
            </div>
            <div className="data">
                <h2>Stored Values</h2>
                {rosaries === null ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        <li>name: {rosaries?.name}, id: {token}</li>
                    </ul>
                )}

                <h1>Rosary:</h1>
                <h3>Zone:</h3>
                <h3>Location:</h3>
                <ul>
                    <li>lat: long:</li>
                </ul>
            </div>
        </>
    );
}

export default Rosary;