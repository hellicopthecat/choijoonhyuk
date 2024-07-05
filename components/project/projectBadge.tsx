import SharedText from "../shared/sharedText";

export default function ProjectBadge({team}: {team: boolean}) {
  return team ? (
    <SharedText
      textType="span"
      text="TEAM"
      className="bg-blue-300 p-1 rounded-lg"
    />
  ) : (
    <SharedText
      textType="span"
      text="SOLO"
      className="bg-red-300 p-1 rounded-lg"
    />
  );
}
