import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import tsTransformerTypeRepThumbnail from '../assets/ts-transformer-typerep-thumbnail.png'

function checkWebContainerSupport(): boolean {
  try {
    new RegExp('(?<=.).') // Check lookbehind assertion
  } catch {
    return false
  }

  if (!Atomics || !('waitAsync' in Atomics)) return false // Check Atomics.waitAsync

  return true
}

function TsTransformerTyperepContent() {
  return (
    <>
      <iframe
        src={
          checkWebContainerSupport()
            ? 'https://stackblitz.com/edit/webpack-webpack-js-org-mrzyf2?embed=1&file=src%2Fmain.ts&hideExplorer=1&theme=dark&hidedevtools=1'
            : 'https://codesandbox.io/p/devbox/epic-lena-ph58fz?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clzjsd8uu0006326l94bo09v5%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clzjsd8uu0002326l4qbn2vhj%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clzjsd8uu0004326lwaach5xr%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clzjsd8uu0005326lumq30lea%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clzjsd8uu0002326l4qbn2vhj%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzjsd8ut0001326l7phjq8j9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzjt33rg0002326lo7yemji3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A2%252C%2522startColumn%2522%253A60%252C%2522endLineNumber%2522%253A2%252C%2522endColumn%2522%253A60%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fmain.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzjtg8hq0002326l5g63d9mo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A20%252C%2522startColumn%2522%253A6%252C%2522endLineNumber%2522%253A20%252C%2522endColumn%2522%253A6%257D%255D%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clzjsd8uu0002326l4qbn2vhj%2522%252C%2522activeTabId%2522%253A%2522clzjt33rg0002326lo7yemji3%2522%257D%252C%2522clzjsd8uu0005326lumq30lea%2522%253A%257B%2522id%2522%253A%2522clzjsd8uu0005326lumq30lea%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clzjsd8uu0004326lwaach5xr%2522%253A%257B%2522id%2522%253A%2522clzjsd8uu0004326lwaach5xr%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzjsd8uu0003326lr7nc1qps%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clzjsd8uu0003326lr7nc1qps%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D'
        }
      />
      <p>
        타입을 값으로 변환시키는 함수 <code>typeRep</code>을 추가하는 타입스크립트 커스텀 트랜스포머입니다.
        이 함수를 통해 사용자는 실행 시간에 타입 정보를 취급할 수 있습니다.
      </p>

      <div>
        타입스크립트의 <code>emitDecoratorMetadata</code>나 비슷한 커스텀 트랜스포머들과는 세 가지 지점에서 다릅니다.
        <ol>
          <li>
            <code>typeRep</code> 함수는 타입 매개변수를 처리할 수 있습니다.
          </li>
          <li>
            <code>typeRep</code> 함수는 리터럴 타입부터 함수, 객체, 유니언 타입까지 다양한 타입을 취급합니다.
          </li>
          <li>
            <code>typeRep</code> 함수는 표현식을 사용할 수 있는 문맥이라면 어디에서든지 호출될 수 있습니다. (단, 항상 <code>typeRep&lt;type&gt;</code> 꼴이어야 합니다.)
          </li>
        </ol>
      </div>

      <p>
        자세한 사항은 <a href='https://github.com/ENvironmentSet/ts-transfromer-typerep'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>
    </>
  )
}

const tsTransformerTyperep: Content = {
  id: 'ts-transformer-typerep',
  title: 'ts-transformer-typerep',
  thumbnail: tsTransformerTypeRepThumbnail,
  categories: ['typescript', 'transformer'],
  stars: 19,
  description: '실행 시간에 타입 정보를 취급하기 위한 타입스크립트 커스텀 트랜스포머',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: <TsTransformerTyperepContent />,
  playground: checkWebContainerSupport()
    ? 'https://stackblitz.com/edit/webpack-webpack-js-org-7mxehx?file=src%2Fmain.ts'
    : 'https://codesandbox.io/p/devbox/epic-lena-ph58fz?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clzjsd8uu0006326l94bo09v5%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clzjsd8uu0002326l4qbn2vhj%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clzjsd8uu0004326lwaach5xr%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clzjsd8uu0005326lumq30lea%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clzjsd8uu0002326l4qbn2vhj%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzjsd8ut0001326l7phjq8j9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzjt33rg0002326lo7yemji3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A2%252C%2522startColumn%2522%253A60%252C%2522endLineNumber%2522%253A2%252C%2522endColumn%2522%253A60%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fmain.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzjtg8hq0002326l5g63d9mo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A20%252C%2522startColumn%2522%253A6%252C%2522endLineNumber%2522%253A20%252C%2522endColumn%2522%253A6%257D%255D%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clzjsd8uu0002326l4qbn2vhj%2522%252C%2522activeTabId%2522%253A%2522clzjt33rg0002326lo7yemji3%2522%257D%252C%2522clzjsd8uu0005326lumq30lea%2522%253A%257B%2522id%2522%253A%2522clzjsd8uu0005326lumq30lea%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clzjsd8uu0004326lwaach5xr%2522%253A%257B%2522id%2522%253A%2522clzjsd8uu0004326lwaach5xr%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzjsd8uu0003326lr7nc1qps%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clzjsd8uu0003326lr7nc1qps%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D',
  isLiked: false
}

export default tsTransformerTyperep