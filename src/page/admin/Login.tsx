import { Button, Checkbox, Form, Input } from 'antd';
import { Container } from "./Login.styled"
import { useNavigate } from "react-router-dom";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};


const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const { username, password } = values;
        if (username === 'test' && password === '1234') {
            navigate('/registerClimingGround')
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Container>
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            {/*<Form.Item<FieldType>*/}
            {/*    name="remember"*/}
            {/*    valuePropName="checked"*/}
            {/*    wrapperCol={{ offset: 8, span: 16 }}*/}
            {/*>*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}

            {/*<Form.Item wrapperCol={{ offset: 8, span: 16 }}>*/}
                <section style={{ marginTop: '50px'}}>
                    <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
                        Submit
                    </Button>
                </section>
            {/*</Form.Item>*/}
        </Form>
    </Container>
    )
}

export default Login;