import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000", // 기본 서버 주소 입력
});

// Test 용
export const requestPost = async (pageNumber: number): Promise<any> => {
  return await customAxios.get(`/${pageNumber}`);
};

export const requestFilterPost = async (type: string): Promise<any> => {
  return await customAxios.get(`/${type}`);
};
