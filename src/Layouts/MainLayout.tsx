import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const cleanSearchParams = () => {
      const currentParams = new URLSearchParams(location.search);
      let hasChanges = false;

      for (const [key, value] of currentParams.entries()) {
        if (
          value === "" ||
          value === null ||
          value === undefined ||
          value === "null" ||
          value === "undefined"
        ) {
          currentParams.delete(key);
          hasChanges = true;
        }
      }

      if (hasChanges) {
        const newSearchString = currentParams.toString();
        const newUrl = newSearchString
          ? `${location.pathname}?${newSearchString}`
          : location.pathname;

        navigate(newUrl, { replace: true });
      }
    };

    cleanSearchParams();

    // Scroll to top on route change (excluding root path)
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.search, navigate]);

  return <Outlet />;
}
