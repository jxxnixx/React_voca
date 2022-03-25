import { useState } from "react";

export default function Word({word : w}) { // 새로운 변수 w로 할당 가능
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone() { // 체크박스 저장 여부
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : "PUT",
            headers : {
                "Content-Type": "application/json", //content-type : 보내는 리소스의 타입.
            },
            body : JSON.stringify({ 
                // body : PUT의 수정을 위한 정보
                // Json의 문자열 형식으로 변환
                ...word,
                isDone : !isDone,
            }),
        }).then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() { // 단어 삭제
        if(window.confirm("삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE',
                // 삭제는 특별히 어떤 정보를 넘겨 줄 필요가 없으므로 여기까지만 작성하면 됨
                // 그런데 여기까지 하면 실제 단어는 지워지나 페이지에 바로 반영되지 않음.
                // 새로고침을 해야 화면에 반영됨
            }).then(res => {
                if(res.ok){ // 삭제를 하면
                    setWord({id:0}); //word의 id를 0으로 바꿔줌
                }
            });
        }
    }

    if(word.id === 0) {
        return null;
    }

    return (
        <tr className = {isDone ? "off" : ""}>
            <td>
                <input type = "checkbox" checked = {isDone}
                onChange = {toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick = {toggleShow}>
                    뜻 {isShow ? "숨기기" : "보기"} </button>
                <button onClick = {del} className = "btn_del">
                    삭제</button>
            </td>
        </tr>
    );
}

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

/*
export default function Word(props) {
    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
*/