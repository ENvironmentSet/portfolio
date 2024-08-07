import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import tsTransformerTypeRepThumbnail from '../assets/ts-transformer-typerep-thumbnail.png'

function TsTransformerTyperepContent() {
  return (
    <>
      <iframe src='https://stackblitz.com/edit/webpack-webpack-js-org-mrzyf2?embed=1&file=src%2Fmain.ts&hideExplorer=1&theme=dark&hidedevtools=1' />
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
            <code>typeRep</code> 함수는 표현식을 사용할 수 있는 문맥이라면 어디에서든지 사용될 수 있습니다. (단, 간접 호출은 불가능합니다.)
          </li>
        </ol>
      </div>

      <p>
        코드는 <a href='https://github.com/ENvironmentSet/ts-transfromer-typerep'>GitHub 저장소</a>에서 확인할 수 있으십니다.
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
  description: '실행 시간에 타입 정보를 취급할 수 있게 해주는 타입스크립트 커스텀 트랜스포머',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: <TsTransformerTyperepContent />,
  playground: 'https://stackblitz.com/edit/webpack-webpack-js-org-7mxehx?file=src%2Fmain.ts',
  isLiked: false
}

export default tsTransformerTyperep