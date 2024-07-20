import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goTo(index: number) {
    setCurrentIndex(index)
  }
  return {
    step: steps[currentIndex],
    next,
    back,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === steps.length - 1,
    steps,
    goTo,
    currentIndex
  };
};
