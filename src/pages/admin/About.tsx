import { ChangeEvent, useEffect, useState } from "react";
import { AdminPageShell } from "@/components/admin/AdminPageShell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Check, X, ChevronRight } from "lucide-react";
import { defaultFacilities, loadAboutFacilities, saveAboutFacilities, type AboutFacility } from "@/lib/aboutContent";

type SectionKey = "history" | "missionVision" | "principal" | "facilities" | null;

const AdminAbout = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);
  const [saved, setSaved] = useState<SectionKey>(null);

  const [form, setForm] = useState({
    history: "Founded in 2005, Vidyalaya has been a beacon of holistic education rooted in Bharatiya values.",
    mission: "To nurture curious minds and noble hearts through a blend of modern education and ancient wisdom.",
    vision: "To be the leading institution that produces well-rounded, culturally grounded, and globally competent citizens.",
    values: "Integrity, Respect, Excellence, Service, Cultural Pride",
    principalName: "Dr. Ramesh Sharma",
    principalMessage: "Education is not just about academics — it is about shaping character, building resilience, and igniting the spirit of inquiry.",
    principalPhoto: "",
  });

  const [facilities, setFacilities] = useState<AboutFacility[]>(defaultFacilities);

  useEffect(() => { setFacilities(loadAboutFacilities()); }, []);

  const saveSection = (key: SectionKey) => {
    if (key === "facilities") {
      const clean = facilities
        .map(f => ({ title: f.title.trim(), desc: f.desc.trim(), image: f.image.trim() }))
        .filter(f => f.title && f.desc && f.image);
      saveAboutFacilities(clean.length > 0 ? clean : defaultFacilities);
    }
    setSaved(key);
    setActiveSection(null);
    setTimeout(() => setSaved(null), 2000);
  };

  const updateFacility = (i: number, field: keyof AboutFacility, value: string) =>
    setFacilities(prev => prev.map((f, idx) => idx === i ? { ...f, [field]: value } : f));

  const handleImageUpload = (i: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { if (typeof reader.result === "string") updateFacility(i, "image", reader.result); };
    reader.readAsDataURL(file);
    e.currentTarget.value = "";
  };

  // ── section card wrapper ──────────────────────────────────────────────────
  const SectionCard = ({
    id, title, summary, children,
  }: { id: SectionKey; title: string; summary: string; children: React.ReactNode }) => {
    const isOpen = activeSection === id;
    const wasSaved = saved === id;
    return (
      <div className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? "border-primary/40 shadow-warm" : "border-gold/20"} bg-card`}>
        {/* Header row — always visible */}
        <button
          type="button"
          onClick={() => setActiveSection(isOpen ? null : id)}
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
              {wasSaved ? <Check className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
            </div>
            <div>
              <p className="font-semibold text-secondary text-sm">{title}</p>
              {!isOpen && <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{summary}</p>}
            </div>
          </div>
          <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
        </button>

        {/* Edit form — only when open */}
        {isOpen && (
          <div className="px-5 pb-5 pt-1 border-t border-gold/15 space-y-4">
            {children}
            <div className="flex gap-3 pt-1">
              <Button onClick={() => saveSection(id)} variant="hero" size="sm">
                Save Section
              </Button>
              <Button onClick={() => setActiveSection(null)} variant="outline" size="sm">
                <X className="h-3.5 w-3.5 mr-1" /> Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <AdminPageShell title="About Us" subtitle="Click any section to edit it">
      <div className="space-y-3">

        {/* ── History ── */}
        <SectionCard id="history" title="School History" summary={form.history}>
          <div className="space-y-1.5">
            <Label>School History</Label>
            <Textarea rows={4} value={form.history} onChange={e => setForm({ ...form, history: e.target.value })} />
          </div>
          <div className="space-y-1.5">
            <Label>Core Values (comma-separated)</Label>
            <Input value={form.values} onChange={e => setForm({ ...form, values: e.target.value })} />
          </div>
        </SectionCard>

        {/* ── Mission & Vision ── */}
        <SectionCard id="missionVision" title="Mission & Vision" summary={`${form.mission} · ${form.vision}`}>
          <div className="space-y-1.5">
            <Label>Mission</Label>
            <Textarea rows={3} value={form.mission} onChange={e => setForm({ ...form, mission: e.target.value })} />
          </div>
          <div className="space-y-1.5">
            <Label>Vision</Label>
            <Textarea rows={3} value={form.vision} onChange={e => setForm({ ...form, vision: e.target.value })} />
          </div>
        </SectionCard>

        {/* ── Principal ── */}
        <SectionCard id="principal" title="Principal's Message" summary={`${form.principalName} — ${form.principalMessage}`}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Principal Name</Label>
              <Input value={form.principalName} onChange={e => setForm({ ...form, principalName: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Photo URL (optional)</Label>
              <Input value={form.principalPhoto} onChange={e => setForm({ ...form, principalPhoto: e.target.value })} placeholder="https://..." />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Message</Label>
            <Textarea rows={4} value={form.principalMessage} onChange={e => setForm({ ...form, principalMessage: e.target.value })} />
          </div>
        </SectionCard>

        {/* ── Facilities ── */}
        <SectionCard id="facilities" title="Campus Facilities" summary={`${facilities.length} facilities listed`}>
          <div className="space-y-3">
            {facilities.map((f, i) => (
              <div key={i} className="rounded-lg border border-gold/20 p-4 space-y-3 bg-muted/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Facility {i + 1}</span>
                  {facilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFacilities(prev => prev.filter((_, idx) => idx !== i))}
                      className="text-xs text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Name</Label>
                    <Input value={f.title} onChange={e => updateFacility(i, "title", e.target.value)} placeholder="e.g. Robotics Lab" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Image URL</Label>
                    <Input value={f.image} onChange={e => updateFacility(i, "image", e.target.value)} placeholder="https://..." />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Description</Label>
                  <Textarea rows={2} value={f.desc} onChange={e => updateFacility(i, "desc", e.target.value)} />
                </div>
                <div className="flex items-center gap-3">
                  <Label htmlFor={`img-${i}`} className="text-xs text-primary cursor-pointer hover:underline">Upload Image</Label>
                  <Input id={`img-${i}`} type="file" accept="image/*" onChange={e => handleImageUpload(i, e)} className="max-w-xs" />
                </div>
                {f.image && <img src={f.image} alt={f.title} className="h-20 w-36 rounded-lg object-cover border border-gold/25" />}
              </div>
            ))}
          </div>
          <Button
            type="button"
            onClick={() => setFacilities(prev => [...prev, { title: "", desc: "", image: "" }])}
            variant="outline"
            size="sm"
          >
            + Add Facility
          </Button>
        </SectionCard>

      </div>
    </AdminPageShell>
  );
};

export default AdminAbout;
