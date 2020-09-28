install:
	npm install
publish:
	npm publish --dry-run
test:
	npm run test
testwatch:
	npx -n --experimental-vm-modules jest --watch
test-coverage:
	npm run test -- --coverage
lint:
	npx eslint .
