import Image1 from '../assets/img/feature-1-img.png';
import Image2 from '../assets/img/feature-2-img.png';

const getImages = (invType) => {
  let images = [];
  switch(invType){
    case "Bank Fixed Deposit" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    case "Gold" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    case "Real Estate" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    case "Guaranteed Income Plan" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    default : {
      images = [];
    }
  }

  return images;

}

export default getImages;