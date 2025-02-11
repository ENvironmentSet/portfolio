import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'
import choosePlayground from '../choosePlayground.ts'

import hyogwaThumbnail from '../assets/hyogwa-thumbnail.png'

function HyogwaContent() {
  return (
    <>
      <iframe
        src={
          choosePlayground(
            'https://stackblitz.com/edit/vitejs-vite-fcqkub?embed=1&file=src%2Fmain.ts&hideExplorer=1&hideNavigation=1',
            'https://codesandbox.io/p/sandbox/late-moon-p9l8q3?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clzmpx2370006326lgu94jjrk%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clzmpx2370002326lug99wq24%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clzmpx2370003326lf518rsij%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clzmpx2370005326l9dlcc8o1%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clzmpx2370002326lug99wq24%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzmpx2370001326lozdomndz%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzmq12c40002326lj2rzwzuj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fmain.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A4%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A4%252C%2522endColumn%2522%253A1%257D%255D%257D%252C%257B%2522id%2522%253A%2522clzmqdf1a0002326lo4i2436x%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A8%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A8%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Ftsconfig.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzmqfaws0002326lvsog41zn%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A15%252C%2522startColumn%2522%253A27%252C%2522endLineNumber%2522%253A15%252C%2522endColumn%2522%253A27%257D%255D%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clzmpx2370002326lug99wq24%2522%252C%2522activeTabId%2522%253A%2522clzmq12c40002326lj2rzwzuj%2522%257D%252C%2522clzmpx2370005326l9dlcc8o1%2522%253A%257B%2522id%2522%253A%2522clzmpx2370005326l9dlcc8o1%2522%252C%2522activeTabId%2522%253A%2522clzmqfrx8001j326l68pq9sul%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzmpx2370004326lichzph3p%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522id%2522%253A%2522clzmqfrx8001j326l68pq9sul%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clzmpx2370003326lf518rsij%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clzmpx2370003326lf518rsij%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D'
          )
        }
      />

      <blockquote>
        <p>
          No more suspicious wrapper functions, no more mess with pipelines, no more scary types.
          Just <b>plain typescript functions</b>, and <b>plain typescript functions only</b>.
        </p>
      </blockquote>

      <p>
        hyogwa는 타입스크립트를 위해 설계된 이펙트 시스템입니다.
        평범한 타입스크립트 타입과 평범한 타입스크립트 함수만으로, 자연스럽게 프로그래밍 할 수 있는 체계를 지향합니다.
      </p>

      <p>
        자세한 사항은 <a href='https://github.com/ENvironmentSet/hyogwa'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>
    </>
  )
}

const hyogwa: Content = {
  id: 'hyogwa',
  title: 'hyogwa',
  thumbnail: hyogwaThumbnail,
  categories: ['effect system', 'typescript'],
  stars: 55,
  description: '타입스크립트에 꼭 맞는 자연스러운 🌿 이펙트 시스템',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: <HyogwaContent />,
  playground: choosePlayground(
    'https://stackblitz.com/edit/vitejs-vite-fcqkub?file=src%2Fmain.ts',
    'https://codesandbox.io/p/sandbox/late-moon-p9l8q3?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clzmpx2370006326lgu94jjrk%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clzmpx2370002326lug99wq24%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clzmpx2370003326lf518rsij%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clzmpx2370005326l9dlcc8o1%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clzmpx2370002326lug99wq24%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzmpx2370001326lozdomndz%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzmq12c40002326lj2rzwzuj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fmain.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A4%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A4%252C%2522endColumn%2522%253A1%257D%255D%257D%252C%257B%2522id%2522%253A%2522clzmqdf1a0002326lo4i2436x%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A8%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A8%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Ftsconfig.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzmqfaws0002326lvsog41zn%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A15%252C%2522startColumn%2522%253A27%252C%2522endLineNumber%2522%253A15%252C%2522endColumn%2522%253A27%257D%255D%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clzmpx2370002326lug99wq24%2522%252C%2522activeTabId%2522%253A%2522clzmq12c40002326lj2rzwzuj%2522%257D%252C%2522clzmpx2370005326l9dlcc8o1%2522%253A%257B%2522id%2522%253A%2522clzmpx2370005326l9dlcc8o1%2522%252C%2522activeTabId%2522%253A%2522clzmqfrx8001j326l68pq9sul%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzmpx2370004326lichzph3p%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522id%2522%253A%2522clzmqfrx8001j326l68pq9sul%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clzmpx2370003326lf518rsij%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clzmpx2370003326lf518rsij%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D'
  ),
  isLiked: false
}

export default hyogwa