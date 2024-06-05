import Card from "./Card";
import Image from "next/image";
import ProfileInsight from "../enums/profile-insight.enum";
import SocialMediaService from "../services/social-media.services";

function OverviewCard({
  platform,
  overview,
  stats,
  statPercentage,
  insight,
}: {
  platform: string;
  overview: string;
  stats: string;
  statPercentage: string;
  insight: ProfileInsight;
}) {
  const getPlatformIcon = () => {
    return `images/icon-${platform}.svg`;
  };

  const insightData = SocialMediaService.getInsight(insight);

  return (
    <Card className={` flex flex-col gap-4 p-6 rounded-xl`}>
      <div className="flex justify-between items-center text-[#8C98C6] font-bold">
        {overview}
        <Image src={getPlatformIcon()} width={20} height={20} alt="icon" />
      </div>
      <div className="flex justify-between items-center">
        <span className="block text-[2rem] font-bold">{stats}</span>
        <div className="flex gap-1 items-center">
          <Image
            className="mr-[0.4rem]"
            src={`${insightData.icon}`}
            width={8}
            height={4}
            alt="icon"
          />
          <span
            style={{
              color: insightData.color,
            }}
            className={`text-[12px] font-bold`}
          >
            {statPercentage}%
          </span>
        </div>
      </div>
    </Card>
  );
}

export default OverviewCard;
