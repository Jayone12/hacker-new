# Hacker news

해당 프로젝트는 패스트 캠퍼스의 미니 프로젝트로 진행된 내용입니다.
리액트로 만든 hacker news 입니다.  
디자이너 3명이 기획하고 디자인한 내용을 토대로 제작하였습니다.

## 프로젝트 내용

해커 뉴스의 API를 사용하여 디자인에 맞게 제작한 Hacker-news 모바일 버전입니다.

## 프로젝트 실행

해당 파일 다운로드 한 후

```bash
npm i
```

```bash
npm start
```

## 사용 기술

- react
- styled-components
- react-router-dom
- react-slick
- axios
- react-query
- typescript
- react-icons

## 사용 API

- [해커뉴스 api](https://github.com/HackerNews/API)

## 개발 내용

1. VAC 패턴을 사용하여 비즈니스 로직과 view 구분. 
VAC 패턴으로 비즈니스 로직을 관리하는 컴포넌트에서 props를 객체화 하여 렌더링에 필요한 view 컴포넌트에 전달하는 방식으로 작성하였습니다.

2. react-query를 사용하여 api 데이터 관리.  
<img src="https://user-images.githubusercontent.com/53748573/195977223-0f07ee0b-e54a-45d4-9b8e-b58625759852.gif" width="213px"/>

- 데이터를 캐싱하여 data refetching을 감소.  
![화면_기록_2022-10-15_오후_5_19_01_AdobeExpress](https://user-images.githubusercontent.com/53748573/196071426-5a7b627a-f9d9-4838-b93b-62c2a1212d30.gif)

3. react-slick을 사용하여 슬라이드 구현.  
![화면_기록_2022-10-17_오전_10_42_31_AdobeExpress](https://user-images.githubusercontent.com/53748573/196074608-edec9bb4-ebc3-469c-acfc-744f60295e33.gif)

- custom hook으로 list pagination 구현
- styled-components를 사용하여 style 및 darkmode 구현
- api data 호출 동안 skeleton 노출
