export default /*css*/`
:where(table), .table {
  border: 1px solid #ddd;
  border-collapse: collapse;
  table-layout: auto;

  :where(th, td) {
    border-bottom: 1px solid #ddd;
    padding: var(--gap);
  }
  
  :where(th) {
    font-weight: bold;
    background-color: #f2f2f2;
  }

  &:where(.striped) :where(tbody tr:nth-child(even)) {
    background-color: #f2f2f2;
  }

  &:where(.bordered) :where(th, td) {
    border: 1px solid #ddd;
  }

  :where(tr:hover) {
    background-color: #aaa;
  }
}`;

