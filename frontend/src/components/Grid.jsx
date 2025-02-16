import Masonry from "react-masonry-css";
import images from "../data/images.js";

export default function Grid() {
  const breakpointColumns = {
    default: 4, // 3 columns on large screens
    1024: 2, // 2 columns on tablets
    768: 1, // 1 column on mobile
  };

  return (
    <div className="w-full bg-white p-4">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-full gap-2"
        columnClassName="my-masonry-grid_column flex flex-col gap-2"
      >
        {images.map((image) => (
          <div key={image.id} className="relative bg-white">
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="block w-full object-cover bg-white"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
