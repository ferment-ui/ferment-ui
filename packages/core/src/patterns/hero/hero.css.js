export default /*css*/`
.hero {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.hero__image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__text {
  z-index: 1;
}
`;