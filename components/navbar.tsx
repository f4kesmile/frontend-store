import Link from "next/link";
import Container from "./ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./ui/navbar-actions";
import MainNav from "./main-nav";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          {/* Kiri: Logo + Nav */}
          <div className="flex items-center gap-x-4">
            <Link href="/" className="ml-4 flex lg:ml-8 gap-x-2">
              <p className="font-bold text-xl">Toko</p>
            </Link>
            <MainNav data={categories} />
          </div>

          {/* Kanan: Cart Button */}
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
