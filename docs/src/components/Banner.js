import Lottie from 'react-lottie';
import animationData from '../images/lotties/Gradient-background.json';

export function Banner({ message = 'Something New' }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={40} />
      <div className='z-50 container mx-auto py-2 flex items-center justify-between'>
        <div className='text-dark-700 absolute top-2 left-2/12 font-bold flex items-center'>
          {message}
        </div>
      </div>
    </>
  );
}
