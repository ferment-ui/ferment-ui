
import { rule } from 'ttls-helpers';

export default /*css*/`
.br {
  border-radius: var(--br);
}

.br-square, .br-none {
  border-radius: 0;
}

.br-circle {
  border-radius: 50%;
}

.br-pill {
  border-radius: 9999px;
}`;