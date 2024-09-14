import './styles.css'

export default function Home()
{
    return(
        <>
        <section>
        <div >
        <h1>Olá senhoras e senhores</h1>
        </div>
                <h4>Se você está aqui, é porque está pronto para adicionar uma dose de humor lendário ao seu projeto! A Chuck Norris Joke API é a sua fonte definitiva de piadas épicas sobre o homem, a lenda, o mito: Chuck Norris.</h4>
                <h4>O que é a Chuck Norris Joke API?
                A Chuck Norris Joke API é um serviço simples e direto para acessar uma coleção de piadas clássicas e novas sobre o icônico Chuck Norris. Cada piada é cuidadosamente selecionada para garantir que você receba uma dose de risadas e admiração pelo homem que, segundo dizem, não precisa de um Google; ele sabe tudo.</h4>
       <section className='piadas'>
        <div>
            <ul>
                <li><strong>Piadas Aleatorias:</strong> Obtenha uma piada nova e surpreendente sobre Chuck Norris sempre que precisar de uma boa risada.</li>
                <li><strong>Piadas Específicas:</strong> Filtre as piadas por categoria, tema ou nível de "Chuck Norris" para atender ao seu público.</li>
                <li><strong>Frequência de Atualização:</strong> As piadas são constantemente atualizadas, então você nunca ficará sem uma boa história para compartilhar.</li>
            </ul>
        </div>
       </section>
       <img className='iamegm-1' width={400} height={400} src="https://wallpaperaccess.com/full/1118638.jpg"/>
        <img className='iamegm-2' width={400} height={400} src="https://th.bing.com/th/id/R.f2c069de7f76671ed5466b5caf6f1cfb?rik=6l0R3rFIOJNAbA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33100000%2fchuck-norris-chuck-norris-33161514-520-650.png&ehk=F0xKXobJ9SlhMTFpjbmxAY3kOBTFrYKWmjajNBQwpf4%3d&risl=&pid=ImgRaw&r=0" />
            <div>
            </div>
        </section>
        </>
    )
}