import PartnerSponsorItem from './PartnerSponsorItem';

export default function PartnersSponsorsSection({ partnersSponsors }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {partnersSponsors.map((item) => (
        <PartnerSponsorItem item={item} key={`partner-${item.id}-key`} />
      ))}
    </div>
  );
}
