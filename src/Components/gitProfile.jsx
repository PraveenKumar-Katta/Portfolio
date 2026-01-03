import React from "react";

// Main App Component to render the portfolio section
const GitHubSection = () => {
  const githubUsername = "PraveenKumar-Katta";

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-4xl">
        <GitActivity username={githubUsername} />
      </div>
    </div>
  );
};

/**
 * GitActivity Component
 * * This component displays a user's GitHub contribution streak and activity graph.
 * It fetches pre-generated images from services that track GitHub stats.
 *
 * @param {object} props - The component's props.
 * @param {string} props.username - The GitHub username to fetch stats for.
 */
const GitActivity = ({ username }) => {
  // URLs for the GitHub stats images
  // The streak stats URL, with a custom green theme
  const streakStatsUrl = `https://streak-stats.demolab.com/?user=${username}&background=0D1117&stroke=0000&ring=34D399&fire=34D399&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=FFFFFF&sideLabels=FFFFFF&dates=9CA3AF&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`;

  // The contribution graph URL, with a matching green color
  const contributionGraphUrl = `https://ghchart.rshah.org/34D399/${username}`;

  // Fallback image URL in case the primary images fail to load
  const placeholderImage = (width, height, text) => `https://placehold.co/${width}x${height}/0D1117/FFFFFF?text=${encodeURIComponent(text)}`;

  return (
    <div className="bg-[#0D1117] rounded-xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-700">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        My GitHub Activity
      </h2>
      <div className="flex flex-col items-center gap-8">
        
        {/* GitHub Streak Stats */}
        <div className="w-full">
            <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">Contribution Streak</h3>
            <img 
              src={streakStatsUrl} 
              alt="GitHub Streak Stats"
              className="w-full max-w-lg mx-auto rounded-lg shadow-md"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = placeholderImage(600, 200, 'Could not load Streak Stats');
              }}
            />
        </div>

        {/* GitHub Contribution Graph */}
        <div className="w-full">
            <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">Contribution Graph</h3>
            <img 
              src={contributionGraphUrl} 
              alt="GitHub Contribution Graph"
              className="w-full rounded-lg shadow-md"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = placeholderImage(890, 260, 'Could not load Contribution Graph');
              }}
            />
        </div>

      </div>
       <p className="text-xs text-gray-500 mt-8 text-center">
        Stats are fetched from third-party services: streak-stats.demolab.com and ghchart.rshah.org.
      </p>
    </div>
  );
};

export default GitHubSection;
