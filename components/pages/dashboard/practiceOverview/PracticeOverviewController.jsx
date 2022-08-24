import { useState } from "react";

const getChips = (filters) => {
  let chips = [];

  if (filters.time_range) {
    chips = [
      ...chips,
      {
        key: "time_range",
        title: "Time Range",
        value: filters.time_range,
      },
    ];
  }
  if (filters.quality) {
    chips = [
      ...chips,
      {
        key: "quality",
        title: "Quality",
        value: filters.quality,
      },
    ];
  }
  if (filters.view) {
    chips = [
      ...chips,
      {
        key: "view",
        title: "View",
        value: filters.view,
      },
    ];
  }
  if (filters.position_issues) {
    chips = [
      ...chips,
      {
        key: "position_issues",
        title: "Position issues",
        value: filters.position_issues,
      },
    ];
  }
  if (filters.density) {
    chips = [
      ...chips,
      {
        key: "density",
        title: "Density",
        value: filters.density,
      },
    ];
  }
  if (filters.needs_review) {
    chips = [
      ...chips,
      {
        key: "needs_review",
        title: "Needs Review",
        value: filters.needs_review,
      },
    ];
  }

  return chips;
};

export default function usePracticeOverView() {
  const [practiceRegion, setPracticeRegion] = useState("");
  const [practiceDuration, setPracticeDuration] = useState("");
  const [chips, setChips] = useState([]);
  const [filters, setFilters] = useState({});

  return {
    practiceRegion,
    practiceDuration,
    chips,

    setChips,
    setFilters,
    setPracticeRegion,
    setPracticeDuration,
  };
}
