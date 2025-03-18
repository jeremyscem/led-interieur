"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 md:right-8 z-50 flex flex-col gap-3">
      <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center gap-3">
        <Button
          onClick={scrollToForm}
          className="bg-green-500 hover:bg-green-600 text-white w-full"
        >
          Éligibilité
        </Button>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="w-12 h-12 rounded-full flex items-center justify-center border-gray-200"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Retour en haut</span>
          </Button>
        )}
      </div>
    </div>
  );
}
