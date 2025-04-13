import { useEffect, useState } from 'react'
import Result from '../components/Result/Result'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/constants'
import Loading from '../components/Loading/Loading'

function ResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [quizResult] = useState(location.state)
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(!location.state) navigate(ROUTES.HOME)
  }, [location, navigate])
  
  useEffect(() => {
      setTimeout(() => {
        setActive(true);
      }, 3000);
  },[])

  return (
    <>
      <h1>Result</h1>
      <Loading active={active} />
      <Result maxQuizLen={quizResult?.quizLen} correctNum={quizResult?.correctNum} />
      <br />
      <Link to={ROUTES.QUIZ}>
        もう一度チャレンジ
      </Link>
    </>
  )
}


export default ResultPage