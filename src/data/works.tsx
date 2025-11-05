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
    content: `

기록 겸 러프한 작업기를 남겨보고자 한다!
우리 주제는 아이스브레이킹으로 정해졌는데, 누군가와 친해지고 싶은 상황에서 여러 이유로 먼저 말을 꺼내기 어려울 때, 입력해둔 각자의 정보를 분석해서 그걸 그대로 전달하지는 않으면서 공통점이든 흥미로운 점을 뽑아 보여주자는 아이디어에서 출발했다. 너무 말이 길어지지도 않고 컨셉이 분명하면서 너무 학생틱하거나 특수하진 않다는 게 맘에 들었다.

크게 **수집 - (분석) - 접촉 - (분석) - 결과 제공**의 틀이라고 보면 된다.

### 온보딩
처음에 이름 나이 등의 기본 정보를 입력하는 온보딩 화면이 필요했다. 특이사항이라고 한다면 모든 정보가 필수 아닌 선택형이라는 거였고,
UXUI는 어쨌든 어느정도 틀이 정해져있으니 늘 하던 것처럼 레퍼런스든 기억이든 떠올려봤고, 모바일 앱에서 특히 자주 볼 수 있는 '정보는 한번에 하나씩'식 디자인이랑 / 그냥 한꺼번에 뿌리는 방식 중에 선택해야 했다. 토스를 필두로 여러 앱들에서 사용자의 집중을 분산시키지 않게 적은 수의 질문으로 나누는 방식을 많이 사용하고 있고, 토스에서는 특히 '정보는 한번에 하나씩' 이걸 정답처럼 강조하는 걸 알고 있었다. 그치만 웹이라면 얘기가 달라지니 페이지는 정말 최소화하고 싶었고 정보가 선택사항? 그러면 한번에 주는 게 나으려나 이런 생각으로 초안을 만들던 중 팀원 중 한 명은 저 폼 형태 자체에 대해 반대했고, 소통 과정에서 원하는 바가 뭔지 알아내다가 이야기가 조금 길어졌다.
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/1.png" width="60%" />
</div>
정리하면 나는 이거였다.

1: 웹 모바일로 볼 때 인터랙션 많은 거 별로 선호하진 x. 앱에 비해 걸리적거리는 요소(키보드나 하단바 등 브라우저 ui)가 많은 느낌이라.. 둘은 환경적으로 분명 차이가 있긴 하다.

2: 그치만 저 초안이 이탈률 높은 방식이라는 것에 동의하고

3: 2가 걸리면 & 프론트에서 리소스 동의만 된다면 저런 채팅식으로든 인터랙션 넣어서 정보 하나씩 주는 방식으로 풀어내는 것 충분히 좋다.
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/2.png" width="60%" />
</div>
결국은 일종의 채팅형 UI를 상상하고 있는 듯하단 게 전달됐고, 챗봇 레퍼런스들을 몇가지 살펴보면서 한 화면 안에서 별도의 귀찮은 로딩이나 추가적인 클릭 없이 정보를 순차적으로 주는 UI를 만들어낼 수 있겠다 싶어졌다.

### 기획 & LLM
**어떻게 분석할 것인가**

정확도가 떨어질지언정 기본정보들이랑 긴 tmi들이랑 한꺼번에 넣고 분석하는 거 어떻냐는 의견을 냈었다.
// 벡터, 시맨틱 서치
기술적인 건 해커톤 발표에서 길게 설명했으니 패스
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/3.jpg" width="80%" />
</div>

### 시각화를 어떻게 할 것인가
**Image Generator 사용기 절망편?..**
와커톤에 '평소에 써보고 싶던 거 해보자'에 해당하는 게 난 생성형AI였던 거 같다. 생각보다는 부담스러웠지만 이것 덕분에 재밌었던 거 같기도 하고..

텍스트만으로 결과를 보여주는 건 아닌 거 같아서 시각화 얘기가 초반부터 나오긴 했는데 팀원들이 생각하는 시각화가 어떤 건지 얘기하기 시작한 건 꽤 후반이었다. 크게 벤다이어그램이랑 카드 형식이 얘기 나왔던 거 같은데 벤다이어그램은 꽤 크게 반대였다. 차이점에 굳이 집중할 필요가 없었을 뿐더러 한눈에 정보를 정리해준다는 벤다이어그램의 이점이 이 서비스에서 크게 강조할 부분은 아니었기 때문네..

결론부터 말하자면 타로카드로 정해졌고, 디자인 수업들에서 가장 집착적으로 물어보는 질문은 아마 '왜'일텐데  "왜 타로냐?"에 대한 질문에 내가 대답할 수 있어야 했다. 꼭 방법이 타로 하나일 필요는 없어도 타로를 선택한 맥락은 타당해야 했고, 하면서 결국 찾아지긴 했다.

일단 키워드(두 사람의 공통점 조각 ex. '#일본여행') 가 어떤 내용일지 범주조차 전혀 정해져있지 않고 무궁무진하니 이걸 커버할 수 있어야 했다. 그러려면 방법은 맞춤형 이미지를 매번 생성하든, 매번 찾든, 폭넓게 끼워맞출 수 있는 포용적인 이미지를 갖다붙이는 거 정도다. 범주가 정해져있어 대충 예상이 가면 그래픽도 내가 준비해둔 것들에 색 / 질감 / 형태 등 variation을 주는 식으로 커버할 수 있지만 그것도 아니니까..

1) **생성**을 하고 싶은 마음이 있었으니 처음엔 GPT DALL-E를 쓸 생각이었다. 오래 걸린다는 문제는 어쩔 수 없으니 넘어간다 쳐도 스타일 통일에 대한 문제가 있었다. 왼쪽 사진은 스타일이 저정도로만 일관되게 나온다면 그걸로도 나쁘지 않다고 생각했고, 오른쪽 사진은 달리 특유의 어색한 스타일이 보이긴 해도 저런 완결된 맞춤형 사진을 주는 것만으로도 내가 사용자라면 의미 있게 생각할 거 같았다.
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/4.png" width="35%" />
  <img src="/images/wackathon/5.png" width="35%" />
</div>
그치만 생각보다 생각들 하고 있는 이미지의 퀄리티 선은 높은 거 같았고, 반대하길래 일단 후처리든 뭐든 없이 내보내는 건 머릿속에서 지웠다.
그렇게 스타일 통일이 용이한 템플렛에 대한 얘기를 하게됐고, 맥락이 없는 건 좀 아닌 거 같아서 가운데 들어갈 에셋들만이라도 생성을 해주는 게 어떨까 했다. 그정도의 높은 통일성을 원하면 라인드로잉이 어떻겠냐는 얘기로 좁혀졌고 아래 사진처럼 프롬프트를 더해가니 마지막 장 정도는 솔직히 충분하다고 생각했다. 쓰려면 쓸 수 있겠다 정도의 반응이었지만 반대하는 입장도 있어서 일단 보류였다.

<div style="display: flex; gap: 10px; padding-top: 20px; justify-content: center;">
  <img src="/images/wackathon/6.png" width="80%" />
</div>

2) 두번째는 **매번 선택하기**였다. 어떻게 보면 생성의 일종일 수도 있지만 이미 있는 이모지들 조합하는 느낌이 더 강하긴 하니까..
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/7.png" width="80%" />
</div>
이정도 양이면 키워드가 뭐가 나와도 대충 다 커버될 만 했고, 프롬프트 통해서 한번 해석을 해주기 때문에 영 이상한 결과가 나오진 않아서, 적당히 좁아서 퀄리티 유지할 수 있으면서 적당히 넓어서 다 커버할 수 있는 방법이었다. 그러나 딱히 논의가 수면 위로 안 오르면서 넘어가게 됐고, 개인적으로 나도 디자인에 iOS 이모지들 많이 쓰는 거 웬만하면 피하고 싶어해서 다시 언급하진 않았다.

3) 세번째는 **정해진 개수의 폭넓은 이미지 중에서 선택**하여 보여주는 거였다. 추상적인 무언가에 대해 표현해야 하는 순간이 오면, 게다가 그 무언가가 정해져있지 않고 무한하다면, 이미지를 만들어야 하는 사람은 아마 큰 막연함에 휩싸일 수밖에 없을 거다. 전혀 맥락 없는 걸 던지는 건 아무리 생각해도 아닌 거 같아서 배제했으니, 저 위의 이유로 나도 피하고 싶었고, 이걸로 채택하려면 효율적인 방법이 어디 없을까 찾아야 했다. 그러다 타로카드라는 게 논의에 등장했고, 처음엔 보고 사실 별 생각 없었지만 하다보니 타로로 기울게 됐다. 그 큰 이유들은 이정도였다.

1: 타로는 적당히 추상적이고, 어느정도 무맥락 같아보이는 맥락이 적용될 수 있는 소재라는 공감대가 있다 (보는 사람도 엄밀한 뜻을 요구하지 않는다) -> 끼워맞출 정도는 된다.
2: 스타일이 어느정도 통일되어있다.
3: 자료가 많다.

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/8.png" width="80%" />
</div>
2, 3의 이유로 타로는 지피티로 생성해도 되지 않을까 싶었지만 하다가 열만 받고 끝났다. 그냥 이 친구는 내 말을 들을 생각이 없다.. 아직 멀었다!!!

그래서 다시 막막해졌다. 작년 말부터 **스톡 쓰는 거에 너무 거부감 느끼지 말자**는 생각을 하고 있었기 때문에 지피티를 포기하면서부터 바로 좋은 타로 이미지들을 찾아나섰다. 작업 기간이 2달(+a...) 이상이 되지 않는 한 내가 만들고 파인튜닝하는 건 당연하지만 말도 안 되는 거라..

free tarot card series (+vector) (+blue) 이런 식으로 검색해도 역시 10장이 넘는 비슷한 스타일의 카드는 안 찾아졌다. 다 눌러보다가 어떤 하루 3회 무료 다운로드 스톡사이트에 올라온 한 작가의 카드들을 발견한 게 천만다행이었다. 쭉 더 찾아봐도 퀄리티랑 양을 다 만족시키는 건 이거밖에 없었던 게,, 아찔하다. 아무튼 다운받았더니 .ai 파일까지 다 있는데 찾아보니 재가공 가능이라 너무 다행이었고 팀원한테도 부탁해서 20종류의 타로카드가 손에 들어왔다 .. ㅎ 어느 나라에 계신진 모르겠지만 감사하다.

이거 스타일 통일하는 건 귀찮은 작업이었지만 당연히 할 의향이 있었고 배경색이랑 선색, 선 두께랑 불투명도 조절 이런 걸로 이미지 밀도를 어느정도 통일시키니 쓸 만해졌다.

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/9.png" width="80%" />
</div>
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/10.png" width="80%" />
</div>

큰 산들은 넘었지만 마음 속 어딘가에 이 타로카드들을 아예 랜덤으로 주는 건 계속 찝찝했는데, 대면 당일에 이것들 해석을 지피티로 뽑아보고 키워드랑 의미상 가장 비슷한 카드를 골라주는 방식을 쓰자, 그리고 카드 뒷면에 그 해석을 짤막하게 써주자는 얘기로 정리되면서 걱정은 대충 전부 해소됐다.
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/images/wackathon/11.png" width="70%" />
</div>

결과적으로 돌아돌아 효율적인 방법을 찾긴 했다.

아무튼 이번 플젝으로 느낀 건 AI? 디자인 과정에서 도움받을 방법은 많지만 역시 최종 작업물로 쓰기엔 아직 한참 부족하다는 거..

### 애니메이션

리소스든 상황상 로딩이 길 수밖에 없어서 처음부터 로딩 애니메이션이 필요하긴 하겠구나 싶었다. 그치만 분명히 후순위였고, 이 부분은 개발 파트와 관련된 의존성도 딱히 없고 사용성과도 직결되지 않으니 내가 그냥 하면 됐다. 대면 전날인가 대충 이런 게 들어가면 좋겠다~ 이미지라도 전달하려고 카드가 돌아가는 것만 대충 모션 잡아두고, 친구 둘이 만나서 만들어지는 카드라는 의미 담으면 좋겠다 정도 생각하고 갔다. 자잘한 건 남았어도 내가 할 큰 것들은 끝났을 밤 시점에 애펙 켜서 좀 끄적이다가 만들었는데 다행히 낫배드여서 큰 품 안 들이고 끝냈다. 5초짜리 모션 잡는데에도 며칠씩 쓰는데 이건 간단하게 끝낼 수 있어서 다행이었다.

로띠 써보고 싶었어서 검색해보며 만들었고, 이미지 파일이 포함돼서 프론트 팀원이 처리해줘야 할 부분들이 있었는데 금방 해결해줘서 귀여운 게 화면에 빨리 들어갈 수 있었다.

애니메이션 외에도 아래에 분석의 중간 결과 일부를 뽑아서 보여줌으로써 지루함도 줄이고 무언가 되고있다는 느낌을 주고 싶어했다. 그래서 이 부분도 꽤 많이 고민하고 결국 괜찮은 방식으로 좁혀졌지만 시간상 최종 구현에는 포함되지 못해서 목업 애니메이션 정도 만드는 걸로 만족했다.
<div style="display: flex; gap: 10px; padding-top: 10px; justify-content: center;">
  <img src="/images/wackathon/12.png" width="50%" />
</div>

`,
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
