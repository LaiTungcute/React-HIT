import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../App';

/**
 * useeffect(): Chức năng chính là call API
   useEffect(callback, [dependency]): useEffect chạy khi dependency thay đổi
   useEffect(callback, []): useEffect chạy duy nhất 1 lần
   useEffect(callback): useEffect luôn luôn chạy
   
 * useRef: lưu giá trị tham chiếu bên ngoài
 * useConText(): lưu trữ dữ liệu và có thể truyền cho các component khác được bao hàm trong provider mà ko cần dùng props
 */

//setTimeOut(callback, n): gọi callback sau khoảng thời gian n(ms)
//clearTimeOut(): hủy setTimeOut
//setInterVal(callback, n): gọi callback sau mỗi khoảng n(ms)
// clearInterval(): hủy setInterVal
const Hooks = () => {
    const [post, setPost] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respont => respont.json())
        .then(json => setPost(json))
    }, [])

    const [count, setCount] = useState(60);
    const timeId = useRef();
    function handleStart() {
        timeId.current = setInterval(() => setCount(count =>{
            if(count>0) return --count;
            else return count;
        }), 1000);
    }
    function handleStop() {
        clearInterval(timeId.current);
    }

    const userName = useContext(userContext);
  return (
    <div>
        {post && (
            post.map(
                (item, index) => (
                    <ul>
                        <li key={index}>{item.id}</li>
                    </ul>
                )
            )
        )}

        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <h1>{userName}</h1>
    </div>
  )
}

export default Hooks