// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"
import { Body } from "../../components/Body"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { decrement, increment, RootState, useDispatch, useSelector } from "../../context/pangolinContext";
// import { decrement, increment } from "../../redux/stoke"
// import { RootState } from "../../redux"
// import { useAppDispatch } from "../../redux/hooks"//////

export const PageTwo = () => {
    const dispatch = useDispatch();
    const stock = useSelector((state: RootState) => state.stock)
    // const stockk = useSelector((state: RootState) => state)
    console.log('One', stock)
    // console.log('Two', stockk)
    // console.log('dispatch', dispatch(increment()))

    return (
        <div>
            <p>{stock.counter}</p>
            <button onClick={() => dispatch(increment())}>sum +</button>
            <button onClick={() => dispatch(decrement())}>sub - </button>
        </div>
    )
}