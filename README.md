# 투빅스 모델배포 강의 실습 & 과제

- 투빅스 16기 정규세션 '모델배포' 강의를 위한 실습 & 과제 파일입니다.
- 이 레포지토리를 사용해서 과제를 수행해 주시면 감사하겠습니다.


## 과제
- (필수과제) 아래 제시된 파일들에 주석을 달아 주세요
  - `backend/server.py`, `backend/model/model.py`
  - 집중해서 볼 키워드는 `Flask`, `POST`, `router`, `POST`, `JSON`
  - 여유가 된다면 `frontend/src/components/Page.js`의 `handleSubmit()` 함수도 같이 봐 보세요.
- (선택과제) 코드를 수정하여 여러분 만의 모델을 직접 만들어 보세요
  - 로컬 서버에서 서로간에 데이터 전송이 가능하면 오케이입니다.
  - 여유가 된다면 클라우드 서버에도 한번 배포해 보세요.

## 시작 방법

1. 레포지토리 클론

- 다음 레포지토리를 클론합니다.
    ~~~
    git clone https://github.com/YMGYM/tobigs_modelDeploy_assignment.git
    ~~~

2. 백엔드 실행
   

- 백엔드 폴더로 이동합니다.
    ```
    cd backend
    ```

- 백엔드 서버 실행에 필요한 패키지를 설치합니다.

    ```
    pip install flask flask-cors
    ```

- 백엔드 서버를 실행합니다.
    ``` 
    python server.py
    ```
3. 프론트엔드 실행

- 프론트엔드 폴더로 이동합니다.
  ```
  cd frontend
  ``` 

- 프론트엔드 서버를 실행합니다. (node.js가 필요합니다.)
  ```
  npm start
  ```


## API 사양
현재 API는 다음과 같은 통신을 수행합니다.

### 상태 체크
- GET `/`
- 요청 파라미터
    |name|type|description|
    |:---:|:---:|:---:|
- 응답 파라미터
    |name|type|description|
    |:---:|:---:|:---:|
    |message|string|서버가 정상적으로 동작한다면 'Status is OK.' 가 반환됩니다.|


### 모델 요청
- POST `/predict`
- 요청 파라미터
    |name|type|description|
    |:---:|:---:|:---:|
    |height|int|예측 대상자의 키|
    |weight|int|예측 대상자의 몸무게|
- 응답 파라미터
    |name|type|description|
    |:---:|:---:|:---:|
    |message|string|서버가 정상적으로 동작한다면 'Succefully Predicted' 가 반환됩니다.|
    |result|string|비만 정도가 반환됩니다.|


    
## 기타
- 본 레포지토리는 투빅스 활동 등 모델 데모 용도로 자유롭게 수정, 사용하셔도 좋습니다.
- 본 레포지토리는 강의 중 실습 시연 용도로 작성되었기 때문에 완벽한 기능 동작을 보장하지 않습니다.
- 본 레포지토리는 서버 보안을 신경쓰지 않고 제작되었습니다. 실제 배포시는 보안 부분을 조금 더 신경쓸 필요가 있습니다.