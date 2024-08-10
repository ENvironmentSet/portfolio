import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import lambda2wasmThumbnail from '../assets/lambda2wasm-thumbnail.png'

function Lambda2wasmContent() {
  return (
    <>
      <p>
        <code>lambda2wasm</code>은 람다 식을 웹 어셈블리로 번역하는 컴파일러입니다.
        함수형 언어를 비롯한 람다 대수를 모델로 가질 수 있는 언어를 웹 어셈블리로 번역할 때 백엔드로 사용할 수 있습니다.
      </p>

      <ol>
        <li>
          Rank 1 polymorphism을 지원하는 타입 검사기를 구현했습니다.
        </li>
        <li>
          Closure를 사용해 고차 함수와 자동 커링을 구현했습니다.
        </li>
        <li>
          Parametric polymorphism의 성질을 활용해 하나의 함수는 항상 한 개의 구현만을 갖도록 구현했습니다.
        </li>
      </ol>

      <p>
        한편, 개선해야 할 점도 존재합니다.
        <ol>
          <li>
            런타임의 메모리 관리 기능이 빈약합니다.
            메모리 해제가 구현되어 있지 않습니다.
          </li>
          <li>
            코드 생성기에 버그가 있습니다.
            타입 변수를 사용해 타입이 기술된 함수 매개변수를 갖는 함수를 monomorphic한 함수에 적용하고, 그 함수를 함수 내부에서 사용하면 타입 변환 로직이 없어 런타임 오류가 발생합니다.
            즉, <code>f: a -&gt; a. x: a. f x</code>를 <code>x: I32. x + 1</code>와 <code>1#I32</code>에 적용하면 오류가 발생합니다.
          </li>
        </ol>
      </p>

      <p>
        자세한 사항은 <a href='https://github.com/ENvironmentSet/lambda2wasm'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>
    </>
  )
}

const lambda2wasm: Content = {
  id: 'lambda2wasm',
  title: 'lambda2wasm',
  thumbnail: lambda2wasmThumbnail,
  categories: ['compiler', 'web assembly'],
  stars: 18,
  description: '람다 식을 웹 어셈블리로 번역하는 컴파일러',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: <Lambda2wasmContent />,
  playground: 'https://stackblitz.com/~/github.com/ENvironmentSet/lambda2wasm',
  isLiked: false
}

export default lambda2wasm