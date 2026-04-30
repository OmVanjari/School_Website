import { useState, useRef } from "react";
import { Images, Upload, Trash2, Plus, X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  label: string;
  category: string;
}

const defaultImages: GalleryImage[] = [
  { id: 1, src: "/src/assets/hero-home.jpg",       label: "Campus Life",        category: "Campus" },
  { id: 2, src: "/src/assets/hero-academics.jpg",  label: "Academics",          category: "Academics" },
  { id: 3, src: "/src/assets/hero-admissions.jpg", label: "Admissions",         category: "Admissions" },
  { id: 4, src: "/src/assets/hero-calendar.jpg",   label: "Events & Festivals", category: "Events" },
  { id: 5, src: "/src/assets/hero-contact.jpg",    label: "Community",          category: "Community" },
  { id: 6, src: "/src/assets/hero-about.jpg",      label: "Sports & Fitness",   category: "Sports" },
  { id: 7, src: "/src/assets/schoolhome.png",      label: "School Home",        category: "Campus" },
];

const categories = ["All", "Campus", "Academics", "Admissions", "Events", "Community", "Sports"];

const AdminGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>(defaultImages);
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState<GalleryImage | null>(null);
  const [addLabel, setAddLabel] = useState("");
  const [addCategory, setAddCategory] = useState("Campus");
  const [addSrc, setAddSrc] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = filter === "All" ? images : images.filter(i => i.category === filter);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAddSrc(url);
  };

  const handleAdd = () => {
    if (!addSrc || !addLabel) return;
    setImages(prev => [...prev, {
      id: Date.now(),
      src: addSrc,
      label: addLabel,
      category: addCategory,
    }]);
    setAddSrc("");
    setAddLabel("");
    setAddCategory("Campus");
    setShowAdd(false);
  };

  const handleDelete = (id: number) => {
    setImages(prev => prev.filter(i => i.id !== id));
    if (preview?.id === id) setPreview(null);
  };

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-secondary">Gallery</h1>
          <p className="text-muted-foreground text-sm mt-1">{images.length} images · Manage school photo gallery</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Image
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              filter === cat
                ? "bg-primary text-white border-primary"
                : "border-gold/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(img => (
          <div
            key={img.id}
            className="group relative rounded-xl overflow-hidden border border-gold/20 shadow-soft aspect-[4/3] cursor-pointer"
            onClick={() => setPreview(img)}
          >
            <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* label */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs font-semibold font-display truncate">{img.label}</p>
              <span className="text-[10px] text-white/70">{img.category}</span>
            </div>
            {/* delete */}
            <button
              onClick={e => { e.stopPropagation(); handleDelete(img.id); }}
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground gap-3">
            <Images className="h-12 w-12 opacity-30" />
            <p className="text-sm">No images in this category.</p>
          </div>
        )}
      </div>

      {/* Add modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-2xl border border-gold/20 shadow-temple w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-secondary text-lg">Add New Image</h2>
              <button onClick={() => setShowAdd(false)}><X className="h-5 w-5 text-muted-foreground" /></button>
            </div>

            {/* Upload area */}
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-gold/30 rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
            >
              {addSrc ? (
                <img src={addSrc} alt="preview" className="mx-auto h-32 object-cover rounded-lg" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload className="h-8 w-8 opacity-50" />
                  <p className="text-sm">Click to upload image</p>
                </div>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Image label"
                value={addLabel}
                onChange={e => setAddLabel(e.target.value)}
                className="w-full rounded-lg border border-gold/30 bg-background px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <select
                value={addCategory}
                onChange={e => setAddCategory(e.target.value)}
                className="w-full rounded-lg border border-gold/30 bg-background px-3 py-2 text-sm focus:outline-none focus:border-primary"
              >
                {categories.filter(c => c !== "All").map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={() => setShowAdd(false)}
                className="flex-1 py-2 rounded-lg border border-gold/30 text-sm text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                disabled={!addSrc || !addLabel}
                className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Add Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview lightbox */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={preview.src} alt={preview.label} className="w-full rounded-2xl shadow-temple" />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <p className="text-white font-display font-semibold">{preview.label}</p>
              <p className="text-white/60 text-sm">{preview.category}</p>
            </div>
            <button
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
