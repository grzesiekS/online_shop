export const randomImageSelection = imagesArray => {
  if(Array.isArray(imagesArray) && imagesArray.length > 0) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  } else {
    return null;
  }
};
