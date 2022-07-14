## 1일차

nodeJS, express, babel, nodemon 설치와 설명을 배웠음

nodeJS - 자바스크립트를 웹브라우져 밖에서 사용하게 해주는 프로그램 그러니깐 서버에서 JS가 작동되도록 해주는 런타임 환경

express - nodeJS의 음.. 도우미? express를 사용하여 더 쉽게 서버를 구성할수있게 해줌

babel - 최신 스크립트를 사용하기위한 'devDependency' 자동으로 어디서나 작동할수있게 컴파일해줌

nodemon - 원래는 node서버를 이용하면서 계속 껐다 켰다 해야지만 변화를 볼 수 있지만 nodemon을 사용하게되면 소스를 변경하면 자동으로 감지해서 자동으로 서버를 재시작해줌

dependencies란 프로젝트가 돌아가기 위해 필요한 package들

npm init으로 쉽게 package.json 만들수있음
특정칸에 넣으면 npm으로 실행할수있음 scripts칸이나 dependencies같은
package.json 에 있는 dependency에 써놓으면 npm i 만 쳐도 dependency에 있는 파일들?
자동으로 다운받아줌

## 2일차

서버 연결하는법 request에 대해 어떻게 response 하는지
미들웨어의 의미 req와 res의 중간에 있다

브라우저가 req한다음, 그리고 서버가 응답하기 전 그사이에 middleware가 있다.
사실 모든 middleware는 handler고 모든 handler는 middleware다 handler = controller
function(req, res, next) next => 다음함수 호출

예를 들어 app.get("/", a, b) a함수에 next()가 있으면 다음 함수인 b의 함수를 실행시킴

app.use() 모든 route에서 실행함 'global middleware' 대신 순서가 중요하다.
