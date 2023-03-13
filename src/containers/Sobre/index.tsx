import Titulo from '../../components/Titulo'
import { P } from '../../components/Paragrafo/styles'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <P tipo="secundario">
      asperiores maxime accusamus, beatae provident omnis inventore ratione
      laboriosam velit labore, porro quibusdam? Tempora earum, quibusdam ut qui
      voluptatibus porro!
    </P>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=danilosazevedo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=danilosazevedo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
