import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="bg-blue-100 m-30 p-10">
      <div className="heroSection">
        <h1 className="font-bold text-6xl text-center p-5 text-green-950">AI-Driven Scheme Matching</h1>
        <p className="text-3xl text-center p3">
          Searching for Government schemes for marginalized Entrepreneurs made easy.
        </p>

        {user ? (
          <Link to="/dashboard" className="ctaButton">
            Go to Dashboard →
          </Link>
        ) : (
          <div className="flex justify-center m-4 p-4 gap-25 underline text-3xl">
           <button className ="bg-blue-50 p-3 m-3 rounded-3xl"><Link to="/register" className="text-blue-600 font-bold ">Get Started </Link></button> 
            <button  className ="bg-blue-50 p-3 m-3 rounded-3xl"><Link to="/login" className="text-blue-600 font-bold">  Login</Link></button>
          </div>
        )}
      </div>

      <div className="bg-blue-200 h-80 w-200 flex item center justify-center p-8 rounded-3xl mx-auto gap-8">
        <div className="h-50 w-30 m-12">
          <h3 className = "font-bold text-2xl P-0.5">Personalized Matching</h3>
          <p>AI suggest you the most suitable schemes based on your profile.</p>
        </div>
        <div className="h-50 w-30 m-12">
          <h3 className = "font-bold text-2xl P-0.5">Simple Eligibility</h3>
          <p>Each scheme's eligibility criteria are explained in simple language.</p>
        </div>
        <div className="h-50 w-30 m-12">
          <h3 className = "font-bold text-2xl P-0.5">Saves Time</h3>
          <p>No need to manually check 100+ schemes.</p>
        </div>
      </div>
    </div>
  );
}