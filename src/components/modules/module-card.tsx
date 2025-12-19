import Image from "next/image";
import Link from "next/link";

const ModuleCard = ({
  uid,
  tabid,
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText1,
  buttonText2,
  commingSoon,
  InDevelopment,
}: ModuleCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-md bg-foreground p-4 text-text shadow-lg sm:p-6">
      <div className="flex-grow">
        <div className="relative mb-3 h-52 w-full overflow-hidden rounded-md sm:mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            className="object-fit object-center sm:object-top"
          />
        </div>
        <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-accentForeground">
          {title}
        </h3>
        {!commingSoon && (
          <p className="mb-3 text-xs leading-relaxed sm:mb-4 sm:text-sm">
            {description}
          </p>
        )}
        {commingSoon && (
          <p className="mb-3 text-base font-semibold text-red-500 sm:mb-4 sm:text-lg">
            (Coming Soon)
          </p>
        )}
        {InDevelopment && (
          <p className="mb-3 text-base font-semibold text-red-500 sm:mb-4 sm:text-lg">
            (In Development)
          </p>
        )}
      </div>
      <div className="mt-auto flex flex-col gap-2 pt-1 sm:flex-row sm:gap-4">
        <Link
          href={`/apps/${uid}`}
          className="primary-button hover:primary-button w-full rounded-md px-3 py-1.5 text-center text-xs font-semibold text-black transition duration-200 sm:w-auto sm:px-4 sm:py-2 sm:text-sm"
        >
          {buttonText1}
        </Link>
        {buttonText2 && (
          <Link
            href={`/pricing?tab=${tabid}`}
            className="flex w-full items-center justify-center rounded-md border border-primary bg-transparent px-3 py-1.5 text-center text-xs text-primary transition duration-200 hover:bg-gray-700 sm:w-auto sm:px-4 sm:py-2 sm:text-sm"
          >
            {buttonText2}
          </Link>
        )}
      </div>
    </div>
  );
};
export type ModuleCardProps = {
  uid?: string;
  tabid?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonText1?: string;
  buttonText2?: string;
  commingSoon?: boolean;
  InDevelopment?: boolean;
};

export default ModuleCard;
