
export default function About() {
  return (
    <div className="bg-blue-100 mx-auto px-25 h-170 w-180 ">
      <h2 className="text-5xl font-bold items-center w-fit px-6 mt-3 py=3 rounded-3xl py-3 text-center flex justify-center text-blue-950">About This Project</h2>
      <p className="text-2xl">
          This project helps marginalized entrepreneurs find the right government schemes.
          There are many schemes scattered around, and understanding their eligibility
          criteria can be difficult — we are using AI to make this process simpler.
        </p>

      {/* <h3 className="aboutSubheading">Team</h3> */}
      <h3 className="font-bold text-5xl text-blue-900 text-center m-8">Team Name</h3>
      <p className ="font-bold text-shadow-black text-center  text-3xl"> KALAKAR</p>

      <h3 className="font-bold text-center text-5xl text-blue-900 m-8">Problem Statement</h3>
      <p className="text-2xl ">
        AI-Driven Scheme Matching for Marginalized Entrepreneurs
       
      </p>
    </div>
  );
}