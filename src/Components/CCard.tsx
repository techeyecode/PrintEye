import { Link } from "react-router-dom";

interface CCardProps {
  id: number | string;
  label: string;
  code?: string;
  count?: number;
  image?: string;
  navigateTo: string; // <-- made navigateTo required
  className?: string;
}

const CCard: React.FC<CCardProps> = ({
  label,
  count,
  image,
  navigateTo,
  className = "",
}) => {
  return (
    <Link
      to={navigateTo} // <-- directly use navigateTo
      className={`group block rounded-3xl bg-primary border border-gray-200 transition-all duration-300 overflow-hidden hover:shadow-lg hover:border-gray-300 ${className}`}
    >
      <div className={`relative overflow-hidden w-full aspect-[4/4]`}>
        {image ? (
          <img
            src={image}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <div className="p-1 px-4 gap-2 text-center">
        <h5 className="text-white font-medium line-clamp-2 flex-1 mr-2">
          {label}
        </h5>
        {/* {count !== undefined && (
            <span className="text-white font-medium px-2 py-1 rounded-full text-sm min-w-8 text-center">
              {count}
            </span>
          )} */}
      </div>
    </Link>
  );
};

export default CCard;
