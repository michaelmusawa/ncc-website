import { ServiceCategory, ServiceItem, LinkProps } from "@/app/lib/types";
import { StrapiImage } from "../../StrapiImage";

export default function ServiceCategoryCard({
  title,
  description,
  userType,
  image,
  url,
  serviceItems,
  activeUserType,
}: Readonly<ServiceCategory & { activeUserType: string }>) {
  // Don’t render if this category’s userType is not “all” and not equal to activeUserType
  const shouldHide = activeUserType !== "all" && activeUserType !== userType;

  if (shouldHide) {
    return null;
  }

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-[1.02] flex flex-col relative overflow-hidden">
      {/* Header: Optional image, gradient or fallback */}
      <div className="relative h-24 bg-gradient-to-r from-amber-500/90 to-amber-400/80 overflow-hidden rounded-t-xl">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

        {/* If an `image` prop exists, layer it on top */}
        {image?.url && (
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || title}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
        )}

        {/* Optional LinkButton / URL in header */}
        {url && (
          <a
            href={url.href}
            target={url.isExternal ? "_blank" : "_self"}
            rel={url.isExternal ? "noopener noreferrer" : undefined}
            className="absolute bottom-3 right-3 bg-white/90 text-amber-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm transition hover:bg-white"
          >
            {url.text}
          </a>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category Title + Underline */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="h-1 w-16 bg-amber-200 rounded-full mt-2 mb-3" />
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {description}
          </p>
        </div>

        {/* Render all service items dynamically */}
        <div className="space-y-3 mb-6 flex-1">
          {serviceItems?.map((item: ServiceItem, idx: number) => {
            const cta: ServiceItem = item;
            return (
              <a
                key={idx}
                href={cta.href}
                target={cta.isExternal ? "_blank" : "_self"}
                rel={cta.isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center text-gray-700 hover:text-amber-600 hover:pl-1 transition-all duration-300 text-sm group/link"
              >
                <span className="w-5 h-5 mr-2 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover/link:bg-amber-100 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                {cta.text}
              </a>
            );
          })}
        </div>

        {/* Action Buttons (Apply / Visit) */}
        <div className="pt-4 grid grid-cols-2 gap-3 border-t border-gray-100">
          <a
            href="https://nairobiservices.go.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-sm bg-primary text-white font-medium rounded-lg shadow-sm hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-1.5"
            title="Apply online"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Apply Online
          </a>
          <a
            href="https://maps.google.com/?q=City+Hall+Annex+Nairobi"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-sm bg-gray-100 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-1.5"
            title="Visit City Hall Annex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Visit Us
          </a>
        </div>
      </div>
    </div>
  );
}
