import { localImages } from '../../utils/localImages';
import SafeImage from '../SafeImage/SafeImage';
import Button from '../Button/Button';
import LikedFilled from '@assets/like-filled.svg';
import LikeOutline from '@assets/like.svg';

const ProjectCard = ({ project, isFavorite, onToggleFavorite }) => {
  const { id, title, subtitle, thumb } = project;

  const fallbackSrc = localImages[title] || '/fallback.jpg';

  return (
    <div className='project-card d-flex jc-center al-center fd-column' key={id || `${title}-${Math.random()}`}>
      <div className='thumb tertiary-background'>
        <SafeImage src={thumb} alt={title} fallback={fallbackSrc} className='thumb-img' />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Button buttonStyle='unstyled' onClick={() => onToggleFavorite(id)}>
        <img src={isFavorite ? LikedFilled : LikeOutline} height='20px' alt='like icon' />
      </Button>
    </div>
  );
};

export default ProjectCard;
