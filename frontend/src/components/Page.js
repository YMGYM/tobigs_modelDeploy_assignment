import React, {useState} from 'react';
import axios from 'axios';

const Page = () => {

    // 페이지에 사용되는 키, 몸무게, 예측값 변수 설정
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [predict, setPredict] = useState(null);

    // 이벤트 발생 시 변수를 업데이트 하는 함수들
    const handleHeightChange = (e)=>{
        setHeight(e.target.value);
    }
    
    const handleWeightChange = (e)=>{
        setWeight(e.target.value);
    }


    // 버튼을 눌렀을 때 실행되는 함수
    // (보너스 과제) : 이 함수를 해석해 보세요
    const handleSubmit = (e) =>{
        axios.post("http://127.0.0.1:5000/predict", {'height': height, 'weight': weight}, {}).then(res =>{
            console.log("예측 성공!!");
            console.log(res);
            setPredict(res.data.result);
        }).catch(err => {
            console.log("error occured!");
            console.log(err);
        })
    }

    
    // JSX(HTML)을 반환합니다
    return (
        <div>
            <h1>투빅스 15&16 모델배포 강의 실습 페이지</h1>
            <h3>키와 몸무게를 입력해 주세요</h3>

            <label>
                키 :
                <input type='number' min="0" max="200" value={height} onChange={handleHeightChange} name="height" />
            </label>
            <br/>
            <label>
                몸무게 : 
                <input type='number' min="0" max="200" value={weight} onChange={handleWeightChange} name="weight" />
            </label>

            <br/>
            <button onClick={handleSubmit}>여기를 누르시면 모델이 예측을 실행합니다.</button>

            <h3>예측 결과 : {predict}</h3>
        </div>
    );
}

export default Page;
