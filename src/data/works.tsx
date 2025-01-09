export type Work = {
  id: number;
  title: string;
  tags: string[];
  date: string;
  keywords: string[];
  image: string;
  content: string;
};

// const getImageArray = (name: string, imgNum: number): string[] => {
//   const imageArray = [];
//   for (let i = 1; i < imgNum + 1; i++) {
//     imageArray.push(`${name}/${i}.png`);
//   }
//   return imageArray;
// };

export const works: Work[] = [
  {
    id: 1,
    title: 'SNU CSE 홈페이지 리뉴얼',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['UXUI Design'],
    image: '/images/works/CSEREAL/0.png',
    content:
      '서울대학교 컴퓨터공학부 홈페이지 리뉴얼 프로젝트에 디자인과 기획으로 참여\n\n5명의 개발자와 2명의 디자이너로 이루어진 팀에서 협업 중이다.',
  },
  {
    id: 2,
    title: 'SNUTT: 서울대학교 시간표',
    tags: ['UXUI'],
    date: '2023~',
    keywords: ['Product Design'],
    image: '/images/works/SNUTT/0.png',
    content:
      'SNUTT는 와플스튜디오에서 개발한 MAU 2만 명의 서울대생 필수 시간표 어플이다.\n2023년부터 프로덕트 디자이너를 맡으며 11명의 개발자와 1명의 디자이너와 함께 서비스를 만들어나가고 있다.\n기획과 UXUI 디자인 외에도 전반적인 디자인을 맡고 있다.',
  },
  {
    id: 3,
    title: 'Designing a Product',
    tags: ['Graphic', 'Dev', 'HCI'],
    date: '2024',
    keywords: ['Starter Kit Design & Web'],
    image: '/images/works/DesigningAProduct/0.png',
    content:
      '프로덕트 개발이라는 분야에 대한 나름의 해석을 추상적인 이미지로 표현한 작품',
  },
  {
    id: 4,
    title: 'TIMESPACE',
    tags: ['UXUI', 'HCI'],
    date: '2024',
    keywords: ['with. NAVER Place / Map'],
    image: '/images/works/Timespace/0.png',
    content:
      '네이버 플레이스 2030 온오프라인 경험 강화를 주제로, \n학업 공간 스케줄러 TIMESPACE 서비스를 기획&디자인하였다. \n\n(2024-2 서비스UX디자인 수업에서 진행한 산학 프로젝트입니다.)',
  },
  {
    id: 5,
    title: 'Icebreaker',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['Hackathon: UXUI Design, LLM'],
    image: '/images/works/Icebreaker/0.png',
    content:
      '해커톤에서 4명의 개발자와 함께 만든 아이스브레이킹 웹\nLLM 어쩌고',
  },
  {
    id: 6,
    title: 'ADMIT ONE',
    tags: ['HCI', 'UXUI'],
    date: '2024',
    keywords: ['HCI Research & UXUI Design'],
    image: '/images/works/AdmitOne/0.png',
    content: 'Work 4 content...',
  },
  {
    id: 7,
    title: 'Cafe NIEVE',
    tags: ['Graphic'],
    date: '2024',
    keywords: ['Logo Design'],
    image: '/images/works/Nieve/0.png',
    content: 'Work 5 content...',
  },
  {
    id: 8,
    title: 'Emotion Tracker',
    tags: ['Graphic', 'Dev'],
    date: '2023',
    keywords: ['Web & Animation'],
    image: '/images/works/EmotionTracker/0.png',
    content: 'Work 7 content...',
  },
  {
    id: 9,
    title: 'Observing C Codes',
    tags: ['Graphic', 'Dev'],
    date: '2023',
    keywords: ['Typography Poster'],
    image: '/images/works/ObservingCCodes/0.png',
    content: 'Work 8 content...',
  },
  {
    id: 10,
    title: 'Childrens Day',
    tags: ['Graphic', 'Dev'],
    date: '2023',
    keywords: ['Motion Typography Web'],
    image: '/images/works/ChildrensDay/0.png',
    content: 'Work 8 content...',
  },
  {
    id: 11,
    title: 'LIGHTBANK',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['Lending protocol for Kroma'],
    image: '/images/works/Lightbank/0.png',
    content: 'Work 9 content...',
  },
];
