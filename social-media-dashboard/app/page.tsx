import Header from "./components/Header";
import ProfileInsight from "./enums/profile-insight.enum";
import StatCard from "./components/StatCard";
import OverviewCard from "./components/OverviewCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[85%] w-5xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          <StatCard
            platform="facebook"
            username="@nathanf"
            followers="1987"
            followerIncrease={12}
            insight={ProfileInsight.Increased}
          />
          <StatCard
            platform="twitter"
            username="@nathanf"
            followers="1044"
            followerIncrease={99}
            insight={ProfileInsight.Increased}
          />
          <StatCard
            platform="instagram"
            username="@realnathanf"
            followers="11K"
            followerIncrease={1099}
            insight={ProfileInsight.Increased}
          />
          <StatCard
            platform="youtube"
            username="Nathan F."
            followers="144"
            followerIncrease={144}
            insight={ProfileInsight.Decreased}
          />
        </div>
        <section className="my-12">
          <h2 className="font-bold mb-6">Overview - Today</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            <OverviewCard
              platform="facebook"
              overview="Page Views"
              stats={"87"}
              statPercentage={"3"}
              insight={ProfileInsight.Increased}
            />
            <OverviewCard
              platform="facebook"
              overview="Likes"
              stats={"52"}
              statPercentage={"2"}
              insight={ProfileInsight.Decreased}
            />
            <OverviewCard
              platform="instagram"
              overview="Likes"
              stats={"5462"}
              statPercentage={"2257"}
              insight={ProfileInsight.Increased}
            />
            <OverviewCard
              platform="instagram"
              overview="Profile Views"
              stats="52K"
              statPercentage={"1375"}
              insight={ProfileInsight.Increased}
            />
            <OverviewCard
              platform="twitter"
              overview="Retweets"
              stats={"112"}
              statPercentage={"303"}
              insight={ProfileInsight.Increased}
            />
            <OverviewCard
              platform="twitter"
              overview="Likes"
              stats={"507"}
              statPercentage={"553"}
              insight={ProfileInsight.Increased}
            />
            <OverviewCard
              platform="youtube"
              overview="Likes"
              stats={"107"}
              statPercentage={"19"}
              insight={ProfileInsight.Decreased}
            />
            <OverviewCard
              platform="youtube"
              overview="Total Views"
              stats={"1407"}
              statPercentage={"12"}
              insight={ProfileInsight.Decreased}
            />
          </div>
        </section>
      </main>
    </>
  );
}
