import { useEffect } from 'react';
import '../firebase'
import { getFirestore, addDoc, collection, getDoc } from "firebase/firestore"
import { useParams } from 'react-router-dom';
const Rosary = () => {
    const { token } = useParams()
    const db = getFirestore();
    
    //fetch
    const fetchData = async () => {
      try {
        const rosariesCollection = collection(db, 'rosaries');
        const snapshot = await getDocs(rosariesCollection);

        const data = [];
        snapshot.forEach((doc) => {
          // Assuming your Firestore document has fields named field1 and field2
          const { decades, location, zone, name } = doc.data();
          data.push({
            decades,
            location,
            zone,
            name,
          });
        });

        setStoredValues(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    
    //used for url parameter 
 
    useEffect(() => {
        fetchData()
    }, [token])

    return (
        <>
            {/* <div className="form">
                <h1>Save Data to Firebase Firestore</h1>
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                />
                <input
                    type="text"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                />
                <button onClick={saveDataToFirestore}>Save to Firestore</button>
            </div>*/}
            <div className="data">
                <h2>Stored Values</h2>
                <ul>
                    {storedValues.map((value, index) => (
                        <li key={index}>
                            Field1: {value.zone}, Field2: {value.name}
                        </li>
                    ))}
                </ul>
                
                <h1>Rosary:</h1>
                <h3>Zone:</h3>
                <h3>Location:</h3>
                <ul>
                    <li>lat: long:</li>
                </ul>
            </div>
ijk
        </>
    );
}

export default Rosary;