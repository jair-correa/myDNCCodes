//ASSETS
import './LoadingSpinner.css';
import LoadingSpinnerGIF from '@assets/loading-spinner.gif';

function LoadingSpinner() {
  return (
    <div className=' d-flex al-center jc-center loading-overlay-container '>
      <img src={LoadingSpinnerGIF} alt='Loading...' height='80px' className='loading-spinner' />
    </div>
  );
}

export default LoadingSpinner;
