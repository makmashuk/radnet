import useBreadcrumb from "@hooks/useBreadcrumb";
import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";
import { useEffect, useMemo } from "react";
import { setBreadcrumb } from "@reducers/BreadcrumbReducer";

export default function PracticeOverViewPage() {
  const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();

  const breadcrumbs = useMemo(
    () => [
      { title: "Dashboard", link: "/dashboard" },
      { title: "Practice Overview", link: "/dashboard/practice-overview", current: true },
    ],
    []
  );

  useEffect(() => {
    breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
  }, [breadcrumbDispatcher, breadcrumbs]);

  return (
    <div style={{ position: "relative" }}>
      <div className="container">
        <Breadcrumb />
      </div>
    </div>
  );
}
