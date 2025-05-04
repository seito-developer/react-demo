import { useEffect, useState } from "react";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function ResultPage() {
  const location = useLocation();
  const { maxQuizLen, correctNumLen } = location.state || {};
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!maxQuizLen || !correctNumLen) navigate(ROUTES.HOME);
  }, [maxQuizLen, correctNumLen, navigate]);

  useEffect(() => {
    setTimeout(() => setActive(true), 3000);
  }, []);

  return (
    <>
      <Loading active={active} />
      {maxQuizLen && correctNumLen && (
        <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      )}

      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  );
}
