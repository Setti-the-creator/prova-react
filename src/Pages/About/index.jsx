import './styles.css'

export default function About(){
    return(
        <div id="about">
            <img class="imagem" width={220} height={300} src="//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/220px-Chuck_Norris_May_2015.jpg"/>
            <section id="sessao">
                <h2 id="subtitulo-about">Sobre o Chuck Norris</h2>
                <ul>
                    <li><strong>Nome completo:</strong> Carlos Ray "Chuck" Norris</li>
                    <li><strong>Data de nascimento:</strong> 10 de março de 1940</li>
                    <li><strong>Local de nascimento:</strong> Ryan, Oklahoma, EUA</li>
                </ul>
                <span>Chuck Norris é um renomado ator, artista marcial e escritor americano. Nascido em Ryan, Oklahoma, Norris começou sua carreira no mundo das artes marciais, onde se destacou como campeão mundial de karatê. Sua trajetória no cinema começou na década de 1970, com destaque para o filme "Way of the Dragon" (1972), onde enfrentou Bruce Lee em uma lendária luta.</span>
                <p><span>Norris alcançou fama internacional com a série de televisão "Walker, Texas Ranger", que foi exibida de 1993 a 2001. A série consolidou sua imagem como um herói durão e íntegro, e tornou-o um ícone da cultura popular.</span></p>
                <p><span>Além de seu trabalho como ator, Chuck Norris é também um autor prolífico, tendo escrito vários livros sobre artes marciais, filosofia e temas políticos. Ele é conhecido por seu envolvimento em várias causas filantrópicas e tem uma presença marcante na cultura de memes da internet, onde suas façanhas fictícias são amplamente celebradas.</span></p>                
            </section>
        </div>
    )
}