export const randomImage = imagesArray => {
  if(imagesArray.isArray() && imagesArray.length > 0) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  } else {
    return null;
  }
};
