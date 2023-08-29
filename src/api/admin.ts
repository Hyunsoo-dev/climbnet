import axios from "axios";

// 암장 정보 생성
export const makeClimingGround  = async (param:any): Promise<any> => {
    try {
        return await axios.post('https://www.climbnet.co.kr/api/place', param, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        return error;
    }

}

// 암장 정보 검색
export const searchClimingGround = async () => {
    try {
        return await axios.get('https://www.climbnet.co.kr/api/place')
    } catch (error) {
        return error;
    }
}

// 피드 생성
export const makeFeed = async (): Promise<any> => {

    try {
        return await axios.post('https://climbnet.co.kr/api/feed', {}, {})
    } catch (error) {
        return error
    }

}


// 피드 검색
export const getFeed = async (pageNumber: number): Promise<any> => {
    try {
        return await axios.get(`https://www.climbnet.co.kr/api/feed?page=${pageNumber}`);
    } catch (error) {
        return error;
    }
}

// 피드 사진 다운로드
export const getFeedImage = async (param:any):Promise<any> =>  {
    const { feedId, fileId } = param;
    try {
        return await axios.get(`https://www.climbnet.co.kr/api/feed/${feedId}/file/${fileId}`)
    } catch (error) {
        return error;
    }
}