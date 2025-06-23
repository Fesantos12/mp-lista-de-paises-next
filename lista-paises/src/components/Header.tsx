import Link from 'next/link';
import Logo from '../../public/Logo.svg';

export const Header = () => {
  return (
    <header className="w-full h-[104px] bg-white flex items-center px-10 md:px-52">
      <Link href="/">
        <Logo width={258} heith={55} />
      </Link>
    </header>
  );
};
