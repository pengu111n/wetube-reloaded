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

## 3일차

morgan이란 외부 middleware로써 nodeJS용 request middleware 전에 만들었던 logger같은 기능 = dev, combine = 시간 method http 브라우져 os등
common short tiny 등등
morgan("dev") import한후 이런식으로 쓰임

보통 우리가 사용하는 웹사이트들처럼 사용하기 위한것이 router라고 생각하면 될거같다. 라우터는 url을 그룹화하는 방법이다
default export 와 export의 차이 default export는 하나를 정해서 export해서 import할때 이름을 마음대로 정해도 되지만
함수 앞에 export를 붙이게 되면 있는 이름 그대로 import를 해야한다.

var로 선언한 변수와 함수 선언시 호이스팅이 일어난다. var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화한다.
호이스팅이란 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것을 말한다.
호이스팅이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다.
인터프리터란 코드를 한 줄씩 읽어 내려가며 실행하는 프로그램.대표적으로 파이썬,JS.
컴파일러와는 대조적 -> 컴파일이란 어떤 언어의 코드 전체를 다른 언어로 바꿔주는 과정이다. 그리고 이것을 자동으로 수행해주는 소프트웨어를 컴파일러라고 한다.
