//importacoes de hooks para atualizar o estado e atualizacao do conteudo e buscar dados na API
import { useState, useEffect } from 'react';

//ASSETS
import './ProjectsList.css';
import LikedFilled from '@assets/like-filled.svg';
import Liked from '@assets/like.svg';

//UTIlS
import { getApiData } from '../../services/js/apiServices';

function ProjectsList() {
  //estado para armazenar os dados da API
  //eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState();

  //useEffect para buscar os dados da API quando o componente for montado
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };
    fetchData();
  }, []); //garantir que a funcao seja executada apenas uma vez quando o componente dor montado
  return (
    <div className='projects-section'>
      <div className='projects-hero'>
        <h2>Follow Our Projects</h2>
        <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
      </div>
      <div className='projects-grid'>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={Liked} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className='thumb tertiary-background'></div>
          <h3>Joao Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikedFilled} height='20px' />
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
