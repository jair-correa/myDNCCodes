import { useContext, useState, useEffect } from 'react';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';

// COMPONENTS
import ProjectCard from '../ProjectCard/ProjectCard';

// ASSETS
import './ProjectsList.css';

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

  return (
    <div className='projects-section'>
      <div className='projects-hero'>
        <h2>{languages?.[language]?.projects?.title || 'TITLE'}</h2>
        <p>{languages?.[language]?.projects?.subtitle || 'SUBTITLE'}</p>
      </div>
      <div className='projects-grid'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id || `${project.title}-${Math.random()}`}
              project={project}
              isFavorite={favProjects.includes(project.id)}
              onToggleFavorite={handleSavedProjects}
            />
          ))
        ) : (
          <p className='no-projects'>Nenhum projeto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsList;
