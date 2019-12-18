import axios from 'axios'; //package.json의 라이브러리를 들고올땐 따로 경로 지정을 안해도된다.

// 1. HTTP Request & Response와 관련된 기본 설정, 토큰 로직들도 추가
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`); // `` 이용하면 이렇게 연결 가능
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fethchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fethchUserInfo,
    fetchItemInfo,
    fetchList
}
