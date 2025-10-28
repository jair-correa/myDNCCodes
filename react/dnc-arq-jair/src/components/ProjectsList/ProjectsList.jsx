import { useContext, useState, useEffect } from 'react';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';

// COMPONENTS
import Button from '../Button/Button';
// ASSETS
import './ProjectsList.css';
import LikedFilled from '@assets/like-filled.svg';
import LikeOutline from '@assets/like.svg';

// UTILS
import { getApiData } from '@services/js/apiServices';

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [favProjects, setFavProject] = useState([]);

  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  const handleSavedProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter((projectId) => projectId !== id);
        sessionStorage.setItem('favProjects', JSON.stringify(filterArray));
        return prevFavProjects.filter((projectId) => projectId !== id);
      } else {
        sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]));
        return [...prevFavProjects, id];
      }
    });
  };

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

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'));
    if (savedFavProjects) {
      setFavProject(savedFavProjects);
    }
  }, []);

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
              <Button buttonStyle='unstyled' onClick={() => handleSavedProjects(project.id)}>
                <img src={favProjects.includes(project.id) ? LikedFilled : LikeOutline} height='20px' alt='like icon' />
              </Button>
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
