import Cover from "@/components/Cover/Cover";
import Transition from "@/components/Transition/Transition";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Transition />
      <Cover />
    </main>
  );
}
