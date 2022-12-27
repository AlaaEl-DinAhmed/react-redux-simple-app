import { useMemo } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTasks = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const isLoading = useAppSelector((state) => state.tasks.loading);

  return useMemo(() => [tasks, isLoading] as const, [tasks, isLoading]);
};
