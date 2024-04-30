import elements from '@ferment-ui/core/dist/custom-elements.json';


export function getCustomElements() {
  const customElements = elements.modules.filter(element => {
    return element.declarations.find(declaration => declaration.kind === 'class') && element.path.includes('components');
  });

  return customElements.map(element => ({
    ...element,
    name: element.declarations.find(declaration => declaration.kind === 'class')?.name.replace('FUI', ''),
  }));
}