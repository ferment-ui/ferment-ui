import css from '@ferment-ui/core/dist/fui.css';

// Extract sections from the CSS file based on the comments @section and @endsection
export function getCss() {
  const startRegex = /.*\/\*\s+@section\s+(.*)\s+\*\//;
  const endRegex = /.*\/\*\s+@endsection\s+\*\//;
  const sections: Record<string, string> = {};
  const lines = css.split('\n');

  for (let i = 0; i < lines.length; i += 1) {
    const matches = lines[i].match(startRegex);
    if (matches) {
      const section = matches[1];
      const startIndex = i + 1;
      for (let j = startIndex; j < lines.length; j += 1) {
        const endMatches = lines[j].match(endRegex);
        if (endMatches) {
          const endIndex = j;
          sections[section] = lines.slice(startIndex, endIndex).join('\n');
          i = j + 1;
          break;
        }
      }
    }
  }

  sections['Variables'] = '';

  // combine all variables into one section and also prepend them to the matching section
  for (const key in sections) {
    if (key.endsWith('-variables')) {
      const sectionKey = key.replace('-variables', '');
      sections['Variables'] += `${sectionKey}\n${sections[key]}\n\n`;
      sections[sectionKey] = `Variables\n${sections[key]}\n\n${sections[sectionKey]}`;
      delete sections[key];
    }
  }

  const rules: Record<string, string[]> = {};
  
  // split the sections into individual rules
  for (const key in sections) {
    rules[key] = sections[key].split('}').map((rule) => rule.trim() + '\n}\n\n');
  }

  return rules;
}