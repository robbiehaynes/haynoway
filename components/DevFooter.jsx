import Socials from "./Socials";

const DevFooter = () => {
  return (
    <footer className="relative z-[1] py-11 px-6 text-center bg-[color:var(--ds-bg)] text-[color:var(--ds-text)]">
      <Socials
        containerStyles="flex justify-center gap-6 mb-4"
        iconsStyles="text-[color:var(--ds-accent-300)] text-[18px] hover:text-[color:var(--ds-accent-100)] transition-colors"
      />
      <div className="font-ds-mono text-[13px] text-[color:var(--ds-text-muted)]">
        Copyright &copy; Rob Haynes. All rights reserved.
      </div>
    </footer>
  );
};

export default DevFooter;
