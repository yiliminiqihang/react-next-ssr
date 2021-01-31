
import router from 'next/router'

export default function (props) {
    return (
        <div>
            Home
            <button onClick={()=>{
                router.push('/user')
            }}>user</button>
        </div>
    )
}