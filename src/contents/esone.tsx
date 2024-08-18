import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import esoneThubnail from '../assets/esone-thumbnail.png'

function EsoneContent() {
  return (
    <>
      <p>
        esone은 자바스크립트 초기 표준인 ECMAScript 1의 인터프리터입니다. 순수 함수형 프로그래밍과 타입 주도 개발을 적용해 개발했습니다.
      </p>

      <ol>
        <li>
          모든 함수가 순수합니다.
          성능을 제외한 모든 구현상의 디테일은 외부에서 비가시적이며, 핵심적인 정보는 인터페이스에 반영됩니다.
          이를 통해 함수를 사용할 때 인터페이스에만 의존한다는 이상적인 시나리오를 실현했습니다.
        </li>
        <li>
          모든 코드에 타입을 부여했습니다.
          <code>any</code> 타입은 한 번도 사용하지 않았습니다.
        </li>
        <li>
          요구사항을 타입으로 먼저 기술하고 이를 만족시키는 코드를 작성하여 구현을 완성하는 접근법을 취했습니다.
          모든 함수가 순수하면서 동작을 설명하기에 적절한 타입을 부여받았기에 타입 주도 개발이라고도 알려진 이 접근법을 효과적으로 적용할 수 있었습니다.
        </li>
        <li>
          <a href='https://github.com/ENvironmentSet/esone/blob/master/src/Parser/Parser.ts'>직접 설계한 파서 컴비네이터</a>로 파서를 구현했습니다.
          파서를 조합하여 파서를 구성하는 방법으로 코드 중복을 상당 부분 줄일 수 있었습니다.
        </li>
        <li>
          <a href='https://github.com/ENvironmentSet/esone/blob/master/src/Evaluator/Runtime/Runtime.ts'>Continuation에 기반한 실행 모델</a>을 고안해 의미론을 기술했습니다.
          <a href='https://github.com/ENvironmentSet/esone/blob/master/src/Evaluator/Runtime/Runtime.ts#L31'>실행 중단과 같은 다양한 의미</a>를 기술할 수 있었을뿐더러, <a href='https://github.com/ENvironmentSet/esone/blob/master/src/Evaluator/Statement/compileIf.ts'>실행 모델 합성</a>을 통해 코드 중복을 줄일 수 있었습니다.
        </li>
        <li>
          복잡한 연산을 표현해야 할 때는 모나드 변환자를 사용해 대응하는 모나드를 만들었습니다.
        </li>
      </ol>

      <p>
        코드는 <a href='https://github.com/ENvironmentSet/esone'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>
    </>
  )
}

const esone: Content = {
  id: 'esone',
  title: 'esone',
  thumbnail: esoneThubnail,
  categories: ['interpreter', 'functional programming'],
  stars: 28,
  description: '자바스크립트 인터프리터',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: <EsoneContent />,
  playground: 'https://stackblitz.com/~/github.com/ENvironmentSet/esone',
  isLiked: false
}

export default esone