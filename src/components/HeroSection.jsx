// components/HeroSection.jsx
import { useNavigate } from "react-router-dom";
import '../App.css'
import './HeroSection.css'; // Import the CSS file for styling

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-white pt-12 pb-40 md:py-28 px-8 mt-24">
        <div className="max-w-full mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center mb-24 md:mb-0">
            <h1 className="text-4xl xs:text-3xl md:text-5xl mb-2 text-left w-full hero-text">
              Where community<br />
              rewards good financial{' '}
              <span className="hero-text-blue">behaviour.</span>
            </h1>
            <p className="md:text-lg text-lg mb-2 text-left w-full cred-save-text">
              Credit, Save or Invest - All your terms
            </p>
            <p className="text-sm mb-6 text-left w-full bharat-text">Made for Bharat <span role="img" aria-label="blue heart">💙</span></p>
            <button
              className="hover:bg-blue-700 transition mb-8 md:mb-0 w-full sm:w-auto waitlist-button"
              onClick={() => navigate('/waitlist')}
            >
              Join Waitlist Now!
            </button>
          </div>
          {/* Right: Phone mockup with cards and coin icon */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
            {/* Phone mockup */}
            <div className="relative w-96 h-56 md:h-96">
              <img
                src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/landing-home-image.png?updatedAt=1752667511775"
                alt="Arrow graphic"
                className="absolute inset-0 w-80 h-full object-contain z-10 mx-auto transform scale-95 -translate-y-10 -translate-x-4 md:rotate-scale-coin"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <img
                src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/landing-bg.png?updatedAt=1752667058930"
                alt="Yellow decorative wave"
                className="absolute left-0 bottom-[-110px] md:bottom-[-80px] w-full z-0 pointer-events-none select-none transform scale-105 md:rotate-scale"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
