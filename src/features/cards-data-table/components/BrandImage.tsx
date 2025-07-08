interface BrandImageProps {
	src: string;
	alt: string;
}

export const BrandImage = ({ src, alt }: BrandImageProps) => {
	return <img alt={alt} className="w-10 h-10" src={src} />;
};
