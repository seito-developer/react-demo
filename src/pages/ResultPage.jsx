import { useEffect, useState } from "react";
import Result from "../components/Result/Result";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/constants";
import Loading from "../components/Loading/Loading";

function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setActive(true), 3000);
  }, []);

  return (
    <>
      <h1>Result</h1>
      <Loading active={active} />
      <Result
        maxQuizLen={maxQuizLen}
        correctNumLen={correctNumLen}
      />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  );
}

export default ResultPage;
