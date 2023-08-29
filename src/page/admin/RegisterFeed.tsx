import { useRef } from "react";
import { Container } from "./RegisterFeed.styled";
import dayjs from 'dayjs';
import { Select, Button, DatePicker, Space, TimePicker, Input } from 'antd';
import type { DatePickerProps } from 'antd';
const format = 'HH:mm';
const { TextArea } = Input;

const RegisterFeed = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const onClickSelectImageButton = () => {
        inputRef.current && inputRef.current.click();
    }
    const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return <Container>
        <Space wrap style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
            <Select
                defaultValue="구분"
                style={{ width: 90 }}

                options={
                [
                    { value: '셋팅', label: '셋팅' },
                    { value: '대회', label: '대회' },
                    { value: '신규오픈', label: '신규오픈' },
                    { value: '대관', label: '대관' },
                    { value: '행사', label: '행사' },
                ]
            }
            />
            <Select
                defaultValue="암장명"
                style={{ width: 90 }}
                options={
                    [
                        { value: '더클라임', label: '더클라임' },
                        { value: '더플라스틱', label: '더플라스틱' },
                        { value: '락트리', label: '락트리' },
                        { value: '서울볼더스', label: '서울볼더스' },
                        { value: '손상원 클라이밍', label: '손상원 클라이밍' },
                    ]
                }
            />
            <Select
                defaultValue="지점"
                style={{ width: 90 }}
                    options={
                    [
                { value: '강남', label: '강남' },
                { value: '마곡', label: '마곡' },
                { value: '서울대', label: '서울대' },
                { value: '신림', label: '신림' },
                { value: '양재', label: '양재' },
                    ]
            }
            />
        </Space>
        <section style={{ marginBottom: '30px'}}>
        <Button style={{ width: '100%', height: '40vh', maxHeight: '350px' }} onClick={onClickSelectImageButton} ></Button>
            <input type="file" ref={inputRef} style={{ display: 'none'}} />
        </section>
        <section style={{ marginBottom: '20px' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px'}}>
                <span style={{ fontSize: '12px'}}>시작</span>
                <DatePicker onChange={onChangeDatePicker} />
                <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px'}}>
                <span style={{ fontSize: '12px'}}>종료</span>
                <DatePicker onChange={onChangeDatePicker} />
                <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
            </div>
        </section>
        <section>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', marginBottom: '10px'}}>
            <span style={{ minWidth: '25px'}}>대상</span><Input />
            </div>
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <span style={{ minWidth: '25px'}}>내용</span><TextArea style={{ height: 100 }}/>
            </div>

        </section>
    </Container>;
}

export default RegisterFeed;