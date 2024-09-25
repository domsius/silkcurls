import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'img'>) {
  return (
    <img
      src={`/images/logo.png`} // Updated path
      alt={`${process.env.SITE_NAME} logo`}
      {...props}
    />
  );
}
