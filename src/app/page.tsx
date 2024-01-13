import Cover from "@/components/cover/Cover";
import Transition from "@/components/transition/transition";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Transition />
      <Cover />
    </main>
  );
}
