export default function TimelineTable({ timeline }) {
  return (
    <div className="flex flex-col gap-y-4 py-4 lg:p-4">
      {timeline.map((ms) => (
        <TimelineEvent
          title={ms.title}
          description={ms.description}
          month={ms.month}
          key={`ms${ms.position}`}
        />
      ))}
    </div>
  );
}

function TimelineEvent({ title, description, month }) {
  return (
    <div
      className="milestone flex flex-col lg:grid lg:grid-cols-4 lg:px-8"
      id={`ms-${title}`}
    >
      <div className="flex flex-col col text-center lg:text-right lg:pr-8 py-4 lg:py-0">
        <h3 className="text-xl md:text-2xl text-primary-blue">{title}</h3>
        <p className="font-cursive text-lg md:text-xl text-green">{month}</p>
      </div>
      <div className="col-span-3">
        <p className="font-light text-lg md:text-xl text-center lg:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
