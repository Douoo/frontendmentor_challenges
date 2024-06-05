import ProfileInsight from "../enums/profile-insight.enum";
import { InsightData } from "../enums/profile-insight.enum";

class SocialMedia{
    platform:string;

    constructor(platform:string){
        this.platform = platform
    }

    getIcon(){
        return `images/icon-${this.platform}.svg`;
    }


  getColor(){
    switch (this.platform) {
      case "facebook":
      case "twitter":
        return "border-[#178FF5] border-t-4";
      case "instagram":
        return "ig-border";
      case "youtube":
        return "border-[#C4032B] border-t-4";
      default:
        return "border-[#178FF5] border-t-4";
    }
  };
    static getInsight(insight: ProfileInsight): InsightData {
      switch (insight) {
        case ProfileInsight.Increased:
          return {
            color: "#1EB589",
            icon: "images/icon-up.svg",
          };
        case ProfileInsight.Decreased:
          return {
            color: "#DC414C",
            icon: "images/icon-down.svg",
          };
        case ProfileInsight.Neutral:
          return {
            color: "#fff",
            icon: undefined,
          };
        default:
          return {
            color: undefined,
            icon: undefined,
          };
      }
    };
}

export default SocialMedia