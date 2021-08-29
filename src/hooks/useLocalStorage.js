import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    // lazy initialization state - передаем ссылку на функцию которая возвращает начальое значение
    // useState вызывает функцию один раз при первом рендере и больше не вызыывает
    // используется в том случае если начальное значение state нужно вычислять
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  // вторым агрументом useEffect принимает [массив] зависимостей. То есть useEffect будет запускаться только тогда когда будет изменться значение key и state
  // при изменении чего , сделать что
  // если передать пустой [] то это значит что useEffect не зависит ни от чего. он запуститься при первом рендере и потом больше никогда
  return [state, setState];
}
