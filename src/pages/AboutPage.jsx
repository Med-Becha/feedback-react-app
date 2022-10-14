import Card from "../components/shared/Card"
import {useNavigate } from 'react-router-dom'

const AboutPage = () => {
  
    const nav = useNavigate()
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <p onClick={() => nav("/")}>
                Back to Home
            </p>
        </div>
    </Card>
  )
}

export default AboutPage