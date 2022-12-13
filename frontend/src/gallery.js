import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

function Gallery2() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <div className="donation-container">
        <div className="donation-heading">Gallery</div>
        <div className="donation-content boxshadow">
          <div className="certificate-container">
          <div className="gallery-img  ">
            <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>

             </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}


const BasicRows = () => <Gallery photos={photos} />;


export default Gallery2;