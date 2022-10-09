import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

export default function FAQuestion({
  id, question, answer, hasBg,
}) {
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const answerText = md.render(answer);

  return (
    <div className={hasBg ? 'bg-primary-blue ' : ''}>
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button collapsed focus:ring-0 ${
            hasBg
              ? 'focus:bg-secondary-blue bg-primary-blue text-white'
              : 'focus:bg-primary-blue text-primary-blue focus:text-white'
          }`}
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
          <div className={`${hasBg ? 'markdown-light' : 'markdown'}`}>
            {parse(answerText)}
          </div>
        </div>
      </div>
    </div>
  );
}
