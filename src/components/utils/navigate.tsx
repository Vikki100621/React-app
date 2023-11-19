import { useNavigate, useLocation } from 'react-router-dom';

export const useCustomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQueryChange = (param: string, value: number) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set(`${param}`, value.toString());
    navigate({ search: queryParams.toString() });
  };

  return { handleQueryChange };
};
