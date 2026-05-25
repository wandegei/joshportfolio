const PHOTO_URL = "https://media.base44.com/images/public/6a06cded1e63570267c39f75/2257c9335_Screenshot_20231220_163024_WhatsAppBusiness.jpg";

export default function LogoAvatar({ size = 36 }) {
  return (
    <img
      src={PHOTO_URL}
      alt="Joshua Wandegei"
      style={{ width: size, height: size }}
      className="rounded-full object-cover object-top border-2 border-primary/30 hover:border-primary/60 transition-colors duration-200"
    />
  );
}