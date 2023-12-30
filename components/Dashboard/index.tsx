import Hero from "../Hero";
import Trending from "../Trending";
import TrendingCharts from "../TrendingCharts";

const Dashboard = () => {
  return (
    <section className="w-full">
      <Hero />
      <Trending />
      <TrendingCharts/>
    </section>
  );
};

export default Dashboard;
