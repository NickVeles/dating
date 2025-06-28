import Banner from "../utilities/banner";
import { Bold, Ul } from "../utilities/typography";

export default function Flags() {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="w-full flex flex-col">
        <Banner
          url="https://images.unsplash.com/photo-1539622106114-e0df812097e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon="/icons/flag-check.svg"
          alt="flag-check"
        >
          Green Flags
        </Banner>
        <Ul>
          <li>Organized &ndash; will always find time for you.</li>
          <li>Always leveling up (in life, not just in games).</li>
          <li>Emotionally mature.</li>
          <li>Health-oriented.</li>
          <li>High self-discipline.</li>
        </Ul>
      </div>
      <div className="w-full flex flex-col">
        <Banner
          url="https://images.unsplash.com/photo-1615012553971-f7251c225e01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon="/icons/flag-exclamation.svg"
          alt="flag-exclamation"
        >
          Red Flags
        </Banner>
        <Ul>
          <li>Built a dating profile website.</li>
          <li>Will probably take you to a museum on the first date.</li>
          <li>Regular deep talks is a must.</li>
          <li>We <Bold>WILL</Bold> become gym buddies.</li>
        </Ul>
      </div>
    </div>
  );
}