import React from "react";
import FeaturedNewsCard from "./FeaturedNewsCard";

function FeaturedNews() {
  return (
    <section>
      <div className="container mx-auto px-[16px] md:px-[40px]">
        <h3>Featured news News</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* News Card */}
          {newsData.map((news, index) => (
            <div key={index} className="mb-4">
              <FeaturedNewsCard {...news} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const newsData = [
  {
    image: "/public/featuredNewsImages/imageNews2.png",
    alt: "Market trends show growth",
    date: "08",
    month: "Apr",
    category: "Finance",
    title: "Global market trends: What to expect",
    subtitle: "Experts predict stable growth in Q2",
    description:
      "Global markets are experiencing a cautious rise as investors look for safer opportunities. Analysts remain optimistic about consistent trends this quarter.",
    timeAgo: "2 days ago",
    comments: 23,
  },
  {
    image: "/public/featuredNewsImages/imageNews3.png",
    alt: "AI transforming industries",
    date: "05",
    month: "Apr",
    category: "Technology",
    title: "How AI is transforming daily life",
    subtitle: "From smart homes to smart work",
    description:
      "Artificial Intelligence continues to reshape how we live and work. Industries are integrating AI to improve efficiency and customer experience.",
    timeAgo: "5 days ago",
    comments: 18,
  },
  {
    image: "/public/featuredNewsImages/imageNews4.png",
    alt: "Climate action ramping up",
    date: "01",
    month: "Apr",
    category: "Environment",
    title: "Climate initiatives gain momentum",
    subtitle: "Nations unite to reduce carbon",
    description:
      "Governments are committing to aggressive carbon reduction goals, with new initiatives being launched globally. Green tech investments are rising fast.",
    timeAgo: "1 week ago",
    comments: 32,
  },
  {
    image: "/public/featuredNewsImages/imageNews2.png",
    alt: "Market trends show growth",
    date: "08",
    month: "Apr",
    category: "Finance",
    title: "Global market trends: What to expect",
    subtitle: "Experts predict stable growth in Q2",
    description:
      "Global markets are experiencing a cautious rise as investors look for safer opportunities. Analysts remain optimistic about consistent trends this quarter.",
    timeAgo: "2 days ago",
    comments: 23,
  },
];

export default FeaturedNews;
