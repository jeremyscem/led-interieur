import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center">
            <Link href="/" className="flex items-center gap-2 justify-center">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold">VéloCargo Pro</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Solution de mobilité écologique et économique pour les
              entreprises. Vélos cargo 100% financés pour vos collaborateurs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-500 text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-500 text-sm"
                >
                  Nos vélos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-500 text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 justify-center">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm text-left">
                  123 Avenue de la République, 75011 Paris
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  contact@velocargopro.fr
                </span>
              </li>
            </ul>
          </div>

          {/* Fourth column (empty in your edited version) */}
          <div className="text-center">
            {/* You can add content here or leave it empty */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} VéloCargo Pro. Tous droits réservés.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-green-500 text-sm"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-green-500 text-sm"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-green-500 text-sm"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
