import s from './Loader.module.css'
import {ReactComponent as MySpinner} from "./Spinner-1s-200px.svg";


// export const Loader = () =>
// 	<>
// 		<div className={s.loader}>
// 			test
// 		</div>
// 	</>


export const Loader = () =>	<MySpinner className={s.loader}/>

