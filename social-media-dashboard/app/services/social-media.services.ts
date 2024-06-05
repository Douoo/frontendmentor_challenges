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
        return "border-[#178FF5]";
      case "instagram":
        return "bg-gradient-to-br from-#DF4896 via-#EE877E to-#FDC366";
      case "youtube":
        return "border-[#C4032B]";
      default:
        return "border-[#178FF5]";
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