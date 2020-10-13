# Log Management WEB(구현중)

## 프로젝트 배경

- Android 개발 중, 발생하는 ERROR를 관리하기 위한 프로젝트 입니다.
- Android studio에서 ADB를 사용하여 Log를 local에 출력한 후, WEB이 읽어서 파싱합니다.

## 프로젝트 정보

1. Android에서 Logcat 파일을 ADB를 이용해 local로 출력합니다.(기본 값 : 바탕화면)
2. 본 프로젝트의 웹에서 logcat 파일을 읽어서 WEB에 치명도 순으로 출력해 줍니다.
3. 해당 Error를 해결할 수 있는 Android Developers 사이트에 연결해주는 기능이 있습니다.

## Task Queue

- 크롤링을 이용하여 모든 예외를 받아오고 레퍼런스와 연결해야 함

## Tech Skills

- HTML/CSS
- Javascript
- Node.JS
