export default function FAQuestion({ id, question, answer }) {
  return (
    <div className="bg-primary-blue ">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed focus:bg-secondary-blue bg-primary-blue text-white focus:ring-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          <span className="text-inherit text-xl mb-2 hover:cursor-pointer">
            {question}
          </span>
        </button>
      </h2>

      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#acc"
      >
        <div className="accordion-body">
          <p className="text-white text-xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}
