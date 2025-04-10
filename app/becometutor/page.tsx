// app/findtutor/page.tsx
 // ✅ relative import from same folder

import { BecomeTutor } from "@/components/features/BecomeTutor";
import { FindTutor } from "@/components/features/FindTutor";

export default function FindTutorPage() {
  return (
    <main className="min-h-screen bg-white">
      <BecomeTutor />
    </main>
  );
}
