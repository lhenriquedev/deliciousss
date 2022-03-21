import * as S from "./styled";

interface ThemeProps {
  handleTheme: () => void;
  children: JSX.Element;
}

export function ToggleTheme({ children, handleTheme }: ThemeProps) {
  return <S.ButtonTheme onClick={handleTheme}>{children}</S.ButtonTheme>;
}
