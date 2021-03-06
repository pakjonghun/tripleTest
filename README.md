# Frontend Homework #3

TRIPLE 프론트앤드 과제 입니다.

## 프로젝트 실행 방법

프로젝트를 클론 받습니다.

```
git clone https://github.com/pakjonghun/tripleTest
```

클론받은 폴더로 이동하여 필요한 모듈을 설치합니다.

```
cd tripleTest
npm install
```

빌드 없이 프로젝트를 실행 시킬 경우 아래 스크립트를 실행합니다.

```
npm run start
```

빌드를 한 후 프로젝트를 실행 할 경우 아래 순서대로 진행합니다.
먼저 프로젝트를 빌드합니다.

```
npm run build
```

아래 스크립트를 입력하여 프로젝트를 실행합니다.

```
npm run start:prod
```

최신크롬 브라우저를 실행 한 후 아래 주소를 입력합니다.

```
http://localhost:3000
```

## 사용한 기술과 선택한 이유

- typescript : 타입을 미리 정하여 실수를 방지하고, 데이터의 구조를 파악하기 쉽게 하기 위함입니다.
- react : 과제 요구사항을 충족하기 위함입니다.
- eslint-config-triple : 과제 요구사항을 충족하기 위함입니다.

## 과제를 진행하면서 느낀점

- @titicaca/eslint-config-triple 를 사용하면서 정말 편하다고 생각을 많이 했습니다. 감사합니다.
  - 맨 마지막에 ; 가 모두 없어지니까 코드가 한결 깨끗해 진 것 같아서 좋았습니다.
  - lint 설정을 빠르게 끝낼 수 있어서 좋았습니다.
- 과제를 설명하는 pdf 파일을 상세하게 잘 적어주셔서 진행하는데 도움을 많이 받았습니다. 감사합니다.
  - 애니메이션 명세를 읽어보고, gif 파일을 보고나서 무엇을 구현해야 할지 인지 하는데 도움을 많이 받았습니다.

## 노력한 점

- 네이밍을 하는데 단어 스페링이 길어지더라도 모두 적어서 의미가 애매하지 않게끔 노력했습니다.
  - 최대한 과제에 적힌 그대로 네이밍을 하려고 노력했습니다.
- 나중에 컴포넌트나 훅을 다시 사용 하려고 하거나 쪼개려고 할때를 고려해서 작성해 보았습니다.
  - useIncrementTimeout 훅 에서 다음에 더해야 하는 숫자를 구하는 함수를 순수함수로 쪼개기 등등
- css 속성은 최대한 순서를 지켜서 작성했고 공통으로 사용되는 값은 styles.css 에 root에 별도로 보았습니다.
- 지표 숫자가 올라가는 애니메이션을 구현하면서 지표 뒤에 글자가 흔들리는 모습이 보여서 안흔들리게 수정 해 보았습니다.
