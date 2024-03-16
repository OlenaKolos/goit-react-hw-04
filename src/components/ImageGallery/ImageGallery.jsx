import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        // if (!image.id) return null;
        return (
          <li key={image.id}>
            <ImageCard image={image} handleImageClick={handleImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
