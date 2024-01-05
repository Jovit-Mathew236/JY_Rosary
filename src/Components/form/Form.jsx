/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Form, Input, Tag } from 'antd';
import styles from './Form.module.css';

const RosaryForm = ({
    form,
    handleFormSubmit
}) => {
    const customizeRequiredMark = (label, { required }) => (
        <>
            {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
            {label}
        </>
    );
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    return (
        <div className={styles.formSection}>
            <Form
                form={form}  // Corrected to use 'form'
                layout="vertical"
                initialValues={{
                    requiredMarkValue: requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
                onFinish={handleFormSubmit}
            >
                <Form.Item label="Name" name="name" required tooltip="This is a required field">
                    <Input placeholder="Full name" />
                </Form.Item>
                <Form.Item
                    label="Decades"
                    name="decades"
                    required
                    tooltip={{
                        title: 'Tooltip with customize icon',
                    }}
                >
                    <Input placeholder="Decades" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RosaryForm;
