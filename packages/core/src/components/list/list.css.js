import { css } from 'lit';

export default css`
/* @section List */
ol, ul, ::part(list) {
  list-style-type: disc;
  margin-left: 1.5em;
}

.ls-none {
  list-style-type: none;
  margin-left: unset;
}

.lst-none {
  list-style-type: none;
}

.lsp-inside {
  list-style-position: inside;
}

.lsp-outside {
  list-style-position: outside;
}
/* @endsection */
`;