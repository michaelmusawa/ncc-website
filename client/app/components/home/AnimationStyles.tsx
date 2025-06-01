export default function AnimationStyles() {
  return (
    <style jsx global>{`
      /* Basic fade and slide animations */
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      @keyframes spotlight {
        0% {
          opacity: 0.5;
          transform: scale(1);
        }
        25% {
          opacity: 0.7;
        }
        50% {
          opacity: 0.9;
          transform: scale(1.05);
        }
        75% {
          opacity: 0.7;
        }
        100% {
          opacity: 0.5;
          transform: scale(1);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }

      /* Animation classes */
      .animate-fadeIn {
        animation: fadeIn 0.8s ease forwards;
        animation-play-state: paused;
      }

      .animate-slideInLeft {
        animation: slideInLeft 0.8s ease forwards;
        animation-play-state: paused;
      }

      .animate-slideInRight {
        animation: slideInRight 0.8s ease forwards;
        animation-play-state: paused;
      }

      .animate-slideInUp {
        animation: slideInUp 0.8s ease forwards;
        animation-play-state: paused;
      }

      .animate-slideInDown {
        animation: slideInDown 0.8s ease forwards;
        animation-play-state: paused;
      }

      .animate-scaleIn {
        animation: scaleIn 0.8s ease forwards;
        animation-play-state: paused;
      }

      .animate-float {
        animation: float 4s ease-in-out infinite;
      }

      .animate-spotlight {
        animation: spotlight 6s ease-in-out infinite;
      }

      .animate-shimmer {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 200% 100%;
        animation: shimmer 3s infinite;
      }

      /* Marquee animation for news banner */
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-marquee {
        display: inline-block;
        animation: marquee 30s linear infinite;
      }

      /* Start animations when in view */
      .animate-active {
        animation-play-state: running !important;
      }

      /* Section animations */
      .section-animate.animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition-timing-function: cubic-bezier(
          0.175,
          0.885,
          0.32,
          1.275
        ) !important;
      }

      /* Staggered animation for children */
      .stagger-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }

      .stagger-container.animate-in .stagger-item:nth-child(1) {
        transition-delay: 0.1s;
      }
      .stagger-container.animate-in .stagger-item:nth-child(2) {
        transition-delay: 0.2s;
      }
      .stagger-container.animate-in .stagger-item:nth-child(3) {
        transition-delay: 0.3s;
      }
      .stagger-container.animate-in .stagger-item:nth-child(4) {
        transition-delay: 0.4s;
      }
      .stagger-container.animate-in .stagger-item:nth-child(5) {
        transition-delay: 0.5s;
      }
      .stagger-container.animate-in .stagger-item:nth-child(6) {
        transition-delay: 0.6s;
      }

      .stagger-container.animate-in .stagger-item {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
  );
}
