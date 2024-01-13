import Cover from "@/components/cover/Cover";
import Transition from "@/components/transition/Transition";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Transition />
      <Cover />
    </main>
  );
}
