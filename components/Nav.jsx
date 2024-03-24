
import Link from "next/link";

// Next hooks
import { usePathname } from "next/navigation";

// Framer Motion
import { motion } from "framer-motion";

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects'},
  { path: '/contact', name: 'contact'},
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link 
            href={link.path} 
            key={index} 
            className={`capitalize ${linkStyles}`}
          >
            {link.path === pathname && (
              <motion.span 
                initial={{y: '-100%'}} 
                animate={{y: 0}} 
                transition={{type: 'tween'}} 
                layoutId='underline' 
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;