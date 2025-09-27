import React from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";

export default function MainLayout() {
  const url = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const removeNullQueryParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const keysToDelete = Array.from(searchParams.entries())
        .filter(
          ([key, value]) =>
            value === "" ||
            value === null ||
            value === undefined ||
            value === "null" ||
            value === "undefined"
        )
        .map(([key]) => key);

      keysToDelete.forEach((key) => searchParams.delete(key));
      setSearchParams(searchParams);
    };

    removeNullQueryParams();

    if (url.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [url.pathname, url.search, navigate, setSearchParams]);
  return <Outlet />;
}
