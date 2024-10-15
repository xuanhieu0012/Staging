// ImageGallery.tsx
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

interface ImageGalleryProps {
  category: string;
}

interface Image {
  id: number;
  url: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ category }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const IMAGES_PER_PAGE = 20;

  useEffect(() => {
    // Simulate an API call to fetch images for the selected category
    const fetchImages = async () => {
      const response = await fetch(`/api/${category}`); // Example endpoint
      const data = await response.json();
      setImages(data);
      setTotalPages(Math.ceil(data.length / IMAGES_PER_PAGE));
    };

    fetchImages();
  }, [category]);

  // Get images for the current page
  const paginatedImages = images.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  return (
    <div>
      <div className="image-gallery">
        {paginatedImages.map((image) => (
          <img key={image.id} src={image.url} alt={`img-${image.id}`} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ImageGallery;
