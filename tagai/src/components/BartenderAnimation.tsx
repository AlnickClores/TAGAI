export default function BartenderAnimation() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-sm h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              25% { transform: translateY(-3px) rotate(2deg); }
              75% { transform: translateY(-3px) rotate(-2deg); }
            }
            @keyframes pour {
              0% { opacity: 0; y: -20px; }
              50% { opacity: 1; }
              100% { opacity: 0; y: 40px; }
            }
            @keyframes bob {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            .shaker { animation: shake 0.8s ease-in-out infinite; }
            .liquid { animation: pour 1.5s ease-in 0.3s infinite; }
            .drink { animation: bob 2s ease-in-out infinite; }
            
            /* Lighter colors for dark mode */
            :root {
              --bartender-primary-light: #8d3cc3;
              --bartender-primary-dark: #b366e0;
              --bartender-secondary-light: #e09abd;
              --bartender-secondary-dark: #f0c4d4;
              --bartender-accent-light: #d16b7e;
              --bartender-accent-dark: #ff8fa3;
            }
          `}</style>
        </defs>

        <circle
          cx="150"
          cy="80"
          r="35"
          fill="currentColor"
          className="text-primary opacity-20"
        />
        <circle
          cx="150"
          cy="75"
          r="30"
          fill="currentColor"
          className="text-secondary dark:opacity-70 opacity-100"
        />

        <path
          d="M 120 55 Q 120 40 150 40 Q 180 40 180 55 L 175 75 Q 150 85 125 75 Z"
          fill="currentColor"
          className="text-accent dark:opacity-80 opacity-100"
        />

        <circle
          cx="140"
          cy="70"
          r="3"
          fill="currentColor"
          className="text-text"
        />
        <circle
          cx="160"
          cy="70"
          r="3"
          fill="currentColor"
          className="text-text"
        />

        <path
          d="M 140 80 Q 150 85 160 80"
          stroke="currentColor"
          className="text-text"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <rect
          x="145"
          y="100"
          width="10"
          height="15"
          fill="currentColor"
          className="text-secondary dark:opacity-70 opacity-100"
        />

        <rect
          x="115"
          y="115"
          width="70"
          height="80"
          fill="currentColor"
          className="text-primary dark:opacity-80 opacity-100"
          rx="5"
        />
        <rect
          x="115"
          y="115"
          width="70"
          height="12"
          fill="currentColor"
          className="text-secondary dark:opacity-60 opacity-80"
          rx="5"
        />

        <g>
          <line
            x1="115"
            y1="135"
            x2="80"
            y2="120"
            stroke="currentColor"
            className="text-secondary dark:opacity-70 opacity-100"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle
            cx="75"
            cy="115"
            r="7"
            fill="currentColor"
            className="text-secondary dark:opacity-70 opacity-100"
          />
        </g>

        <g className="shaker" style={{ transformOrigin: "185px 135px" }}>
          <line
            x1="185"
            y1="135"
            x2="220"
            y2="100"
            stroke="currentColor"
            className="text-secondary dark:opacity-70 opacity-100"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <rect
            x="215"
            y="85"
            width="20"
            height="30"
            fill="currentColor"
            className="text-accent dark:opacity-80 opacity-100"
            rx="3"
          />
          <rect
            x="217"
            y="80"
            width="16"
            height="8"
            fill="currentColor"
            className="text-primary dark:opacity-70 opacity-60"
            rx="2"
          />

          <line
            x1="235"
            y1="115"
            x2="235"
            y2="155"
            stroke="currentColor"
            className="text-primary dark:opacity-80"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1="240"
            y1="115"
            x2="240"
            y2="155"
            stroke="currentColor"
            className="text-primary dark:opacity-60"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
            style={{ animationDelay: "0.1s" }}
          />
        </g>

        <g className="drink" style={{ transformOrigin: "230px 180px" }}>
          <path
            d="M 220 160 L 215 200 Q 215 210 225 210 L 235 210 Q 245 210 245 200 L 240 160 Z"
            fill="none"
            stroke="currentColor"
            className="text-text"
            strokeWidth="2"
          />
          <rect
            x="217"
            y="175"
            width="18"
            height="20"
            fill="currentColor"
            className="text-primary dark:opacity-80 opacity-60"
          />
        </g>

        <g
          className="drink"
          style={{ transformOrigin: "70px 180px", animationDelay: "0.3s" }}
        >
          <path
            d="M 60 160 L 55 200 Q 55 210 65 210 L 75 210 Q 85 210 85 200 L 80 160 Z"
            fill="none"
            stroke="currentColor"
            className="text-text"
            strokeWidth="2"
          />
          <rect
            x="57"
            y="175"
            width="18"
            height="20"
            fill="currentColor"
            className="text-primary dark:opacity-80 opacity-60"
          />
        </g>

        <rect
          x="40"
          y="220"
          width="220"
          height="15"
          fill="currentColor"
          className="tagai-muted opacity-30"
          rx="2"
        />
      </svg>
    </div>
  );
}
