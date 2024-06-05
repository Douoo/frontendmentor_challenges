enum ProfileInsight{
    Increased = "INCREASED",
    Decreased = "DECREASED",
    Neutral = "NEUTRAL"
}

export default ProfileInsight;


export interface InsightData {
    color: string | undefined;
    icon: string | undefined;
  }