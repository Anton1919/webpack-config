import {useState} from "react";
import s from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Png from '@/assets/ping.png'
import Inst from '@/assets/Instagram_black.svg'

export const App = () => {
    const [count, setCount] = useState(0)

    const incr = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <div>
                <img width={100} height={100} src={Png} alt="png"/>
            </div>

            <div>
               <Inst width={150} height={150} fill={'red'} stroke={'red'} />
            </div>

            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>

            <h1>Count: {count}</h1>
            <button className={s.button} onClick={incr}>incr</button>

            <Outlet />
        </div>
    );
};
