import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Flag from 'react-flagpack';

export default function LangSwitch() {
  const router = useRouter();
  const { locales, locale: currLocale, asPath } = router;
  const switcherOptions = {
    en: { value: 'English', flagCode: 'GB-UKM' },
    fr: { value: 'Français', flagCode: 'FR' },
  };
  return (
    <div className="lg:text-white font-normal">
      <div className="dropdown">
        <button
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          className="text-2xl lg:text-lg flex items-center hover:text-orange lg:hover:text-secondary-blue"
          type="button"
        >
          <div className="lg:inline-flex items-center mr-2 hidden">
            <LanguageOutlinedIcon />
          </div>
          {switcherOptions[currLocale].value}
          <span className="ml-2 dropdown-toggle lg:hidden" />
        </button>
        <div
          className="dropdown-menu dropdown-menu-lg-end px-2 bg-secondary-blue border-orange lg:bg-white lg:border-none"
          aria-labelledby="dropdownMenuButton"
        >
          {locales.map((loc) => (
            <Link href={asPath} key={`lan-switch-${loc}`} locale={loc}>
              <a className="nav-link hover:text-orange">
                <span className="pr-2">
                  <Flag code={switcherOptions[loc].flagCode} size="M" />
                </span>
                {' '}
                {switcherOptions[loc].value}
                {' '}
                <span
                  className={`pl-2 text-orange lg:text-green ${
                    loc !== currLocale && 'hidden'
                  }`}
                >
                  <DoneOutlinedIcon fontSize="small" />
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="lg:hidden">Hi</div> */}
    </div>
  );
}
