import { useContext, useState, useEffect } from 'react';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';
// ASSETS
import './ProjectsList.css';
import LikedFilled from '@assets/like-filled.svg';
import Liked from '@assets/like.svg';

// UTILS
import { getApiData } from '@services/js/apiServices';

function ProjectsList() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse || []);
      } catch {
        setProjects([]);
      }
    };
    fetchData();
  }, []); // garante que a função seja executada apenas uma vez quando o componente for montado

  // Corrige HTTPS -> HTTP apenas no ambiente local (opcional)
  const fixImageUrl = (url) => {
    if (!url) return '';
    if (window.location.hostname === 'localhost' && url?.startsWith('https://')) {
      return url.replace('https://', 'http://');
    }
    return url;
  };

  return (
    <div className='projects-section'>
      <div className='projects-hero'>
        <h2>{languages?.[language]?.projects?.title || 'TITLE'}</h2>
        <p>{languages?.[language]?.projects?.subtitle || 'SUBTITLE'}</p>
      </div>
      <div className='projects-grid'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className='project-card d-flex jc-center al-center fd-column' key={project.id || `${project.title}-${Math.random()}`}>
              <div className='thumb tertiary-background'>
                <img
                  className='thumb-img'
                  src={fixImageUrl(project.thumb)}
                  alt={project.title}
                  onError={(e) => {
                    // When remote image fails (DNS, CORS, mixed content), hide the <img>
                    // leaving the card without an image as requested.
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <img src={LikedFilled} height='20px' alt='like icon' />
            </div>
          ))
        ) : (
          <p className='no-projects'>Nenhum projeto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsList;
