import { css } from 'lit';

export default css`
.block {
  display: block;
}

.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

.flex, [class^="fd-"], [class*=" fd-"] {
  display: flex;
  flex-direction: column;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}
`;