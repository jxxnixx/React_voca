import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();

    function onSubmit(e) {
        e.preventDefault();   // 저장 버튼을 눌러도 새로고침되지 않음!

        fetch(`http://localhost:3001/words/`, {
            method : "POST",
            headers : {
                "Content-Type": "application/json", 
            },
            body : JSON.stringify({ 
                day : dayRef.current.value, 
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false,
            }),
        }).then(res => {
            if(res.ok) {
                alert('생성이 완료되었습니다.');
                history.push(`/day/${dayRef.current.value}`); // 해당 페이지로 이등. Link To 처럼 a태그 이용 없이 페이지 전환에 용이
            }
        });
    }

    const engRef = useRef(null);  // Dom에 접근할 수 있게 해줌. 스크롤 위치 확인이나 포커스에 사용 가능
    const korRef = useRef(null);
    const dayRef = useRef(null);
// 저장 버튼을 클릭하는 시점은, 렌더링 결과가 돔에 반영된 이후임.

    return (
        <form onSubmit = {onSubmit}>
            <div className = "input_area">
                <label> Eng </label>
                <input type = "text" placeholder = "computer" ref = {engRef} />
            </div>
            <div className = "input_area">
                <label> Kor </label>
                <input type = "text" placeholder = "컴퓨터" ref = {korRef} />
            </div>
            <div className = "input_area">
                <label> Day </label>
                <select ref = {dayRef} >
                    {days.map(day => (
                        <option key = {day.id} value = {day.day}>
                        {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}

//15강 2:00부터~