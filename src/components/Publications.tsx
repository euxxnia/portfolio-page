const ME = 'Eugene Choi';

type Publication = {
  title: string;
  authors: string[];
  venue: string;
  image: string;
  links?: { label: string; href: string }[];
};

const publications: Publication[] = [
  {
    title:
      'Investigating Assistant Bias in LLM User Simulators Using a Role Vector',
    authors: [
      'Daeheon Jeong',
      'Yoonjoo Lee',
      ME,
      'Sinie van der Ben',
      'Juho Kim',
    ],
    venue: 'EMNLP Findings 2026',
    image: '/images/publications/assistant-bias.png',
  },
  {
    title: 'Bridging Gulfs in UI Generation through Semantic Guidance',
    authors: [
      'Seokhyeon Park',
      'Soohyun Lee',
      ME,
      'Hyunwoo Kim',
      'Minkyu Kweon',
      'Yumin Song',
      'Jinwook Seo',
    ],
    venue: 'CHI 2026',
    image: '/images/publications/gulf.png',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1145/3772318.3791966' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2601.19171' },
    ],
  },
];

// "A, B, and C" 형태로 이어 붙이고 본인 이름만 강조
const Authors = ({ authors }: { authors: string[] }) => (
  <>
    {authors.map((author, index) => {
      const isLast = index === authors.length - 1;
      const separator = isLast
        ? ''
        : index === authors.length - 2
          ? ', and '
          : ', ';
      return (
        <span key={author}>
          {author === ME ? <span className="me">{author}</span> : author}
          {separator}
        </span>
      );
    })}
  </>
);

const Publications = () => {
  return (
    <section>
      <h2 className="sectionTitle">Publications</h2>
      <ul className="publicationList">
        {publications.map((publication) => (
          <li className="publication" key={publication.title}>
            <img
              className="publicationThumb"
              src={publication.image}
              alt={publication.title}
              loading="lazy"
              decoding="async"
            />
            <div className="publicationBody">
              <h3 className="publicationTitle">{publication.title}</h3>
              <p className="publicationAuthors">
                <Authors authors={publication.authors} />
              </p>
              <p className="publicationVenue">
                <span>{publication.venue}</span>
                {publication.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
