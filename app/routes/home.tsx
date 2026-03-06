import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center bg-fixed">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16 animate-fade-in">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>


      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume, i) => (
            <div key={resume.id} style={{ animationDelay: `${i * 100}ms` }} className="animate-fade-in opacity-0" >
              <ResumeCard resume={resume} />
            </div>
          ))}
        </div>
      )}
    </section>
  </main>
}
