import { useCallback, useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
export interface UseBooleanOutputProps {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  setValue: Dispatch<SetStateAction<boolean>>;
}
export interface OptionProps {
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
  defaultValue?: undefined | boolean;
}
export const useBoolean = ({
  onTrue,
  onFalse,
  onToggle,
  defaultValue = false,
}: Partial<OptionProps> = {}): UseBooleanOutputProps => {
  const [value, setValue] = useState(!!defaultValue);
  const setTrue = useCallback(() => {
    setValue(true);
    if (onTrue) onTrue();
  }, [onTrue]);
  const setFalse = useCallback(() => {
    setValue(false);
    if (onFalse) onFalse();
  }, [onFalse]);
  const toggle = useCallback(() => {
    setValue((x) => !x);
    if (onToggle) onToggle();
  }, [onToggle]);

  useEffect(() => {
    queueMicrotask(() => {
      setValue(!!defaultValue);
    });
  }, [defaultValue])
  return { value, setValue, setTrue, setFalse, toggle };
};
