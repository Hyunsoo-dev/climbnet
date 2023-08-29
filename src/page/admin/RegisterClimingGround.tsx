import { Container } from "./RegisterClimingGround.styled";
import { useRef } from "react";
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { makeClimingGround } from "../../api/admin";
const { Option } = Select;


const RegisterClimingGround = () => {
    const formRef = useRef<FormInstance>(null);

    const onGenderChange = (value: string) => {
        switch (value) {
            case 'male':
                formRef.current?.setFieldsValue({ note: 'Hi, man!' });
                break;
            case 'female':
                formRef.current?.setFieldsValue({ note: 'Hi, lady!' });
                break;
            case 'other':
                formRef.current?.setFieldsValue({ note: 'Hi there!' });
                break;
            default:
                break;
        }
    };

    const onFinish = async (values: any) => {
        console.log(values);
          const response = await makeClimingGround(values);
          console.log('makeClimingGround response: ', response);
    };

    const onReset = () => {
        formRef.current?.resetFields();
    };

    const onFill = () => {
        formRef.current?.setFieldsValue({ place_name: '손상원 클라이밍', place_branch: '강남점', city: '서울시', district: '강남구', address: '블라블라', phone: '0212341234' });
    };

    return (
        <Container>
        <Form

            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
        >
            <Form.Item name="place_name" label="암장명" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="place_branch" label="암장 지점" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="city" label="도시" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>

                </Select>
            </Form.Item>
            <Form.Item name="district" label="지역구" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>

                </Select>
            </Form.Item>
            <Form.Item name="address" label="상세주소" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="phone" label="전화번호" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item style={{ marginTop: '100px', display: 'flex', gap: '10px'}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>
        </Container>
    );
}

export default RegisterClimingGround;