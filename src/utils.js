// src/utils.js

const images = import.meta.glob("./assets/**/*.{png,jpg,jpeg}", {
  eager: true,
});

export const getImageUrl = (path) => {
  const key = `./assets/${path}`;
  return images[key]?.default;
};
