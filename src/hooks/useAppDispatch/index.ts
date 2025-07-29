// hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
export const useAppDispatch = () => useDispatch<AppDispatch>();

// hooks/useAppSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'stores/store';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
