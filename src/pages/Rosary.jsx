
import { useEffect, useState } from 'react';
import firebase from './../firebase/config';
import { useParams } from 'react-router-dom';
import { Button, Form, Input, Tag } from 'antd';

const customizeRequiredMark = (label, { required }) => (
    <>
        {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
        {label}
    </>
);

const Rosary = () => {
    const { token } = useParams();
    const [rosaries, setRosaries] = useState(null);
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const fetchRosaryData = async () => {
        try {
            if (token) {
                const snapshot = await firebase.firestore().collection('rosary').doc(token).get();
                const allDocs = snapshot.data();

                setRosaries(allDocs);
                console.log(allDocs);
            } else {
                console.log('Token is undefined');
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchRosaryData();
    }, [token]);

    const handleFormSubmit = async (values) => {
        try {
            if (token) {
                await firebase.firestore().collection('rosary').doc(token).set({
                    name: rosaries.name,
                    decades: parseInt(rosaries.decades) + parseInt(values.decades),
                    zone: rosaries.zone,
                    location: rosaries.location,
                    users: [
                        ...rosaries.users,
                        {
                            name: values.name,
                            decades: values.decades,
                        }
                    ]
                });

                fetchRosaryData();
            } else {
                console.log('Token is undefined');
            }
        } catch (err) {
            console.error(err);
        }
    };
};

export default Rosary;

