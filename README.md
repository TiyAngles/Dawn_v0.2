# 여명 프로젝트

프로젝트 관련내용 및 변경사항 등은 트렐로와 이 파일에 작성해 주세요.

---

## 주의 사항 및 공지

각자에게 부여된 데드라인 시간엄수는 필수 ( 급한일정이 생길시 미리 사전에 고지 ) - 3회 이상 작업진행이 안될시에는 제명조취하도록 하겠습니다.

---

## 여행 추천 사이트 - (사이트 이름 미정)

---

### 퍼블리싱

- 네이밍은 프로젝트 통합 네이밍에 기반해서 작성한다.
- 사이트맵을 참고하여 페이지 및 컨텐츠를 작성한다.
- 작업은 src폴더 내에 퍼블리싱 폴더에 작업한다.
- node-sass 컴파일러 설치시 디펜던시에 주의한다.
- 그 외에 root디렉토리나 다른 폴더에는 프로젝트의 전반적인 파일이 있음으로 수정하지 아니한다.
- 디자인 시안은 Design폴더에 업로드.
- 사이트맵 (프로토)
- 글쓰기 버튼 추가해주세요.
- 에디터 디자인 + 와이어프레임 추가해주세요

  1. 테마
     1. 기차
     1. 맛집
     1. 축제
     1. 엑티비티
     1. 데이트
  2. 지역
     1. 경기/수도권
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
    - [ ] 게시판 ,
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
- [ ] 와이어프레임으로 메인,서브 디자인 작업. -Sohyun
- [ ] 글쓰기 에디터 = 추천,문의하기 둘다 사용가능하게 와이어프레임 제작. -Sohyun
- [ ] 상세 페이지 = 댓글 리스트형식 (지도영역 밑으로 배치예정), 에디터 와이어프레임 수정. -Sohyun
- [ ] 서브 페이지 = 유저가 추천가능하게 글작성 영역 만들기 와이어프레임 수정. -Sohyun

---

### 이슈사항 리스트

- [x] 퍼블리싱 팀에서 추가적인 페이지 및 레이아웃 기획 필요. - Vins
- [x] 프론트분들 git pull을 통해서 리엑트를 로컬에 받아주시고 오류없는지 확인 부탁드립니다. - Vins
- [ ] 퍼블리싱팀 02.03 ~ 02.07 헤더구현된 메인,서브페이지 디자인작업 하실때 폭은 640고정에 이미지배치, 본인이 생각한 텍스트 작업 부탁 드리겠습니다. 폰트는 웹폰트로 하시되 배치시 그리드에 맞춰주시면 좋습니다. -Sohyun
- [ ] 마이페이지 Place 항목 -> 유저가 좋아요 누른게시물 카운팅으로 변경
- [ ] 소셜로그인
- [ ] 추가페이지 생성으로 와이어프레임 수정,추가. -Sohyun
- [x] 퍼블리싱 -> 시멘틱태그 사용
- [ ] 퍼블리싱 -> SCSS 사용하나요?
- [ ] relation 작성필요.

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