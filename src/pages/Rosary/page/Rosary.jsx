/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import firebase from '../../../firebase/config';
import { useParams } from 'react-router-dom';
import RosaryForm from '../../../Components/form/Form';
import { Form, message } from 'antd';
import styles from './Rosary.module.css';

import { Table, Tag } from 'antd';

const Rosary = () => {
    const { token } = useParams();
    const [rosaries, setRosaries] = useState(null);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const success = (res) => {
        messageApi.open({
            type: 'success',
            content: res,
        });
    };
    const error = (err) => {
        messageApi.open({
            type: 'error',
            content: err,
        });
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
            error();
        }
    };

    useEffect(() => {
        fetchRosaryData();
    }, [token]);

    const handleFormSubmit = async (values) => {
        try {
            if (!Object.keys(values).map((key) => values[key]).includes(undefined)) {
                console.log(values);
                await firebase.firestore().collection('rosary').doc(token).set({
                    name: rosaries.name,
                    decades: parseInt(rosaries.decades) + parseInt(values.decades),
                    zone: rosaries.zone,
                    locations: rosaries.locations,

                    users: Array.isArray(rosaries.users)
                        ? [...rosaries.users, { name: values.name, decades: values.decades }]
                        : [{ name: values.name, decades: values.decades }],
                });
                form.resetFields();
                success('Your prayer has been added');
                fetchRosaryData();
            } else {
                error('Please fill out all fields');
            }
        } catch (err) {
            console.error(err);
        }
    };


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Decades',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Location',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Zone',
            dataIndex: 'address',
            key: 'address',
        }
    ];
    console.log(rosaries?.users);
    const data = rosaries?.users.map((user) => ({
        key: user.name,
        name: user.name,
        age: user.decades,
        address: "rosaries.locations",
        tags: [rosaries.zone],
    }));



    return (
        <div className={styles.rosaryPage}>
            <div className={styles.section}>

                <h1>Mark <span>Your</span> <br /> Prayers</h1>
                {contextHolder}
                <RosaryForm form={form} handleFormSubmit={handleFormSubmit} />

            </div>

            <div className={`${styles.section} ${styles.section2}`}>

                <div className={styles.overlay}>
                </div>
                {rosaries === null ? (
                    <p>Loading...</p>
                ) : (
                    <div className={styles.rosaryDetails}>
                        <Table pagination={false} size={'small'} columns={columns} dataSource={data} />
                    </div>
                )}
                <h1>History
                    <span>of Your</span>
                    Rosary
                </h1>

            </div>

        </div>
    );
}

export default Rosary;

