import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';
 
const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);
if (langCode === 'und') {
  console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
  const language = langs.where("3", langCode);
  console.log(colors.green(`Our best guess is: ${language.name}`));
}

