import Card from "./Card";
import Image from "next/image";
import ProfileInsight from "../enums/profile-insight.enum";
import SocialMedia from "../services/social-media.services";

function StatCard({
  platform,
  username,
  followers,
  followerIncrease,
  insight,
}: {
  platform: string;
  username: string;
  followers: string;
  followerIncrease: number;
  insight: ProfileInsight;
}) {
  const socialPlatform = new SocialMedia(platform);
  const insightData = SocialMedia.getInsight(insight);
  return (
    <Card
      className={`${socialPlatform.getColor()}  | group grid place-items-center gap-6 rounded-xl p-8`}
    >
      <div className="flex items-center gap-1">
        <Image
          src={socialPlatform.getIcon()}
          height={20}
          width={20}
          alt={`${platform}-icon`}
        />
        <span className="text-[#8C98C6] font-bold">{username}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-[3.5rem] font-bold">{followers}</span>
        <span className="uppercase text-[0.75rem] tracking-[5px] text-[#8C98C6]">
          Followers
        </span>
      </div>
      <span
        style={{ color: insightData.color }}
        className="flex items-center gap-1 text-xs font-bold leading-3"
      >
        {insightData.icon && (
          <Image
            src={insightData.icon}
            width={8}
            height={4}
            alt="insight trend icon"
          />
        )}
        {followerIncrease} Today
      </span>
    </Card>
  );
}

export default StatCard;
