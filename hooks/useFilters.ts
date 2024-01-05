'use client'
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useFilters = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const filters = useMemo(
    () => [
      {
        label: "Books",
        key: "books",
        checked: searchParams.toString() == "filter=books",
      },
      {
        label: "Electronics",
        key: "electronics",
        checked: searchParams.toString() == "filter=electronics",
      },
      {
        label: "Materials",
        key: "materials",
        checked: searchParams.toString() == "filter=materials",
      },
      {
        label: "School",
        key: "school",
        checked: searchParams.toString() == "filter=school",
      },
      {
        label: "Fashion",
        key: "fashion",
        checked: searchParams.toString() == "filter=fashion",
      },
    ],
    [searchParams]
  );

  return filters;
};

export default useFilters;
