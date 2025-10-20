import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full text-center py-2 text-sm font-bold flex justify-center items-center gap-2" style={{ height: "0.9in" }}>
      {/* Footer text */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} MohammedKaif. All rights reserved.
      </p>

      {/* Back to top button */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
