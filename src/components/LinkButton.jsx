import style from './jogos.module.css'

export default function LinkButton(props) {
    return(
        <a 
        className={style.button}
        href={props.href}
        target='_blank'
        >
            {props.children}
        </a>
    )
}