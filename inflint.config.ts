import type { Config } from '@exlint.io/inflint';

const inflintConfig: Config = {
	aliases: {
		'[UIComponent]': `ED([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?`,
	},
	rules: {
		'{scripts,assets/scripts}/**/*': [2, 'kebab-case'],
		'apps/frontend/src/**/*.css': 2,
		'apps/frontend/src/{assets,data,hooks,i18n,interfaces,store,utils}/**/*': [2, 'kebab-case'],
		'apps/frontend/src/components/{containers,layout}/**/*.{tsx,scss}': [2, 'PascalCase.Point'],
		// 'apps/frontend/src/components/ui/*.{tsx,scss}': [2, '[UIComponent]'],
		// 'apps/frontend/src/components/ui/*': [2, '[UIComponent]', { onlyDirectories: true }],
	},
};

export default inflintConfig;
