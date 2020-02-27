# 여명 프로젝트

프로젝트 관련내용 및 변경사항 등은 트렐로와 이 파일에 작성해 주세요.

---

## 인원 목록

### 퍼블리셔팀

- 리더:
  - 민상: peter
  - 디자인팀장: 소현 - sohyun0

### 프론트팀

- 팀원:
  - 강동훈: kangdonghune
  - Woong: spacedawn96
  - peppermint100: peppermint100

### 백엔드

- 메인개발자
  - 예니: pyeeun

---

## 주의 사항 및 공지

각자에게 부여된 데드라인 시간엄수는 필수 ( 급한일정이 생길시 미리 사전에 고지 ) - 3회 이상 작업진행이 안될시에는 제명조취하도록 하겠습니다.

---

## 여행 추천 사이트 - Traveler

---

### 퍼블리싱

- 네이밍은 프로젝트 통합 네이밍에 기반해서 작성한다.
- 사이트맵을 참고하여 페이지 및 컨텐츠를 작성한다.
- 작업은 src폴더 내에 퍼블리싱 폴더에 작업한다.
- node-sass 컴파일러 설치시 디펜던시에 주의한다.
- 그 외에 root디렉토리나 다른 폴더에는 프로젝트의 전반적인 파일이 있음으로 수정하지 아니한다.
- 디자인 시안은 Design폴더에 업로드.
- 글쓰기 버튼 추가해주세요.
- 에디터 디자인 + 와이어프레임 추가해주세요
- 사이트맵 (프로토)

  1. 테마
     1. 기차
     1. 맛집
     1. 축제
     1. 엑티비티
     1. 데이트
  2. 지역
     1. 서울/경기
     1. 강원도
     1. 충청도
     1. 경상도
     1. 전라도
     1. 제주도
  3. 계절별
     1. 봄
     1. 여름
     1. 가을
     1. 겨울
  4. 문의하기

  - 로그인 / 로그아웃
  - 회원가입 / 마이페이지

---

### 디자인 영역

- Traveler 디자인시안은 design폴더안의 Traveler폴더에있습니다.

---

### 프론트

- 리엑트 및 기타 라이브러리, 플러그인등 사용시에는 미리 해당파일 or 트렐로에 안내 필요
- Node 모듈 설치시에 디펜던시 주의해서 작성할 것
- 스타일링은 styled-components를 사용
- ( 추가 내용은 상세 기획시에 해당 라인부터 추가 )
- Create React App 을 통해서 리엑트프로젝트 생성

### 백엔드

- Node.js Express GraphQL Prisma (배포는 미정)
- 패키지 설치시 의존성 및 json파일 확인
- 개발환경과 서버환경 구분해서 다운 필요 모듈 설치시에 디펜던시 주의해서 작성할 것 (프론트 공통사항)
- api 폴더 아래에는 .js, .graphql 포맷만 작성해 주세요!

  ***

  #### Functions

  - [ ] 유저생성
    - [ ] 유저모델 필수데이터
    - [ ] 추가데이터 팔로우, 팔로윙 등
    - [ ] 게시판
  - [ ] 로그인 로그아웃
  - [ ] 댓글은 리얼타임
  - [ ] Place 항목은 -> 좋아요한 갯수?

#### 데이터 모델

```
User {
  id: ID! @id
  password: String! @unique
  avatar: String
  username: String! @unique
  email: String! @unique
  gender: String!
  firstName: String! @default(value:'')
  lastName: String!
  status: String //상태메세지
  follower: [User] @relation(name:'FollowRelation')
  following: [User] @relation(name:'FollowRelation')
}

Post {
  id: ID! @id
  description: String!
  user: User! //relation
  file: [File!]! //relation
  location: String!
  like: [Like!]! //relation
  likeStatus: Boolean!
  likeCount: Int!
  comment: [Comment!]! //relation
}

Comment {
  id: ID! @id
  text: String!
  user: User! //relation
  post: Post! //relation
}

Like {
  id: ID! @id
  user: User! //relation
  post: Post! //relation
}

File {
  id: ID! @id
  url: String!
  post: Post! //relation
}

Chat {
  id: ID! @id
  member: [User!]!
  message: [Message!]!
}

Message {
  id: ID! @id
  text: String!
  sender: User! //relation
  receiver: User! //relation
}
```

### 공통사항

- git은 절대 마스터에 푸쉬하지않습니다. 각자 브랜치 생성후 작업 후 브랜치에 푸쉬 및 Pull Request 작성
- git에 공유하면 안되는 파일 및 폴더, 정보등은 .gitignore에 추가 및 주석 필수
- 새로운 작업시 마스터 브랜치에서 pull 하여 변경사항을 머지후에 작업 ( 브랜치 작업 )

---

### 작업리스트

- [x] 페이지 레이아웃 파악을 위한 PC 시안 벤치마킹. - Sohyun
- [x] 페이지 구성을 위한 와이어프레임 작성. - Sohyun
- [x] 와이어프레임 통합 문서작성 Mobile , PC v0.3 - Sohyun
- [x] 해당 와이어 프레임으로 메인 html, css 작업. -Sohyun
- [ ] Create React App init.
- [x] 와이어프레임으로 메인,서브 디자인 작업. -Sohyun
- [x] 글쓰기 에디터 = 추천,문의하기 둘다 사용가능하게 와이어프레임 제작. -Sohyun
- [ ] 서브 페이지 = 유저가 추천가능하게 글작성 영역 만들기 와이어프레임 수정. -Sohyun
- [x] 게시판 와이어프레임 작성 -kangdonghune
- [x] 메인,서브,게시판,경고창 디자인 제작. -Sohyun
- [x] 에디터,댓글창 벤치마킹. -Sohyun
- [x] Alert 디자인 작업. - hwabin //20-02-09
- [x] 문의게시판 디자인 작업. - hwabin //20-02-09
- [0] ~02.12 디자인 가이드 제작 -hwabin
- [x] ~02.15 로고 제작 -hwabin 보류
- [x] ~02.15 디자인 psd파일 제작 메인,서브,알럿 디자인, 헤더,푸터,지앤비포함 - Sohyun
- [0] 퍼블리싱 기획,디자인,퍼블리싱 1차 -Minsang
- [x] ~02.18메인, 서브, 헤더, 푸터, 지앤비, 검색바, 문의페이지, 문의글페이지, 마이페이지, 로그인페이지, 알럿 -1차디자인 -Sohyun
- [x] 서브페이지 html.css파일작성-Sohyun
- [x] ~02.25 1차디자인 수정, 디자인 psd 제작 -Sohyun
- [x] ~02.27 전체페이지 디자인psd제작,로고제작 -Sohyun
- [ ] 서브페이지 퍼블리싱 수정 -Sohyun

---

### 이슈사항 리스트

- [x] 퍼블리싱 팀에서 추가적인 페이지 및 레이아웃 기획 필요. - Vins
- [x] 프론트분들 git pull을 통해서 리엑트를 로컬에 받아주시고 오류없는지 확인 부탁드립니다. - Vins
- [x] 퍼블리싱팀 02.03 ~ 02.07 헤더구현된 메인,서브페이지 디자인작업 하실때 폭은 640고정에 이미지배치, 본인이 생각한 텍스트 작업 부탁 드리겠습니다. 폰트는 웹폰트로 하시되 psd파일로 만들어주세요. -Sohyun
- [x] 마이페이지 Place 항목 -> 유저가 좋아요 누른게시물 카운팅으로 변경
- [ ] 소셜로그인
- [x] 추가페이지 생성으로 와이어프레임 수정,추가. -Sohyun
- [x] 퍼블리싱 -> 시멘틱태그 사용
- [ ] 퍼블리싱 -> SCSS 사용하나요?
- [ ] relation 작성필요.
- [x] ~~02.12 구글드라이브 디자인가이드 제작~~
- [x] ~02.27 전체페이지 디자인psd제작,로고제작 -Sohyun
- [ ] 로그인,회원가입 마크업, 기본 html 파일 제작 -민상
- [ ] 공통퍼블리싱 기준으로 퍼블리싱파일 수정 -Sohyun

---

#### 수정사항 LOG

- 2020 01 22 프로젝트 레포지토리 생성 및 README 파일 작성.
- 2020 01 23 프로젝트 퍼블리싱 메뉴 기획 프로토 작성.
- 2020 01 29 프로젝트 퍼블리싱 레이아웃 벤치마킹과 와이어 프레임 작성.
- 2020 01 30 퍼블리싱 Node Sass Dev Dependencies로 설치.
- 2020 01 31 와이어 프레임 html, css작업.
- 2020 02 01 Create React App init.
- 2020 02 01 와이어 프레임 통합 문서작성 v0.3.
- 2020 02 02 소현 프로토 업로드.
- 2020 02 03 와이어프레임으로 디자인 작업
- 2020 02 05 추가페이지 생성으로 와이어프레임 수정,추가.
- 2020 02 07 데이터 모델 추가
- 2020 02 07 메인,서브,게시판 디자인 제작
- 2020 02 09 경고창 디자인 제작
- 2020 02 09 게시판 세부사항 벤치마킹
- 2020 02 18 디자인 중간점검
- 2020 02 19 디자인 기본정보 README에 업데이트.
- 2020 02 24 공통 html 파일 작성 header,footer (반응형 제작) (민상
- 2020 02 25 공통 html 파일 수정 header,footer (내용 및 코드 수정), 메인페이지 마크업 작성, style.css 파일 분리(민상
- 2020 02 26 메인페이지 마크업 수정 및 css 파일 작성, 모바일 페이지 완성 반응형으로 변경 중 (민상
- 2020 02 27 전체페이지 디자인 완성
