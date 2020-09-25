install:
	npm install
publish:
	npm publish --dry-run
make test:
	npm run test
make testwatch:
	npx -n --experimental-vm-modules jest --watch
make test-coverage:
	npm run test -- --coverage
make lint:
	npx eslint .
