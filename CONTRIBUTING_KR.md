# SvelteUI에 기여하기

## 기여하는 방법

- **문서 개선:** 불완전하거나 누락된 문서, 부적절한 표현, 예시 또는 설명을 수정합니다.
- **피드백 제공:** SvelteUI를 개선하기 위해 우리는 꾸준히 노력하고 있습니다. GitHub 토론을 통해 SvelteUI의 사용 방법, 누락된 기능, 잘 동작하는 기능 등을 공유해 주세요.
- **SvelteUI 공유:** SvelteUI 문서 링크를 관심 있는 모든 사람과 공유하고, Twitter에서 SvelteUI를 공유하세요.
- **코드기여:** 새로운 기능을 제안하기 위해 GitHub Issues를 사용하거나 관심 있는 [기존 기능](https://github.com/svelteuidev/svelteui/labels/help%20wanted)을 찾아 참여하세요.
- **코드 리뷰 제공:** [소스 코드](https://github.com/svelteuidev/svelteui)를 통해 문제점을 파악하거나 SvelteUI를 더욱 성능적으로 개선해 주세요.

## 기여하기 워크플로우

- 기여할 내용을 결정합니다.
- 새로운 기능을 구현하려는 경우, 코드 작성 전 유지 관리자와 상의하세요. ([Discord](https://discord.gg/2J2xmzCS79) 또는 [토론](https://github.com/svelteuidev/svelteui/discussions/categories/feature-requests))
- 문제 사항을 최종적으로 결정한 후 코드를 작성하고, 커밋 컨벤션을 따르세요.
- 모든 것이 완료되면 PR을 제출하세요.
- 유지 관리자의 피드백을 받고, 발견된 모든 문제를 수정해 주세요.
- PR이 병합되고, 작업이 완료됩니다!

## 커밋 컨벤션

SvelteUI는 모노레포이며, 깔끔한 깃 히스토리를 유지하기 위해 명확한 커밋 메시지를 작성하는 것이 중요합니다.
이 저장소에서의 모든 커밋은 3가지 그룹으로 나뉩니다.

- **package 커밋** 특정 패키지와 관련된 커밋
- **docs 커밋** 문서와 관련된 커밋
- **core 커밋** 저장소 도구와 관련된 커밋으로, 특정 패키지와는 관련이 없습니다.

이 저장소는 커밋을 남기기 위해 커밋지젠(commitizen)을 사용합니다. 변경 사항을 커밋하기 위해 `yarn cm` 명령을 실행해야 합니다. 그러면 커밋지젠 CLI 메시지가 커밋 프로세스를 안내해 줍니다. 커밋 메시지는 2부분으로 구성되어 있습니다.

```bash
[유형]: 메시지
```

예시:

- `[core]: Fix documentation deployment script` - 저장소 스크립트에서 변경되었으며, 문서나 패키지와는 관련이 없습니다.
- `[docs]: update report issues link` - 문서에 관련된 변경 내용
- `[@svelteui/core]: updated SvelteUIProvider config` - `@svelteui/core` 패키지의 SvelteUIProvider 컴포넌트에서 변경된 내용
- `[@svelteui/actions]: added use-portal action` - `@svelteui/actions` 패키지에서 새로운 액션 추가

## Git 브랜치

- **main** - 다음 릴리스를 위해 푸시할 코드가 있는 메인 브랜치
- **experimental** - 다음 마이너 버전 (1.x.0)과 최신 버전을 동기화하는 브랜치로, 실험적인 기능을 구현하는 데 사용될 수 있습니다.

## SvelteUI 로컬 개발 시작하기

- 에디터에서 [editorconfig](https://editorconfig.org/) 확장을 설치합니다.
- **vscode 사용자만 해당** - 권장 확장 기능을 설치합니다.
- [저장소](https://github.com/svelteuidev/svelteui)를 포크하고, 복제하거나 다운로드합니다.
- 모노레포의 루트에서 `yarn install`로 의존성을 설치합니다.
- 의존성 설치가 완료되면:

**[svelteui-prism, svelteui-dates, svelteui-demos]에서 개발하는 경우**

1. `yarn package`를 실행합니다.
   - 변경된 패키지에 대한 변화를 감지하려면 해당 디렉토리에서 `yarn watch`를 실행합니다.
   - 최소한 두 개의 터미널 세션을 열어야 합니다. 이 상황이 해당되지 않는다면 2단계로 넘어가세요.
2. `yarn dev`를 실행하여 Storybook 페이지를 열고 컴포넌트를 확인할 수 있습니다.

**docs에서 개발하는 경우**

- [`deno`](https://deno.land/#installation)를 설치합니다.
- 프로젝트 루트에서:
  - `yarn package`를 실행합니다.
  - `yarn dev:docs`를 실행합니다.

## Yarn 스크립트

모든 패키지의 yarn 스크립트는 [메인 package.json](https://github.com/svelteuidev/svelteui/blob/main/package.json)에서 찾을 수 있으며, 개별 패키지에는 스크립트가 있지만 직접 상호 작용하지 않아야 합니다. 이는 [TurboRepo](https://turborepo.org/)의 특성 때문입니다. 모든 스크립트는 모노레포의 루트에서 실행되어야 합니다.

- `dev:{docs, etc}` - 선택한 개발 환경을 실행합니다.
- `dev` - 스토리를 포함하는 모든 패키지의 Storybook을 실행합니다.
- `clean` - 패키지에서 불필요한 파일과 폴더를 제거합니다. (예: node_modules)
- `format` - 패키지 폴더에서 prettier를 실행합니다.
- `lint` - 패키지 폴더에서 eslint를 실행합니다. (lint 실행 전에 format을 실행하세요)
- `test` - [vitest](https://vitest.dev/)를 사용하여 테스트를 실행합니다.
- `package` - 패키지의 빌드 버전을 생성합니다. (cross package development에 필요)
- `prepush` - sort, format, lint, test를 실행합니다. (코드를 푸시하기 전에 실행하세요)
- `cm` - 커밋지젠을 통해 git 명령어를 실행하여 커밋합니다. (커밋 시 컨벤션을 자동으로 따르기 위한 권장 방법)
