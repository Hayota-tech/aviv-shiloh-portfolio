module.exports = {
	'apps/frontend/**/*.ts': [
		'yarn --filter frontend exec eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/frontend**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'apps/frontend/**/*': 'inflint -c ./inflint.config.ts',
	'apps/frontend/src/**/*.scss': 'stylelint --config ./apps/frontend/stylelint.config.cjs --fix',
};
