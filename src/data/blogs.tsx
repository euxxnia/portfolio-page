import cseRenewalEn from './blogs/cse-renewal.en.md?raw';
import cseRenewalKo from './blogs/cse-renewal.ko.md?raw';
import wackathonEn from './blogs/wackathon.en.md?raw';
import wackathonKo from './blogs/wackathon.ko.md?raw';

export type BlogLang = 'en' | 'ko';

type LocalizedText = Record<BlogLang, string>;

type Blog = {
  slug: string;
  date: string;
  image: string;
  source?: { name: string; url: string };
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText;
};

export const blogs: Blog[] = [
  {
    slug: 'snu-cse-website-renewal',
    date: '2024.07.29',
    image: '/images/works/CSEREAL/0.png',
    source: {
      name: 'Brunch',
      url: 'https://brunch.co.kr/@064040503a2242a/36',
    },
    title: {
      en: 'Renewing the SNU Computer Science & Engineering Website',
      ko: '서울대학교 컴퓨터공학부 웹사이트 리뉴얼 작업기',
    },
    summary: {
      en: 'Planning, design, and collaborating with developers — a year of redesigning a department website.',
      ko: '기획, 디자인, 그리고 개발 협업 — 1년 간의 학과 홈페이지 리뉴얼 기록',
    },
    content: { en: cseRenewalEn, ko: cseRenewalKo },
  },
  {
    slug: 'wackathon-icebreaker',
    date: '2024.02.19',
    image: '/images/works/Icebreaker/0.png',
    title: {
      en: 'Designing Icebreaker at Wackathon',
      ko: '와커톤 작업기: Icebreaker',
    },
    summary: {
      en: 'Onboarding, LLM-powered matching, and why we ended up with tarot cards — designing a hackathon project in two weeks.',
      ko: '온보딩, LLM 분석, 그리고 타로카드에 이르기까지 — 2주 해커톤 프로젝트 디자인 기록',
    },
    content: { en: wackathonEn, ko: wackathonKo },
  },
];
