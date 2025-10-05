import style from './jogos.module.css'
import { games } from '../assets/games'
import LinkButton from './LinkButton'

export default function Jogos(){
    const gameslist = games.map(jogo =>
        <div className={style.card} key={jogo.id}>
            <img 
            className={style.capa}
            src={jogo.coverImage} 
            alt={jogo.title} />
            <div className={style.textContainer}>
            <h2 className={style.titulo}>{jogo.title}({jogo.releaseYear})</h2>
            <p className={style.descricao}>{jogo.description}</p>
            <LinkButton href={'https://www.google.com/search?q=' + jogo.title}>Saiba Mais</LinkButton>
            </div>
        </div>
    )

    return (
        <ul className={style.list}>{gameslist}</ul>
    )
}